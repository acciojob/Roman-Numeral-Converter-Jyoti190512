function convertToRoman(num) {
  	const obj = {
    0: ['M', 1000],
    1: ['CM', 900],
    2: ['D', 500],
    3: ['CD', 400],
    4: ['C', 100],
    5: ['XC', 90],
    6: ['L', 50],
    7: ['XL', 40],
    8: ['X', 10],
    9: ['IX', 9],
    10: ['V', 5],
    11: ['IV', 4],
    12: ['I', 1]
};

  //your code here
	

    let result = '';

    for (let value in obj) {
        while (num >= obj[value][1]) { // use obj[value][1] to get the number
            result += obj[value][0]; // use obj[value][0] to get the Roman numeral
            num -= obj[value][1]; // subtract the number from num
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
