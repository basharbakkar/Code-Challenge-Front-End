import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer"
import AlbumReducer from "./reducers/albumReducer";
import commentReducer from "./reducers/commentReducer";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/usersReducer"

export default configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    login: loginReducer,
    album: AlbumReducer,
    comments: commentReducer,
  },
});
