const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]
const getData = async function () {
    const [users, posts, albums] = await Promise.all(
        urls.map((url) => fetch(url).then((resp) => resp.json()))
    )
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
}

const getData2 = async () => {
    const [users, posts, albums] = await Promise.all(
        urls.map(async (x) => (await fetch(x)).json())
    )

    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
}

getData()
getData2()

// The reason why this works is that when you do 'await', you're basically getting the argument sent in the callback in .then.  "fetch" returns a promise, but "await fetch" returns a response object!  And parsing the response object into json is a completely synchronous task.  Therefore, only 1 await needed here.
