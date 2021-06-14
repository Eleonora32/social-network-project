import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import {setPersonById} from "../../store/actions/persons";
import {setAlbumById } from "../../store/actions/albums";
// import PhotoCard from "../Photos/PhotoCard";

const Album = (album, person, getPersonById, getAlbumById) => {
    // const {photos, getPersonById, getAlbumById} = useContext(GlobalContext)
    const {id} = useParams()
    // const [album, setAlbum] = useState(getAlbumById(+id))
    // const [person, setPerson] = useState(null)
    // const [albumPhotos, setAlbumPhotos] = useState(photos.filter(p => p.albumId === +id))

    useEffect(() => {
        getAlbumById(+id)
    }, []);

    useEffect(() => {
      if(!album) {
          return
      }
      getPersonById(album.personId)
    },[album])
    



    const renderAlbum = () => {
        if (!album || !person) {
            return (<div>Loading ...</div>)
        }
        return (
            <div className="container">
                <h1>{album.title}</h1>
                <h2>by {person.lName} {person.fName}</h2>
                <div className="row">
                    {/* {albumPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}/>)} */}
                </div>
            </div>
        )
    }

    return renderAlbum()
}

const mapStateToProps = state => {
    return {
    album: state.albums.albumById,
    person: state.persons.personById
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPersonById: (id) => dispatch(setPersonById(id)),
        getAlbumById: (id) => dispatch(setAlbumById(id))
       
}}

export default connect(mapStateToProps, mapDispatchToProps)(Album)