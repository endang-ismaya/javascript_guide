/* jshint esversion: 6 */

const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

function createPost(post) {

    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            } else {
                reject('Something bended wrong!');
            }

        }, 2000);
    });
}

function getPosts() {
    setTimeout(() => {
        let output = '';

        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;

    }, 1000);
}

const post3 = {
    title: 'Post Three',
    body: 'This is post three'
};

createPost(post3)
.then(getPosts)
.catch(function (err) {
    console.log(err);
});
