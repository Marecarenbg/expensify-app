import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };




// childchanged


// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// Child removed 

// database.ref('expenses').on('child_removed', (snapshot) => {
// 		console.log(snapshot.key, snapshot.val());
// });


// child_added

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// 		.once('value')
// 		.then((snapshot)=> {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 				expenses.push({
// 						id: childSnapshot.key,
// 						...childSnapshot.val()
// 				});
// 		});

// 		console.log(expenses);
// 	});

// database.ref('expenses').on('value', (snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 				expenses.push({
// 						id: childSnapshot.key,
// 						...childSnapshot.val()
// 				});
// 		});
// 		console.log(expenses);
// })



  // database.ref('expenses').push({
  // 	description: 'rent',
  // 	note: '',
  // 	amount: 109500,
  // 	createdAt: 1321312
  // });


  // database.ref('notes/-L6cg_EAACAd859HwcSs').remove();


  // database.ref('notes').push({
  // 	title: 'course topics',
  // 	body: 'react native angular python'
  // });



// SETUP DATA subscription


// database.ref().on('value',(snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })



//  const onValueChange = database.ref().on('value', (snapshot) => {
//   	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });


// setTimeout(() => {
// 	database.ref('age').set(20);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(25);
// }, 10500);


// fETCH DATA

// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
// 	const val = snapshot.val();
// 	console.log(val);
// })
// .catch ((e) => {
// 	console.log('Error fetching data', e)
// });





//   database.ref().set({
//   	name: 'Mare Care',
//   	age: 26,
//   	stressLevel: 6,
//   	job: {
//   		title: 'Software developer',
//   		company: 'Google'
//   	},
//   	location: {
//   		city: 'Belgrade',
//   		counry: 'Serbia'
//   	}
//   }).then(() => {
//   	console.log('Data is saved!');
//   }).catch((e) => {
//   	console.log('This failed.', e);
//   });

// // Change the stressLEvel to a 9
// // Change job.company to Amazon
// // Change city
// database.ref().update({
// 	stressLevel: "9",
// 	"job/company": 'Amazon',
// 	"location/city": 'Seatle'

// });

// // database.ref()
// 	.remove()
// 	.then(()=> {
// 		console.log('Daa was removed')
// }).catch((e)=> {
// 	console.log('Did not remove data', e)
// });