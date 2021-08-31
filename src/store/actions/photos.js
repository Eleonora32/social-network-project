import photosInitial, {setPhotosToStorage} from '../../data/photos'
import {ADD_PHOTO, FETCH_PHOTOS, EDIT_PHOTO} from "../typesList";



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


// const photoAction = (id, action) => {
//     const newPhotos = [...photos]
//     let idx = newPhotos.findIndex( p=>p.id === id)
//     if (idx ===-1) return null
//     newPhotos[idx][action]++
//     setPhotos(newPhotos)
//     setPhotosToStorage(newPhotos)
// }

export const editPhoto = (id) => {
    return (dispatch, getState) => {
      try {
        const photo = getState().photos.list.find((photo) => photo.id === id);
        editPhotoOnServer(photo);
      } catch (err) {
        console.log(err.message);
      }
    };
  };
  
  const editPhotoOnServer = (photo) => {
    const idx = photosInitial.findIndex((p) => p.id === photo.id);
    if (idx === -1) return null;
    photosInitial.splice(idx, 1, photo);
    setPhotosToStorage(photosInitial);
  };

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