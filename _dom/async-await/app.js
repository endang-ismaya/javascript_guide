const myUsers = async function getUsers() {
  // jshint ignore:line
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // jshint ignore:line

  // only proceed once it resolved
  const data = await response.json(); // jshint ignore:line

  // only proceed once second promise is resolved
  return data;
};

myUsers()
  .then(users => {
    // console.log(users);

    let output = '<br>';
    users.forEach(user => {
      output += `${user.id} | ${user.name} | ${user.email}<br>`;
    });

    document.body.innerHTML = output;
  })
  .catch(err => console.log(err));
