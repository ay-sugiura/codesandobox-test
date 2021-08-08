// // /**
// //  * const、letの変数宣言
// //  */

// // var val1 = "var片頭痛";
// // console.log(val1);

// // // var変数の上書き
// // val1 = "var片頭痛を上書き";
// // // console.log(val1);

// // // // var変数は再宣言可能
// // // var val1 = "var片頭痛を再宣言";
// // // console.log(val1);

// // // let val2 = "let片頭痛";
// // // console.log(val2);

// // // val2 = "let片頭痛を上書き";
// // // console.log(val2);

// // // // let val2 = "let片頭痛を再宣言";
// // // // console.log(val2);

// // // const val3 = "const片頭痛";
// // // console.log(val3);

// // // val3 = "const片頭痛を上書き";

// // // constで定義したオブジェクトはプロパティ値の変更可能
// // let val4 = {
// //   name: "じゃけぇ",
// //   age: 28
// // };
// // console.log(val4);
// // val4.name = "あやね";
// // val4.address = "ひろしま";
// // console.log(val4);

// // const val5 = ["dog", "cat"];
// // console.log(val5);
// // val5[0] = "bird";
// // console.log(val5);
// // val5.push("monkey");

// /**テンプレート文字列 */
// const name = "文音";
// const age = 30;

// // 「私の名前は文音です。年齢は28です」

// console.log("私の名前は" + name + "です。年齢は" + age + "でふ。");

// //テンプレート文字列を用いる。
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**アロー関数です。 */
// function func1(str) {
//   return `${str}です`;
// }
// console.log(func1("ゆうーたん"));

// const func2 = function (str) {
//   return `${str}です`;
// };
// console.log(func2("ゆうーーたん"));

// const func3 = (str) => `${str}です`;

// console.log(func3("ゆうーーーたん"));

// const func5 = (num1, num2) =>
//   `ゆうたんさんとあやたんさんの年齢の和は${num1 + num2}です。`;

// console.log(func5(30, 33));

/**分割代入 */
// const myProfile = {
//   name: "文音",
//   age: 30,
//   otto: "ゆうたん"
// };

// const message10 = `名前は${myProfile.name}、年齢は${myProfile.age}です。夫は${myProfile.otto}です。`;
// //console.log(message10);

// const { name, age, otto } = myProfile;
// const message12 = `名前は${name}、年齢は${age}です。夫は${otto}です。`;
// console.log(message12);

// const myProfile = ["文音", 30];

// const message13 = `名前は${myProfile[0]}、年齢は${myProfile[1]}`;
// console.log(message13);

// const [name1] = myProfile;
// const message14 = `名前は${name1}`;
// console.log(message14);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("文音");

/**
 * スプレット構文
 */

//  //配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

///配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterをつかった配列の処理
 */

// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name + "さん";
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index}番目は${name}さんま`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr + "だ～～");

/**三項演算子 */
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "a1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "NG" : "OK";
};
console.log(checkSum(50, 50));
