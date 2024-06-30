// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// const romanToInt = (s) => {
//   const romanArray = s.split("");
//   const romanToNumbers=romanArray.map((roman,index) => {
//     switch (roman) {
//       case "I":
//         return 1;
//       case "V":
//         return 5;
//       case "X":
//         return 10;
//       case "L":
//         return 50;
//       case "C":
//         return 100;
//       case "D":
//         return 500;
//       case "M":
//         return 1000;

//       default:
//         return console.error("Invalid value");
//     }
//   });

// };

// const romanToInt = (s) => {
//   let result = 0;
//   const romanArray = s.split("");
//   for (i = 0; i < romanArray.length; i++) {
//     let romanNumber = 0;
//     switch (romanArray[i]) {
//       case "M":
//         romanNumber = 1000;
//         break;
//       case "D":
//         romanNumber = 500;
//         break;
//       case "C":
//         if (romanArray[i + 1] === "D") {
//           romanNumber = 400;
//           i++;
//         } else if (romanArray[i + 1] === "M") {
//           romanNumber = 900;
//           i++;
//         } else {
//           romanNumber = 100;
//           break;
//         }
//         break;
//       case "L":
//         romanNumber = 50;
//         break;
//       case "X":
//         if (romanArray[i + 1] === "L") {
//           romanNumber = 40;
//           i++;
//         } else if (romanArray[i + 1] === "C") {
//           romanNumber = 90;
//           i++;
//         } else {
//           romanNumber = 10;
//         }
//         break;
//       case "V":
//         romanNumber = 5;
//         break;
//       case "I":
//         if (romanArray[i + 1] === "V") {
//           romanNumber = 4;
//           i++;
//         } else if (romanArray[i + 1] === "X") {
//           romanNumber = 9;
//           i++;
//         } else {
//           romanNumber = 1;
//         }
//         break;
//     }
//     result += romanNumber;
//   }
//   return result;
// };
const romanToInt = (s) => {
const romanValues = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
  };

  return s.split("").reduce((result, current, i, arr) => {
    const currentValue = romanValues[current];
    const nextValue = romanValues[arr[i + 1]];

    // If current value is less than next value, subtract current value from result
    if (currentValue < nextValue) {
      return result - currentValue;
    } else {
      // Otherwise, add current value to result
      return result + currentValue;
    }
  }, 0);
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IV"));
console.log(romanToInt("DCCXLVII"));

const numbers = [3, 9, 7, 6, 8, 10, 20, 23, 89, 97];

const filteredNumbers = numbers.filter((num) => !(num % 2));

const reducedDoubleNumbers = filteredNumbers.reduce((acc, num) => acc + num*5, 0);

console.log(reducedDoubleNumbers);