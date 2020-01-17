
var myDatabase = [
    {name:'James Burton', email:'James@gmail.com',age:25},
    {name:'Mark Robinson', email:'mark@gmail.com',age:30},
    {name:'Lara Barbosa', email:'lara@gmail.com',age:28},
];

(function Avatars(db){

    var init = function(){
        generateList();
        enterUser();
    }

    var generateList = function(){
        var parent = document.querySelector('#parent_avatars');
        var template = '';

        for(var i = 0; i < db.length;i++){

            template += '<div class="col-sm-4">';
            template +=   '<div class="card">';
            template +=        '<div class="card-delete" data-card="'+ i +'">X</div>';
            template +=            '<div class="card-block">';
            template +=                '<h3 class="card-title">'+ db[i].name +'</h3>';
            template +=                '<p class="card-text">';
            template +=                    '<strong>Email</strong>:<span>'+ db[i].email+'</span>';
            template +=                '</p>';
            template +=                '<p class="card-text">';
            template +=                    '<strong>Age</strong>:<span>'+ db[i].age +'</span>';
            template +=                '</p>';
            template +=        '</div>';
            template +=    '</div>';
            template += '</div>';
        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin',template);
    
    }

    var enterUser = function(){
        console.log('form')
    }   

    init();
}(myDatabase))