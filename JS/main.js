/*
 * Author : Max-Andre Zils
 * Version: 0.21
 * Date: 29.04.2014
 * Functions: numToScreen() - displays the number pressed in the appropriate text field
 *            clearAll()    - clears all text fields on the page
 *            add()         - add two numbers together and return the sum.
 *            subtract()    - subtract two numbers and return the result.
 *            divide()      - divide two numbers and return the result.
 *            multiply()    - multiply two numbers and return the result.
 *            factorial()   - return the factorial of a number.
 *            power()       - return a numbe rto the power of another number.
 *            doMath()      - return the appropriate answer based on the input provided by the user
 *  */
/* GLOBAL VARIABLES */
var sign_used;
/* GLOBAL VARIABLES */

//numToScreen - displays the number pressed in the appropriate text box based on whether or not a sign button has been pressed.
function numToScreen(num) {
    "use strict";
    if (sign_used == null) {
        first_num.value += num;
    } else {
        second_num.value += num;
    }
}



//clearAll - asks the user if he/she is sure and clears all input fields.
function clearAll() {
    "use strict";
    var clear_inputs = confirm( "Are you sure you want clear all fields?" );
    if ( clear_inputs ){
        first_num.value = null;
        second_num.value = null;
        symbol.value = null;
        result_num.value = null;
        sign_used = 0;

    }
}

function signToScreen( sign ){
    "use strict";
    var r;
    if( first_num.value == "" || first_num.value == null ){
        alert( "Please input a number first!" );
    }else if( symbol.value == 0 ){
        symbol.value = sign;
        sign_used = sign;
    }else if( sign_used != 0 ){
        r = confirm("Are you sure you want to change the sign?");
        if( r ){
            sign_used = sign;
            symbol.value = sign;
        sign_used = null;
    }
}

function useSign(sign){
    "use strict";
    var r;
    if( first_num.value == "" || first_num.value == null ){
        alert( "Please insert a number first!" );
    } else if ( sign_used == 0 || sign_used == null ) {
        symbol.value = sign;
        sign_used = sign;
    } else {
        r = confirm("Are you sure you want to change the sign?");
        if( r ){
            symbol.value = sign;
            sign_used = sign;
        }
    }
}

function add(x, y){
    "use strict";
    return parseFloat(x) + parseFloat(y);
}

function subtract( x, y ){
    return parseFloat(x) - parseFloat(y);
}




function divide(x, y){
    "use strict";
    return parseFloat(x)/ parseFloat(y);
}

function multiply(x, y){
    "use strict";
    return parseFloat(x) * parseFloat(y);
}

function pow(x, y){
    "use strict";
    return Math.pow(parseFloat(x), parseFloat(y));
}

function factorial(x){
    "use strict";
    var result = 1;
    for( i = 1; i <= parseInt(x); i++ ){
        result *= i;
    }
    result_num.value =  result;
}

function checkFields(){
    "use strict";
    if( first_num.value == "" || first_num.value == null ){
        alert("Please inser a number into the first text field!");
        return false;
    }
    if( symbol.value == "" || symbol.value == null ){
        alert("Please select a symbol!");
        return false;
    }
    if( second_num.value == "" || second_num.value == null ){
        alert("Please insert a number into the second text field");
        return false;
    }
    return true;
}
function doMath(){
    "use strict";
    if( checkFields() ){
        switch( sign_used ){
            case '+':
                result_num.value = add(first_num.value, second_num.value);
            break;
            case '-':
                result_num.value = subtract(first_num.value, second_num.value);
            break;
            case '*':
                result_num.value = multiply(first_num.value, second_num.value);
            break;
            case '/':
                result_num.value = divide(first_num.value, second_num.value);
            break;
            case '^':
                result_num.value = pow(first_num.value, second_num.value);
            break;
        }
        first_num.value = null;
        second_num.value = null;
        symbol.value = null;
        sign_used = null;
    }
}

