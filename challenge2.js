'use strict';

// For the numbers 1 to 1000
// Please print ‘HEY’ if the number is divisible by 3 
// Print ‘WASSUP’ if the number is divisible by 5 
// Print ‘HEYWASSUP’ if the number is divisible by both 5 and 3 
// If the number is not divisible by 5 or 3, then print the number.  

//The first 15 lines would be:

// 1
// 2
// HEY
// 4
// WASSUP
// HEY
// 7
// 8
// HEY
// WASSUP
// 11
// HEY
// 13
// 14
// HEYWASSUP


// Recursive Function with if else statements 
const heyWasuup = (number) => {
    // Let's hold the final result on an array
    const result = [];
    // For loop to iterate trough each number till the end
    for (let i = 1; i <= number; i++) {
        // String Value to alternate the output
        let string = "";
        // If can be divided by 3
        if (!(i % 3)) string += "HEY";
        // If can be divided by 5
        if (!(i % 5)) string += "WASSUP";
        // If can be divided by 3 and 5 
        if ((!(i % 5) % !(i % 3))) string += "HEYWASSUP";
        // Let's push the result from each statement to the array to concatenate the final result
        if (!string.length) result.push(i);
        // This else works for pushing the results if the iterator numbers has end
        else result.push(string);
    };
    // Login and returning the result
    console.log(result)
    return result;
};

heyWasuup(1000)