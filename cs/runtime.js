const perf = require('execution-time')();

// This is pushing the numbers into the empty array,
// This could be indefinite because we could add 
// as much numbers in the parameters as we want 
function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

// This is also adding numbers into the array,
// however. Instead of pushing it to the end of the array
// This is pushing any new numbers that we put in the parameters
// to the FRONT of the array, not at the end 

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results


// TINYARRAY SUMMARY
// This was faster compared to the extralargearray and mediumarray
// since it has a smaller array and objects to deal with, 
// it will process the information faster then its 2 counter parts 
// the start was at 34 ms, however. It came back fast in 90 ms


// perf.start(); // 34.8 ms
// doublerAppend(tinyArray); 
// let resultsAppend = perf.stop(); 90.ms

// perf.start();
// doublerInsert(tinyArray);
// let resultsInsert = perf.stop();

// MEDIUMARRAY SUMMARY 

// Although not as fast as tinyarray, since it has more objects in the array
// It is still faster then the extralargearray and still was able to process
// the information fairly quickly, but not as fast as tinyarray
// the start was at 167 ms, however. It came back fast in 125 ms

// perf.start(); // 167.9
// doublerAppend(mediumArray);
// let resultsAppend = perf.stop(); // 125

// perf.start();
// doublerInsert(mediumArray);
// let resultsInsert = perf.stop();


// Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();



// console.log('Results for the extraLargeArray');
console.log('Results for mediumArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
