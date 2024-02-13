//! Operators
/*
    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional
*/

/* 
    Expression & Statement

        keyword name (expression) {
            code block
        }
*/

//! Comparison Operators
/* 
    - Equal To:
*        ==
    - Strict Equal To:
*        ===
    - Not Equal:
*        !=
    - Strict Not Equal:
*        !==
*/

'3' == 3;
// console.log('3' == 3); // true
// console.log('3' === 3); // false
// console.log(3 === 3); // true

// console.log('3' != 3); // false
// console.log('3' !== 4); // true


//* Greater Than, Less Than, or Equal To
// console.log(3 > 2);
// console.log(2 < 3);
// console.log(4 >= 2);
// console.log(2 >= 2);

//* And
// 2 && 3

//* Or
// 2 || 3

//! Logical Operators
//* Addition
let r = 0
// r = r + 1
r += 3;
console.log(r);

//* Subtraction
r -= 1;
console.log(r);

//* Multiplication
r *= 2;
console.log(r);

//* Division
r /= 2;
console.log(r);

//* Remainder (Modulus)
r %= 1.5;
console.log(r);

//* Exponential
r **= 2;
console.log(r);
