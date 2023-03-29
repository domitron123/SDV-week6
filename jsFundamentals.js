// for(;;) console.log("Hello")

// Find the sum of minimums numbers
// ([1,2,3,4,5], [6,7,8,9], [20,21,24,35,70])
// 1,6,20 = 27

// for(let i = 0; i < 3; i++) {
//     for(let j = 0; j < 3; j++) {
//       console.log(i, j);
//     }
// }

// for(let i = 0; i < 3; i++) {
//     if(i == 1) continue
//     console.log(i)
// }

// let counter = 0
// function inc() {counter ++} for(let i = 0; i < 10 ; inc());
// console.log(counter);

function sumMin(myArr) {
  var sum = 0
  for(let i = 0; i < myArr.length; i++) {
    var y = myArr[i][0]
    for(let j = 0; j < myArr[i].length; j++) {
      if(y > myArr[i][j]) {
        y = myArr[i][j]
      }
    }
    sum = sum + y
  }
  return sum
}

// console.log(sumMin([[1,2,3,4,5], [6,7,8,9], [20,21,24,35,70]]))

// for(let i = 0; ; i++) {
//   console.log(i); 
//   break;
// }

// let x = 0
// label: for (let i = 0; i < 5; i++) {
//   console.log("label = ", i)
//   inner: for(let j = 0; j < 5; j++){
//     console.log("inner = ", j)
//       x++; 
//       console.log("inc x = ", x)
//       if(i == 2) break label;
//   }
// }
    
// console.log("total sum = ", x)

// Write a loop that sums the numbers from 0-9 and print the result

// myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var sum = 0;
// for(let i = 0; i < myArr.length; i++) {
//     sum = sum + i;
// }

// console.log(sum)

let func = function() {}
  console.log(typeof func)
