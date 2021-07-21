class Video {
    // 1
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    // 2
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
}

// 3
const v = new Video('Scary Movie', 'abc', '30')

// 4
const v2 = new Video('Scary Movie 2', 'abc', '60')

console.log(v)
console.log(v2)

// 5 - Bonus
// could have also used an object, but it would take more time to destructure it.
const videoData = [
    ['a', 'abc', 1],
    ['b', 'abc', 2],
    ['c', 'abc', 3],
    ['d', 'abc', 4],
    ['e', 'abc', 5],
]

// 6
for (const data of videoData) {
    console.log(new Video(...data))
}
