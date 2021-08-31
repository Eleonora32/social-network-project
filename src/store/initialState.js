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
        like: 0,
        dislike:0

    }
}

export default InitialState