let jsonObject = `{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
}`

// Use the JSON method - first parse, and console.log the result
// then stringify and console.log
const jsonParsed = JSON.parse(jsonObject)
console.log(jsonParsed)
console.log(JSON.stringify(jsonParsed))

console.log('-------------------------------------------------')

// Deep clone - Stringify and parse
let myArr = ['blue', 'red', ['apple', 'orange'], 'white']

let myNewArrString = JSON.stringify(myArr)
console.log('myNewArrString = ', myNewArrString, typeof myNewArrString)

let myNewArrJson = JSON.parse(myNewArrString)
console.log('myNewArrJson = ', myNewArrJson, typeof myNewArrJson)

myNewArrJson[2][0] = 'blueberry'
console.log(`The third item of myArr is ${myArr[2][0]}, 
	The third item of myNewArrJson is ${myNewArrJson[2][0]}`)

//2nd possibility
myNewArrJson = JSON.parse(JSON.stringify(myArr))
myNewArrJson[2][0] = 'blueberry'
console.log(`The third item of myArr is ${myArr[2][0]}, 
	The third item of myNewArrJson is ${myNewArrJson[2][0]}`)
