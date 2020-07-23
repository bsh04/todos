import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, SHOW_NOTES} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload],
        loading: false
    }),
    [FETCH_NOTES]: (state, {payload}) => ({
        ...state,
        notes: payload,
        loading: false
    }),
    [REMOVE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => note.id !== payload)}),
    [SHOW_NOTES]: (state => ({
        ...state,
        loading: false
    })),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}