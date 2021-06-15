import {ADD_PHOTO, CHANGE_ADD_PHOTO, FETCH_PHOTOS} from "../typesList";



export const PhotoReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return {
                ...state, list: [...state.list, action.payload]
            }
        case FETCH_PHOTOS:
            return {...state, ...action.payload}

        case CHANGE_ADD_PHOTO:
            return {...state,  addPhotoMode: !state.addPhotoMode}
            
        default:
            return state
    }
}