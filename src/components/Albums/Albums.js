import React from 'react'
import AlbumCard from "./AlbumCard";
import {connect} from "react-redux";


const Albums = ({albums}) => {
    

    const renderAlbums = () => {
        if (!albums.length) {
            return (
                <h1>No albums</h1>
            )
        }
        console.log(albums);
        return (
            <div className="row">
                {albums.map((album) => {
                    // const albumPhotos = photos.filter(p=>p.albumId === album.id)
                    // if ( albumPhotos.length === 0 ) return null
                    return (<AlbumCard key={album.id} album={album}/>)
                })}
            </div>
        )
    }

    return (
        <div className="container">
            {renderAlbums()}
        </div>
        )
}


const mapStateToProps = state => {
    return {
    albums: state.albums.list

    }
}



export default connect(mapStateToProps, null)(Albums)