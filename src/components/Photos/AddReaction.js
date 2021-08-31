import React, { useEffect } from "react";
import { ADD_LIKE_TO_PHOTO, ADD_DISLIKE_TO_PHOTO } from "../../store/typesList";
import { connect } from "react-redux";
import { editPhoto } from "../../store/actions/photos";

const AddReaction = ({ photo, photoLike, photoDislike, addLike, addDislike, setEditedPhoto }) => {
  console.log({photoLike})
  useEffect(() => {
  }, [photo]);
  const addNewLike = (event) => {
    event.preventDefault();
    addLike(photo.id);
    setEditedPhoto(photo.id);
  };

  const addNewDislike = (event) => {
    event.preventDefault();
    addDislike(photo.id);
    setEditedPhoto(photo.id);
  };

  return (
    <div>
      <button value={photoLike} onClick={addNewLike}>
        Like {photo.like}
      </button>
      <button onClick={addNewDislike}>DisLike {photo.dislike}</button>
    </div>
  );
  
};

const mapStateToProps = state => {
  return {
      photoLike: state.photos.like,
      photoDislike: state.photos.dislike
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (id) => dispatch({ type: ADD_LIKE_TO_PHOTO, payload: id }),
    addDislike: (id) => dispatch({ type: ADD_DISLIKE_TO_PHOTO, payload: id }),
    setEditedPhoto: (id) => dispatch(editPhoto(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReaction);

