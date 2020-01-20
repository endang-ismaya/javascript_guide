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

// pass in a callback
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
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

// call createPost Function
createPost(post3, getPosts);

// get the post after that
// getPosts(); -> already included as a  callback
