// #1
function q1() {
    var a = 5
    if (a > 1) {
        a = 3
    }
    alert(a)
}
// Answer 1:
// q1 alerts a which is 3

//#2
var a = 0
function q2() {
    a = 5
}
// Answer 2:
// q2 makes a = 5

function q22() {
    alert(a)
}
// Answer 3:
// q22 alerts a which is 0 at the time the function is defined.

//#3
function q3() {
    window.a = 'hello'
}
// Answer 4:
// q3 makes a equal the string "hello"

function q32() {
    alert(a)
}
// Answer 5:
// a is undefined, since it wasn't defined here.
// If we're treating this as one file, then q32 alerts 0, since that's what a was
// declared as at line 14

//#4
var a = 1
function q4() {
    var a = 'test'
    alert(a)
}
// Answer 6:
// q4 makes a new a with a value of 'test', and alerts 'test', but a is still 1.

//#5
var a = 2
if (true) {
    var a = 5
    alert(a)
}
alert(a)
// Answer 7:
// 5 is alerted from the if statement, and 5 is alerted from line 56 as well.
// This is because the if statement is in the same scope as the alert on line
// 56.  So, in line 53, a is redeclared as 5.  This is possible because of the
// 'var' keyword.
