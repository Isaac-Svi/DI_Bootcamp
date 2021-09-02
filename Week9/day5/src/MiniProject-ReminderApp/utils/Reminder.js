export default class Reminder {
    constructor(text, date) {
        this.text = text
        this.date = date || 'Invalid date'
    }
}
