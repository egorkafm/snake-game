const snake = document.getElementById('snake');
const field = document.querySelector('.field');

// const fieldState = [
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 1, 1,	1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// ];
const fieldState = [
	0, 0, 0, 'a',
	4, 0, 0, 0,
	3, 2, 1, 0,
];
let dir = 'up';

function drawField() {
	field.innerHTML = '';
	for (let i = 0; i < fieldState.length; i++) {
		const el = fieldState[i];
		if (el === 0) {
			let pixel = document.createElement('div');
			pixel.className = 'pixel';
			field.appendChild(pixel);
		} else if (el === 'a') {
			let apple = document.createElement('div');
			apple.className = 'pixel apple';
			field.appendChild(apple);
		} else {
			let snake = document.createElement('div');
			snake.className = 'pixel snake';
			field.appendChild(snake);
		}
	};
}
let moveSnake = function() {
	
}

setInterval(function() {
	//moveSnake();
	drawField();
}, 500)
