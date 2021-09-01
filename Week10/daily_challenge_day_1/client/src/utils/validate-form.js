export const validateForm = (...fields) => {
    for (const field of fields) {
        if (!field) return false
    }

    return true
}
