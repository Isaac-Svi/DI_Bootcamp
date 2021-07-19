let name = 'John'
function checkName() {
    console.log('in the checkName func : ', name)
    let nameUppercase = name.toUpperCase()
    function addExclamation() {
        let test = 'hello'
        nameUppercase += '!'
        console.log('in the addExclamation func NAME_TO_UPPERCASE: ', nameUppercase)
    }
    addExclamation()
    addExclamation()
    addExclamation()
}
checkName()

/*
CALL STACK:

1:
checkName()

2:
console.log("in the checkName func : ", name)
checkName()

3:
toUpperCase()
checkName()

4:
addExclamation() // 1st one
checkName()

5:
console.log('in the addExclamation func NAME_TO_UPPERCASE: ', nameUppercase)
addExclamation()
checkName()

6:
addExclamation() // 2nd one
checkName()

7:
console.log('in the addExclamation func NAME_TO_UPPERCASE: ', nameUppercase)
addExclamation()
checkName()

8:
addExclamation() // 3rd one
checkName()

9:
console.log('in the addExclamation func NAME_TO_UPPERCASE: ', nameUppercase)
addExclamation()
checkName()

10:
addExclamation()
checkName()

11:
checkName()

12:
call stack empty
*/
