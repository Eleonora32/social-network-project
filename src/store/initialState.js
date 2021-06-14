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
    }
}

export default InitialState