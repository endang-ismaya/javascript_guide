function GetLooser() {
  this.applicants = [];

  this.init = function() {
    this.addApplicants();
    this.getRandomUser();
  };

  this.showStage = function(stage) {
    const resultsContainer = document.querySelector('.results_container');
    const applicantsContainer = document.querySelector('.applicant_container');

    if (stage === 'main') {
      applicantsContainer.className = 'applicant_container';
      resultsContainer.className += ' hidden';
    } else {
      applicantsContainer.className += ' hidden';
      resultsContainer.className = 'results_container';
    }
  };

  this.getRandomUser = function() {
    const _this = this;
    const btnLooser = document.querySelector('#show_results');

    function showLooser() {
      _this.showStage('result');
      _this.showRandomUser();
    }

    btnLooser.addEventListener('click', function() {
      if (_this.applicants.length > 1) {
        showLooser();
      } else {
        alert('You need more users!');
      }
    });
  };

  this.showRandomUser = function() {
    const rand = Math.floor(Math.random() * this.applicants.length);
    const nameRandom = this.applicants[rand];
    const resultContainer = document.querySelector('.result');

    resultContainer.innerHTML = '';
    resultContainer.insertAdjacentHTML('afterbegin', `<h3>${nameRandom}</h3>`);
  };

  this.runAgain = function() {
    const _this = this;
    const btnRunAgain = document.querySelector('.run_again');

    btnRunAgain.addEventListener('click', function() {
      _this.showRandomUser();
    });
  };

  this.startOver = function() {
    const _this = this;
    const btnStartOver = document.querySelector('.start_again');
    const parent = document.querySelector('.applicant_list_wrapper');

    btnStartOver.addEventListener('click', function() {
      _this.applicants = [];
      _this.showStage('main');
      parent.innerHTML = '';
    });
  };

  this.showList = function() {
    const parent = document.querySelector('.applicant_list_wrapper');
    let template = '';

    for (let i = 0; i < this.applicants.length; i++) {
      const name = this.applicants[i];
      template += `<span class="name-tag" data-id="${i}">${name}</span>`;
    }

    parent.innerHTML = '';
    parent.insertAdjacentHTML('afterbegin', template);
    this.deleteOne();
    this.runAgain();
    this.startOver();
  };

  this.deleteOne = function() {
    const _this = this;
    const names = document.querySelectorAll('.name-tag');

    function removeIt(element) {
      const index = parseInt(element.getAttribute('data-id'), 10);
      _this.applicants.splice(index, 1);
      _this.showList();
    }

    for (let i = 0; i < names.length; i++) {
      names[i].addEventListener('click', function() {
        removeIt(this);
      });
    }
  };

  this.addApplicants = function() {
    const _this = this;
    const addBtn = document.getElementById('add_applicant');

    function generateList(input) {
      const { value } = input;

      if (_this.checkValid(value.toLowerCase())) {
        // add to list
        _this.applicants.push(value.toLowerCase());
        input.value = '';
        _this.showList();
      } else {
        // show error message
        console.log('error');
      }
    }
    addBtn.addEventListener('click', function() {
      const input = document.querySelector('#applicant_value');
      generateList(input);
    });
  };

  this.checkValid = function(value) {
    if (this.applicants.indexOf(value) < 0 && value !== '') {
      return true;
    }

    return false;
  };
}

const getLooser = new GetLooser();
getLooser.init();
