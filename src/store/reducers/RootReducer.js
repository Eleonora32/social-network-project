import {combineReducers} from "redux"
import {PersonsReducer} from "./PersonReducer"
import {PostsReducer} from "./PostsReducer";
import {AlbumsReducer} from "./AlbumsReducer";



const RootReducer = combineReducers({
    persons: PersonsReducer,
    posts: PostsReducer,
    albums: AlbumsReducer
})

export default RootReducer