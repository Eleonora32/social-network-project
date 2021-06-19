import React, {useState} from "react"
import {connect} from "react-redux";
import {CHANGE_ADD_ALBUM} from "../../store/typesList";
import {addAlbum} from "../../store/actions/albums"


const AddAlbum = ({addLocalAlbum, activePerson,  setAlbumsMode}) => {
    const [formData, setFormData] = useState({
        personId: activePerson,
        title: ''
    })

    const changeHandle = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    // const onSubmit = event => {
    //     event.preventDefault()
    //     addLocalAlbum(formData)
    //     setAlbumsMode()
    // }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            addLocalAlbum(formData)
            setAlbumsMode()
        }}>
            <div className="form-group mb-2">
                <label>Title</label>
                <input type="text" className="form-control" name="title" onChange={changeHandle}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        activePerson: state.persons.activePerson
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAlbumsMode: () => dispatch({type:CHANGE_ADD_ALBUM}),
        addLocalAlbum: (album) => dispatch( addAlbum(album))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum)