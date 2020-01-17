const myDb = [
  { name: 'James Burton', email: 'jamesburton@gmail.com', age: 25 },
  { name: 'Mark Robinson', email: 'markr@gmail.com', age: 35 },
  { name: 'Lara Barbosa', email: 'larabbs@gmail.com', age: 28 }
];

(function Avatars(db) {
  const deleteUser = function() {
    const buttons = document.querySelectorAll('.card-delete');

    function deleteThis(e) {
      const index = parseInt(e.getAttribute('data-card'), 10);
      db.splice(index, 1);
      generateList();
    }

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        deleteThis(this);
      });
    }
  };

  const generateList = function() {
    const parent = document.getElementById('parent_avatars');
    let templates = '';

    for (let i = 0; i < db.length; i++) {
      const { name, email, age } = db[i];
      const template = `
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <div class="card-delete" data-card="${i}">X</div>
              <h3 class="card-title">${name}</h3>
              <p class="card-text"><strong>Email</strong>:<span>${email}</span></p>
              <p class="card-text"><strong>Age</strong>:<span>${age}</span></p>
            </div>
          </div>
        </div>`;

      templates += template;
    }

    parent.innerHTML = '';
    parent.insertAdjacentHTML('afterbegin', templates);
    deleteUser();
  };

  const addUser = function() {
    const frmAdd = document.getElementById('myForm');

    const validateUser = function(elements) {
      const emails = db.map(function(item) {
        return item.email;
      });

      for (let i = 0; i < elements.length; i++) {
        if (elements[i] === '' || emails.indexOf(elements[i]) > 0) {
          return false;
        }
      }
      return true;
    };

    function grabUser() {
      const name = document.getElementById('user_name').value;
      const email = document.getElementById('user_email').value;
      const age = document.getElementById('user_age').value;
      const elements = [name, email, age];

      if (validateUser(elements)) {
        // add the card\
        db.push({ name, email, age });
        document.querySelector('#myForm').reset();
        generateList();
      } else {
        //show error
        document.querySelector('#error').style.display = 'block';
        setTimeout(function() {
          document.querySelector('#error').style.display = 'none';
        }, 2000);
      }
    }

    frmAdd.addEventListener('submit', function(e) {
      e.preventDefault();
      grabUser();
    });
  };

  const init = function() {
    generateList();
    addUser();
  };

  init();
})(myDb);
