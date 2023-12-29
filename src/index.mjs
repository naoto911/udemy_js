// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は際宣言可能
// var val1 = "var変数を際宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きは可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは際宣言不可能
// let val2 = "let変数を際宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const変数は上書き不可
// sonst val3 = "const変数を際宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "naoto",
//   age: 26,
// };
// console.log(val4);

// val4.name = "NAOTO";
// val4.age = 27;
// val4.address = "Tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5);

// val5[0] = "bird";
// console.log(val5);

// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "Naoto";
// const age = 26;

// 「私の名前は{name}です。年齢は{age}歳です。」
// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// アロー関数

// 従来の関数定義
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数を用いる場合
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// 引数が1つの場合は()を省略してもOK
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// 関数の中身が単一の返却だけの場合省略記法が使える
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 2));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1, 2));

// // 関数の結果として何かしらのオブジェクトを返却するが、オブジェクトは複数行にわたる記述の場合にreturn記述を省略できる
// const func3 = (num1, num2) => ({
//   hoge: num1,
//   fuge: num2,
// });
// console.log(func3(1, 2));

// 分割代入
// const myProfile = {
//   name: "naoto",
//   age: 26,
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["naoto", 26];
// const message1 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message1);

// const [name, age] = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// デフォルト値
// const sayHello = (name) => console.log(`こんにちは!${name}さん`);
// sayHello("naoto");
// sayHello();

// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello();

// const myProfile = {
//   age: 31,
// };

// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

// オブジェクトの省略記法
// const name = "naoto";
// const age = 26;

// const myProfile = { name, age };
// console.log(myProfile);

// スプレット構文

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const arr1 = [1, 2];
// const sumFunction = (num1, num2) => console.log(num1 + num2);
// // sumFunction(arr1[0], arr1[1]);
// sumFunction(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// 配列のコピー
// const arr6 = [...arr4];
// console.log(arr4);
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// 配列の結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;

// arr8[0] = 100;
// console.log(arr8);

// console.log(arr4);
