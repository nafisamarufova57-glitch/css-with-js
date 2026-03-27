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


// UYGA VAZIFA
// let names = ["Vali", "Hasan", "Husan"];
// names.push("Sardor");
// names.shift();
// console.log(names.includes("Ali"));
// console.log(names);

// let users = ["Ali", "Vali"];
// users.unshift("Sardor", "Jasur", "Dilshod");
// users.pop();
// console.log(users.join(", "));

// let products = ["Apple", "Banana", "Orange", "Apple", "Kiwi"];
// let firstIndex = products.indexOf("Apple");
// let lastIndex = products.lastIndexOf("Apple");
// console.log(firstIndex, lastIndex);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let middle = arr.slice(3, 7);
// console.log(middle);

// let str = "toshkent-samarqand-buxoro";
// let cities = str.split("-");
// console.log(cities.at(1));

// let shop1 = ["Non", "Sut"];
// let shop2 = ["Go'sht", "Sabzi"];
// let all = shop1.concat(shop2);
// console.log(all.includes("Non"));
// console.log(all.indexOf("Non"));

// let cart = ["Telefon", "Mouse", "Quloqchin", "Printer"];
// cart.splice(3, 1, "Monitor", "Klaviatura");
// console.log(cart);

// let word = "Javascript";
// let reversed = word.split("").reverse().join("");
// console.log(reversed);

// let ids = [1, 2, 3, 4];
// let newId = 3;
// if (ids.includes(newId)) {
//   console.log("Bu ID allaqachon mavjud");
// } else {
//   ids.push(newId);
// }
// console.log(ids);

// let months = ["Yanvar", "Fevral", "Mart", "Aprel"];
// months.splice(2, 0, "Bahor");
// let newArr = months.slice(0, 2);
// let result = newArr.concat(months);
// console.log(result.join(", "));
