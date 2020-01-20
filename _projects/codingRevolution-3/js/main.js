// ITUNES URL
// https://itunes.apple.com/search?term=ARTIST&entity=album

function MusicDB() {
  this.init = function() {
    this.search();
  };

  this.search = function() {
    const $this = this;
    const form = document.querySelector('#form');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const { value } = document.querySelector('#input_search');
      form.reset();

      $this.getData(value);
    });
  };

  this.getData = function(artist) {
    const $this = this;
    const http = new XMLHttpRequest();
    const url = `https://itunes.apple.com/search?term=${artist}&entity=album`;
    const method = 'GET';

    const container = document.getElementById('album_list_container');
    container.innerHTML = '';

    http.open(method, url);
    http.onreadystatechange = function() {
      if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        $this.showArtist(JSON.parse(http.response));
      } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log('something went wrong!');
      }
    };

    http.send();
  };

  this.showArtist = function(obj) {
    const container = document.getElementById('album_list_container');
    const notMatch = document.getElementById('not_match');
    let template = '';

    if (obj.results.length > 0) {
      notMatch.style.display = 'none';

      for (let i = 0; i < obj.results.length; i++) {
        const tmp = `<div class="col-sm-3 album_item">
          <div class="item_thmb" style="background:url(${obj.results[i].artworkUrl100})"></div>
          <div class="item_title">${obj.results[i].collectionName}</div>
          <div class="item_price">
            <span>Price:</span> ${obj.results[i].collectionPrice} ${obj.results[i].currency}
          </div>
          <a href="${obj.results[i].collectionViewUrl}" target="_blank">Buy Now!</a>
        </div>`;

        template += tmp;
      }

      container.innerHTML = '';
      container.insertAdjacentHTML('afterbegin', template);
    } else {
      notMatch.style.display = 'block';
    }
  };
}

const musicdb = new MusicDB();
musicdb.init();
