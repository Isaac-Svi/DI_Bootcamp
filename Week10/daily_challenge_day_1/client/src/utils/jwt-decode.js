export const jwtDecode = (t) => {
    if (!t) return null

    let token = {}
    token.raw = t
    token.header = JSON.parse(window.atob(t.split('.')[0]))
    token.body = JSON.parse(window.atob(t.split('.')[1]))
    return token
}
