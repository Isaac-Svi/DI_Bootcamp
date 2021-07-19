//FIRST EXERCISE
let username = 'John'
function checkName(user) {
    console.log('username = user', username === user) // true
    user += 'Smith'
    console.log('username = user', username === user) // false
    console.log('username = ', user, username) // JohnSmith, John
}
console.log('before username = ', username) // before username = John
checkName(username)
console.log('after username = ', username) // after username = John
