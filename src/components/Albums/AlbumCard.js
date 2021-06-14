import React, { useEffect} from 'react'
import {useHistory} from 'react-router-dom'
// import {GlobalContext} from "../App"
import {connect} from "react-redux";
import {setPersonById} from "../../store/actions/persons";

// import Albums from './Albums';

const AlbumCard = ({album, getPersonById, persons}) => {
    
  
    useEffect(() => {
        getPersonById(album.personId)
    }, []);
   

    let history = useHistory()

    const clickHandler = event => {
        event.preventDefault()
        history.push(`/albums/${album.id}`)
    }

    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card cur-pointer" onClick={clickHandler}>
                {/* <img src={photo.src} alt={album.title}/> */}
                <div className="card-body">
                    <h3 className="card-title">{album.title}</h3>
                    <p className="card-text">{persons.lName} {persons.fName}[0].</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    persons: state.persons.personById
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPersonById: (id) => dispatch(setPersonById(id)),
        // addLocalPost: post => dispatch(addPost(post))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCard)
// export default AlbumCard