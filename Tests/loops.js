// Loop

/*
for (initialization; condition; increment/decrement) {
  // Code to be executed in each iteration
}
*/

for (let i = 0; i < 5; i++) {
  console.log('for - '+i);
}


/*
while (condition) {
  // Code to be executed in each iteration
}
*/

let count = 0;
while (count < 10) {
  console.log('while - '+count);
  count++;
}


/*
do {
  // Code to be executed in each iteration
} while (condition);
*/

let x = 5;
do {
  console.log('Do while - '+x);
  x++;
} while (x < 5);


// Break Statment

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log('Break - '+i);
}

//Continue Statement

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log('Continue - '+i);
}