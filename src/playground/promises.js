const promise = new Promise((resolve, reject) => {
	setTimeout(()=> {
		// resolve({
		// 	name: 'Andrew',
		// 	age: 26
		// });

	reject ('Something went wrong');
	}, 3300);
});

console.log('before');

promise.then((data) => {
	console.log('1', data);
	return 'some data';
}).then((str)=> {
	console.log('does this run?');
}).catch((error) => {
	console.log('error: ', error)
});


console.log('after');