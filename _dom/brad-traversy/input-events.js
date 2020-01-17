/* jshint esversion: 6 */

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// KeyDown
// taskInput.addEventListener('keydown', runEvent);

// KeyUp
// taskInput.addEventListener('keyup', runEvent);

// KeyPress
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input
// taskInput.addEventListener('input', runEvent);

// Change
// select.AddEventListener('change', runEvent)

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // Get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}