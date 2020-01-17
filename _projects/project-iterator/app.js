/* jshint esversion: 6 */
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'John Smith',
    age: 36,
    gender: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    name: 'John Josh',
    age: 28,
    gender: 'male',
    location: 'SanFransisco CA',
    image: 'https://randomuser.me/api/portraits/men/80.jpg'
  },
  {
    name: 'John PitBull',
    age: 17,
    gender: 'male',
    location: 'LosAngeles CA',
    image: 'https://randomuser.me/api/portraits/men/79.jpg'
  },
  {
    name: 'Mary Jane',
    age: 18,
    gender: 'female',
    location: 'LosAngeles CA',
    image: 'https://randomuser.me/api/portraits/lego/9.jpg'
  }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {

  const currentProfile = profiles.next().value;
  // console.log(currentProfile);

  if (currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
  `;
  document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}" alt="${currentProfile.name}" class="w-25"></img>
  `;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done : true};
    }
  };
}


