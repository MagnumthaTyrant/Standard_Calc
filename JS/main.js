/*
 * Author : Max-Andre Zil
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
var sign_used = 0;
/* GLOBAL VARIABLES */

//numToScreen - displays the number pressed in the appropriate text box based on whether or not a sign button has been pressed.
function numToScreen( num ){
    if( sign_used == 0 ){
        first_num.value += num;
    }else{
        second_num.value += num;
    }
}


//clearAll - asks the user if he/she is sure and clears all input fields.
function clearAll(){
    var clear = confirm( "Are you sure you want to clear all fields?" );
    if( clear == true ){
        first_num.value = null;
        second_num.value = null;
        symbol.value = null;
        result_num.value = null;
        sign_used = 0;

    }
}

function signToScreen( sign ){
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
        }
    }
}

function add( x, y ){
    return parseFloat(x) + parseFloat(y);
}

function subtract( x, y ){
    return parseFloat(x) - parseFloat(y);
}

function divide( x, y ){
    return parseFloat(x) / parseFloat(y);
}

function multiply( x, y ){
    return parseFloat(x) * parseFloat(y);
}

function factorial( x ){
    var total = 1;
    for( i = 1; i <= parseFloat(x); i++ ){
        total *= i;
    }
    return total;
}

function power( x, y ){
    return Math.pow( parseFloat(x), parseFloat(y) );
}
function doMath(){
    if(first_num.value == "" || second_num.value == "" || symbol.value == ""){
        alert( "Please insert valid input into the appropriate fields" );
    }else{
        switch( sign_used ){
            case '+':
                result_num.value = add( first_num.value, second_num.value);
            break;
        }
    }
}
