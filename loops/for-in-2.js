/* jshint esversion: 6 */
// BradTraversy - Udemy
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
};

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        const element = user[key];
        console.log(`${key} : ${element}`);
    }
}