// interesting jquery import thanks to babel
import $ from 'jquery';
// import lodash
import _ from 'lodash';

// append elements
$('body').append(`<p>Holberton Dashboard</p>`);
$('body').append(`<p>Dashboard data for the students</p>`);
$('body').append(`<button>Click here to get started</button>`);
$('body').append(`<p id="count"></p>`);
$('body').append(`<p>Copyright - Holberton School</p>`);

// bind lodash's debounce to the button
$('button').on('click', _.debounce(updateCounter, 500));

let count  = 0;
// function to update the counter
function updateCounter() {
	count++;
	$('#count').text(`${count} clicks on the button`);
}