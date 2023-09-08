// * Exercise 1
// ! Function/Inner Scope
    // function outerFunction() {

    //     function innerFunction() {
    //     let outerVar = "I'm inside!";
    //     console.log(outerVar); // Can we access outerVar?
    //     console.log(innerVar); // Can we access innerVar?
    // }

    // innerFunction();
// }
// ! Outer Scope
// outerFunction();

// * ===========

// * Exercise 2
    // math();

    // function math() {
    //     num = 2+2;
    //     console.log(num);
    // }
// * ===========

// * Exercise 3 
    // let numbers = () => {
    //     let numOne = 5;
    //     let numTwo = 10;
    //     let math = () => {
    //         let sum = numOne + numTwo;
    //         return sum;
    //     }
    //     return math();
    // }
    // const total = numbers();
    // console.log(total);
// * ==============

// * Exercise 4 
    // let num1 = 19;

    // function modifyGlobal() {
    //     num1 = 20;
    // }

    // function localScopeTest() {
    // let num1 = 30;
    // }
    // console.log(num1);
    // modifyGlobal();
    // console.log(num1);
    // localScopeTest();
    // console.log(num1);
// * =============

// * Exercise 5 
    // function functionFactory(favNum) {
    //     function test () {
    //         if(favNum === 19) {
    //             console.log(`Yes! ${favNum} is the best number!`);
    //         } else {
    //             console.log(`No! ${favNum} is the worst number!`);
    //         }
    //     }
    //     return test();
    // }
    // functionFactory(19);
    // functionFactory(18);
// * ==================

// * Exercise 6 
    // function hoistingTest() {
    //     console.log(favNum);

    //    let favNum = 19;
    // }

    // hoistingTest();
// * ==================

// * Exercise 7 
    function setupCounter() {
        let count = 1;

         return function counter() {
        count++;
    }
    console.log(setupCounter());
}
    setupCounter();
    setupCounter();
    setupCounter();
    setupCounter();
// * ===============

// * Exercise 8 

// * ============