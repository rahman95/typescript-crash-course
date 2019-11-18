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
let anotherStrArray: Array<string>; // alternative syntax

strArray = ["hello", "world"];
anotherStrArray = ["world", "hello"];

let numArray: number[];
let anotherNumArray: Array<number>; // alternative syntax

numArray = [1, 2, 3];
anotherNumArray = [4, 5, 6];

// tuples
let strNumBoolTuple: [string, number, boolean]; // must be an array with string, number and boolean values respectively

strNumBoolTuple = [userName, userAge, isStudent];

// void, null, undefined
let voidVar: void; // can be null or undefined
let nullVar: null;
let undefinedVar: undefined;

voidVar = null;
voidVar = undefined;

nullVar = null;
undefinedVar = undefined;
