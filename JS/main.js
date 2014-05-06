/*
 * Author : Max-Andre Zils
 * Version: 0.21
 * Date: 29.04.2014
 * Functions: numToScreen() - displays the number pressed in the appropriate text field
 *            signPressed() - displays the sign pressed in the appropriate text box and changes the value
 *                            of sign_used.
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
function clearAll(){
    var clear_inputs = confirm( "Are you sure you want clear all fields?" );
    if( clear_inputs ){
        first_num.value = null;
        second_num.value = null;

    }
}
