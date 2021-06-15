import {ADD_ALBUM, CHANGE_ADD_ALBUM, FETCH_ALBUM, SET_ALBUM_BY_ID} from "../typesList";


let idx
let _arr

export const AlbumsReducer = (state={}, action) => {
    switch (action.type) {
        case FETCH_ALBUM:
            return {...state, ...action.payload}

        case ADD_ALBUM:
            return {
                ...state, list: [...state.list, action.payload]
            }
            
        case CHANGE_ADD_ALBUM:
            return {...state, addAlbumMode: !state.addAlbumMode}

        case SET_ALBUM_BY_ID:
             idx = state.list.findIndex(a=>a.id === action.payload)
                if (idx===-1) return {...state,  albumById: {}}
                return {...state,  albumById: state.list[idx]}
                
        default:
            return state
    }
}