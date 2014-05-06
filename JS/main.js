/*
 * Author : Max-Andre Zils
 * Version: 0.21
 * Date: 29.04.2014
 * Functions: numToScreen() - displays the number pressed in the appropriate text field
 *            clearAll()    - clears the all the input fields.
 *            useSign()     - checks if the user has inputed a number into the first text field and inserts a sign into the symbol fields as well as
 *                            updating the value of sign_used.
 */
/* GLOBAL VARIABLES */
var sign_used;
/* GLOBAL VARIABLES */

//numToScreen - displays the number pressed in the appropriate text box based on whether or not a sign button has been pressed.
function numToScreen(num) {
    "use strict";
    if (sign_used === null) {
        first_num.value += num;
    } else {
        second_num.value += num;
    }
}
function clearAll() {
    "use strict";
    var clear_inputs = confirm( "Are you sure you want clear all fields?" );
    if ( clear_inputs ){
        first_num.value = null;
        second_num.value = null;
        symbol.value = null;
        result.value = null;
        sign_used = null;
    }
}

function useSign(sign){
    "use strict";
    var r;
    if( first_num.value == "" || first_num.value == null ){
        alert( "Please insert a number first!" );
    } else if ( sign_used == 0 ) {
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
    "use strict";
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
