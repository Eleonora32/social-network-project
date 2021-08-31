import React, {useState, useEffect} from 'react'

import {connect} from "react-redux"

import albumsInitial, {setAlbumsToStorage} from '../data/albums'
import photosInitial, {setPhotosToStorage} from '../data/photos'
import postsInitial, {setPostsToStorage} from "../data/posts"


import Navigation from "./Navigation";
import Pages from "../layouts/Pages";
import {getPosts} from "../store/actions/posts";
import {getAlbums} from "../store/actions/albums";
import {getPhotos} from "../store/actions/photos"

export const GlobalContext = React.createContext(null)

const App = ({initPosts, initAlbums, initPhotos}) => {

    useEffect(()=>{
        initPosts()
        initAlbums()
        initPhotos()
    }, [])

   



    // const [posts, setPosts] = useState(postsInitial);
    //
    // const addNewPost = (formData) => {
    //     const newPosts = [...posts, {...formData, id: Date.now(), datetime: Date.now()}]
    //     setPosts(newPosts)
    //     setPostsToStorage(newPosts)
    // };


    return (
        <GlobalContext.Provider value={{
            // albums,
            // addNewAlbum,
            // getAlbumById,
           
            // posts,
            // addNewPost
        }}>
            <Navigation/>
            <Pages/>
        </GlobalContext.Provider>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        initPosts: () => dispatch(getPosts()),
        initAlbums: () => dispatch(getAlbums()),
        initPhotos: () => dispatch(getPhotos())
    }
}

export default connect(null, mapDispatchToProps)(App)