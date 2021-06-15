const InitialState = {
    persons: {
        list: [],
        activePerson: null,
        editMode: false,
        personById: {}
    },
    posts: {
        list: [],
        addPostMode: false
    },
    albums: {
        list: [],
        addAlbumMode: false,
        albumById: {}
    },
    photos: {
        list: [],
        addPhotoMode: false
    }
}

export default InitialState