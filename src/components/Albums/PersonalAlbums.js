import React, {useContext} from "react"
import {GlobalContext} from "../App"
import PhotoCard from "../Photos/PhotoCard";
import AddPhoto from "../Photos/AddPhoto";
import {connect} from "react-redux";


const PersonalAlbums = ({personId, activePerson, albums, setAddPhotoMode, photos}) => {
    // const { photos, addNewPhoto} = useContext(GlobalContext)
    const renderAlbum = () => {
        const personalList = albums.filter(a => a.personId === personId)
        return personalList.map(a => (
            <div key={a.id}>
                <h3>{a.title}</h3>
                <div className="row">
                    {renderPhotosByAlbum(a.id)}
                </div>
                <div>
                    { activePerson === personId || setAddPhotoMode ? <AddPhoto albumId={a.id} /> : null }
                </div>
            </div>
        ))
    }

    const renderPhotosByAlbum = albumId => {
        photos.filter(photo => photo.albumId === albumId)
        return photos.map(photo => (<PhotoCard key={photo.id} photo={photo} />))
    }

    return (
        renderAlbum()
    )
}
const mapStateToProps = state => {
    return {
        activePerson: state.persons.activePerson,
        albums: state.albums.list,
        photos: state.photos.list,
        setAddPhotoMode: state.photos.setAddPhotoMode
    }
}
export default connect(mapStateToProps, null)(PersonalAlbums)