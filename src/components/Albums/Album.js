import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

// import PhotoCard from "../Photos/PhotoCard";

const Album = () => {

    const {id} = useParams()
    // const [albumPhotos, setAlbumPhotos] = useState(photos.filter(p => p.albumId === +id))

   
    const data = useSelector((state) => {
        let idx = state.albums.list.findIndex(a => a.id === +id)
        if(idx === -1) return {album: null,
                               person: null}
        const album = state.albums.list[idx]
        idx = state.persons.list.findIndex(p => p.id === album.personId)
        if(idx === -1) return {album,
                               person: null}
        return {album, person: state.persons.list[idx]}
    })
    



    const renderAlbum = () => {
        if (!data.album || !data.person) {
            return (<div>Loading ...</div>)
        }
        return (
            <div className="container">
                <h1>{data.album.title}</h1>
                <h2>by {data.person.lName} {data.person.fName}</h2>
                <div className="row">
                    {/* {albumPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)} */}
                </div>
            </div>
        )
    }

    return renderAlbum()
}



export default Album