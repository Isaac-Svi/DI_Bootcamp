export const logAction =
    ({ getState }) =>
    (next) =>
    (action) => {
        next(action)
        console.log('caught in the middleware', JSON.stringify(getState()))
    }
