import {combineReducers} from "redux"
import {PersonsReducer} from "./PersonReducer"
import {PostsReducer} from "./PostsReducer";
import {AlbumsReducer} from "./AlbumsReducer";
import {PhotoReducer} from "./PhotoReducer"



const RootReducer = combineReducers({
    persons: PersonsReducer,
    posts: PostsReducer,
    albums: AlbumsReducer,
    photos: PhotoReducer 
})

export default RootReducer