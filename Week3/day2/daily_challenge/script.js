// 1
const inputs = [...document.querySelectorAll('input')]
const libButton = document.getElementById('lib-button')
const shuffleButton = document.getElementById('shuffle')

const getValues = () => {
    const values = []

    for (const { value } of inputs) {
        // 2
        if (!value) return []

        values.push(value)
    }

    return values
}

// 3, 4, 5
const storyGenerator = () => {
    let index = 0,
        stories = []

    const obj = {
        shuffle() {
            document.getElementById('story').innerText = stories[index]
            index = index === stories.length - 1 ? 0 : ++index
        },
        generateStory() {
            const values = getValues()
            if (!values.length) {
                alert('Please fill in all fields')
                return
            }

            const [noun, adjective, name, verb, place] = values

            stories = [
                `There once was a ${adjective} ${noun} that ${verb} all of ${name}'s food at ${place}.`,
                `Watching ${name} ${verb}ing all the ${adjective} ${noun}s at ${place} was quite a site.`,
                `I saw ${name}'s ${adjective} ${noun} ${verb}ing in ${place}.`,
            ]

            index = 0
            document.getElementById('story').innerText = stories[index++]
        },
    }

    return obj
}

const { generateStory, shuffle } = storyGenerator()
libButton.addEventListener('click', generateStory)
shuffleButton.addEventListener('click', shuffle)
