// string, number and bool type
let userName: string;
let userAge: number;
let isStudent: boolean;

userName = "rahman95";
userAge = 24;
isStudent = false;

// any type
let anyVar: any;

anyVar = "string";
anyVar = 12;
anyVar = true;

// arrays
let strArray: string[];
let anotherStrArray: Array<string>;

strArray = ["hello", "world"];
anotherStrArray = ["world", "hello"];

let numArray: number[];
let anotherNumArray: Array<number>;

numArray = [1, 2, 3];
anotherNumArray = [4, 5, 6];

// tuples
let strNumBoolTuple: [string, number, boolean];

strNumBoolTuple = [userName, userAge, isStudent];
