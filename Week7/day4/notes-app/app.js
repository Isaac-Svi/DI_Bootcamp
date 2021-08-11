const fs = require('fs')
const path = require('path')

const notesPath = path.resolve('notes.json')

const logNote = ({ title, body }) => {
    console.log('--')
    console.log(`Title: ${title}`)
    console.log(`Body: ${body}`)
}

const getNotesData = () => {
    return JSON.parse(fs.readFileSync(notesPath).toString())
}

const format = (input) => JSON.stringify(input, null, 2)

const addNote = (title, body) => {
    try {
        const notes = getNotesData()

        const note = notes.find((x) => x.title.toLowerCase() === title.toLowerCase())
        if (note) throw new Error('Note already exists')

        notes.push({ title, body })

        fs.writeFileSync(notesPath, format(notes))

        logNote({ title, body })
    } catch (err) {
        console.log(err.message)
    }
}

const listNotes = () => {
    try {
        const notes = getNotesData()

        console.log(`Printing ${notes.length} note(s).`)

        for (const note of notes) {
            logNote(note)
        }
    } catch (err) {
        console.log(err.message)
    }
}

const readNote = (title) => {
    try {
        const notes = getNotesData()
        const note = notes.find((x) => x.title.toLowerCase() === title.toLowerCase())

        if (!note) throw new Error('Note not found')

        logNote(note)
    } catch (err) {
        console.log(err.message)
    }
}

const removeNote = (title) => {
    try {
        const notes = getNotesData()
        const index = notes.findIndex(
            (x) => x.title.toLowerCase() === title.toLowerCase()
        )

        if (index === -1) throw new Error('Note not found')

        notes.splice(index, 1)

        fs.writeFileSync(notesPath, format(notes))

        console.log('Note removed')
    } catch (err) {
        console.log('remove command failed')
    }
}

const processCommands = () => {
    let [command, ...flags] = process.argv.slice(2)
    flags = Object.fromEntries(flags.map((x) => x.replace('--', '').split('=')))

    switch (command) {
        case 'add':
            addNote(flags.title, flags.body)
            break
        case 'list':
            listNotes()
            break
        case 'read':
            readNote(flags.title)
            break
        case 'remove':
            removeNote(flags.title)
            break
        default:
            console.log('command not recognized')
    }

    process.exit()
}

processCommands()
