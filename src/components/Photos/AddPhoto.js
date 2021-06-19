import React, {useState} from "react"
import {connect} from "react-redux";
import {CHANGE_ADD_PHOTO} from "../../store/typesList";
import {addPhoto} from "../../store/actions/photos"

const AddPhoto = ({albumId, addNewPhoto, setAddPhotoMode}) => {

    const [photo, setPhoto] = useState({
        albumId,
        title: '',
        src: ''
    })

    const changeHandle = event => {
        setPhoto({...photo, [event.target.name]: event.target.value})
    }

    const submitHandle = event => {
        event.preventDefault()

        addNewPhoto(photo)

        setPhoto({
            albumId,
            title: '',
            src: ''
        })
        // setAddPhotoMode()

    }

    return (
        <form onSubmit={submitHandle}>
            <div className="form-group mb-2">
                <label>Title</label>
                <input type="text" className="form-control" name="title" value={photo.title} onChange={changeHandle}/>
            </div>
            <div className="form-group mb-2">
                <label>SRC</label>
                <input type="text" className="form-control" name="src" value={photo.src} onChange={changeHandle}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </div>
        </form>
    )
}




// const mapStateToProps = state => {
//     return {
//         activePerson: state.persons.activePerson
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        // setAddPhotoMode: () => dispatch({type: CHANGE_ADD_PHOTO}),
        addNewPhoto: photo => dispatch(addPhoto(photo))
    }
}
export default connect(null, mapDispatchToProps)(AddPhoto)