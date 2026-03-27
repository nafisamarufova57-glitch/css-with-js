// function getStr(Fullname) {
//   if (!Fullname.length) {
//     return "Ichi bo'sh";
//   }

//   if (!typeof Fullname === "string") {
//     return "String emas";
//   }
//   let str = Fullname.split(" ");
//   let names = str[0].at(0).toUpperCase() + str[0].slice(1).toLowerCase();
//   let surnames = str[1].at(0).toUpperCase() + str[1].slice(1).toLowerCase();

//   return names + " " + surnames;
// }
// console.log(getStr("ali valiyev"));
// ===========================================

// function app(str) {
//   let sum = 0;
//   for (let i in str) {
//     sum++;
//   }
//   return sum;
// }
// console.log(app("salom"));
// ========================================

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array = [-32, -23, -45, -34, -11];

function sum(arr) {
  let summa = 0;
  for (let i of arr) {
    summa += i;
  }
  return summa;
}
// console.log(sum(arr));

function juftlar(arr) {
  let juft_sonlar = [];
  for (let i of arr) {
    if (i % 2 == 0) {
      juft_sonlar.push(i);
    }
  }
  return juft_sonlar;
}
// console.log(juftlar(arr));

function find9(arr) {
  for (let i of arr) {
    if (i == 9) {
      return i;
    }
  }
  return undefined;
}
// console.log(find9(arr));

function up2(arr) {
  let arrNew = [];
  for (let i of arr) {
    arrNew.push(i + 2);
  }
  return arrNew;
}
// console.log(up2(arr));

function is6(arr) {
  for (let i of arr) {
    if (i % 6 == 0) {
      return true;
    }
  }
  return false;
}
// console.log(is6(arr));

function manfiyMi(arr) {
  let isTrue = true;
  for (let i of arr) {
    if (i >= 0) {
      isTrue = false;
    }
  }
  if (isTrue) return true;
  else return false;
}
// console.log(manfiyMi(array));

let arr2 = [3, 1, 76, 23, 8, 2, 32, 9];
function toOrder(arr) {
  let newArr = [];
  while (arr.length) {
    let mini = arr[0];
    for (let i of arr) {
      if (i < mini) {
        mini = i;
      }
    }
    newArr.push(mini);
    arr.splice(mini);
  }
  return newArr;
}
console.log(toOrder(arr2));

// for (let j = 0; j < arr.length; j++) {
//   let mini = arr[0];
//   for (let i of arr) {
//     if (i < mini) {
//       mini = i;
//     }
//   }
//   newArr.push(mini);
//   arr.splice(mini);
// }
