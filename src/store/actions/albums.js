import albumsInitial, {setAlbumsToStorage} from '../../data/albums'
import {ADD_ALBUM, FETCH_ALBUM, SET_ALBUM_BY_ID} from "../typesList";



export const getAlbums = () =>{
    return async dispatch => {
        try {
            const obj = getObj()
            await dispatch(fetchAlbums(obj))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const addAlbum = album => {
    return async dispatch => {
        try {
            const newAlbum = await addAlbumInServer(album)
            await dispatch(addAlbumInState(newAlbum))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchAlbums = data => {
    return {
        type: FETCH_ALBUM,
        payload: data
    }
}

const addAlbumInState = album => {
    return {
        type: ADD_ALBUM,
        payload: album
    }
}

export const setAlbumById = albumId => {
    return dispatch => {
        try {
            dispatch( setAlbumByIdInState(albumId) )
        } catch (e) {
            console.log(e.message)
        }
    }
}

const setAlbumByIdInState = albumId => {
    return {
        type: SET_ALBUM_BY_ID,
        payload: albumId
    }
}

//Server Side

const getObj = () => {
    return {
        list: [...albumsInitial]
    }
}

const addAlbumInServer = album => {
    const newAlbum = {
        ...album,
        id: Date.now()
    }
    albumsInitial.push(newAlbum)
    setAlbumsToStorage(albumsInitial)
    return newAlbum
}