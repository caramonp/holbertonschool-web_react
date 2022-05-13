import $ from "jquery";
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;

function updateCounter() { count++; }

$('button').on(_.debounce(() => {
  updateCounter();
  $('#count').text(`${count} clicks on the button`);
}));
