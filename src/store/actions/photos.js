import photosInitial, {setPhotosToStorage} from '../../data/photos'
import {ADD_PHOTO, FETCH_PHOTOS} from "../typesList";



export const getPhotos = () =>{
    return async dispatch => {
        try {
            const obj = getObj()
            await dispatch(fetchPhotos(obj))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const addPhoto = photo => {
    return async dispatch => {
        try {
            
            const newPhoto = await addPhotosInServer(photo)
            await dispatch(addPhotosInState(newPhoto))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchPhotos = data => {
    return {
        type: FETCH_PHOTOS,
        payload: data
    }
}

const addPhotosInState = photo => {
    return {
        type: ADD_PHOTO,
        payload: photo
    }
}

//Server Side

const getObj = () => {
    return {
        list: [...photosInitial]
    }
}

const addPhotosInServer = photo => {
    const newPhoto = {
        ...photo,
        id: Date.now()
    }
    photosInitial.push(newPhoto)
    setPhotosToStorage(photosInitial)
    return newPhoto
}