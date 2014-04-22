/*
 * Author : Max-Andre Zil
 * Version: 0.21
 * Date:
 * */

var sign_used = 0;

function numToScreen( num ){
    if( sign_used === 0 ){
        first_num.value += num;
    }else{
        second_num.value += num;
    }
}
