import C from './constants'

export const addDay = (resort, date, powder = false, backcountry = false) => {
    return {
        type: C.ADD_DAY,
        payload: { resort, date, powder, backcountry }
    }
}

export const removeDay = date => ({
    type: C.REMOVE_DAY,
    payload: date
})

export const setGoal = goal => ({
    type: C.SET_GOAL,
    payload: goal
})

export const addError = error => ({
    type: C.ADD_ERROR,
    payload: error
})

export const clearError = error => ({
    type: C.CLEAR_ERROR,
    payload: 0
})

export const changeSuggestions = suggestions => ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions
})

export const clearSuggestions = () => ({
    type: C.CLEAR_SUGGESTIONS
})