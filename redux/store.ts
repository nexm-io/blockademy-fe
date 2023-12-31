import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import exampleReducer from "./features/example/reducer";
import authReducer from "./features/auth/reducer";
import { articleReducer } from "./features/articles/reducer";
import { userReducer } from "./features/user/reducer";
import { authorReducer } from "./features/authors/reducer";
import accountReducer from "./features/account/reducer";
import newCoursesReducer from "./features/new-courses/reducer";
import blogsReducer from "./features/blogs/reducer";
import quizReducer from "./features/quiz/reducer";
import categoryReducer from "./features/category/reducer";
import { courseReducer } from "./features/courses/reducer";
import rewardReducer from "./features/reward/reducer";
import myCourseReducer from "./features/my-course/reducer";
const persistConfig = {
  key: "blockademy-website",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
  newCourses: newCoursesReducer,
  courses: courseReducer,
  articles: articleReducer,
  user: userReducer,
  blogs: blogsReducer,
  author: authorReducer,
  account: accountReducer,
  quiz: quizReducer,
  category: categoryReducer,
  reward: rewardReducer,
  myCourse: myCourseReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export let store = createStore();

export const persistor = persistStore(store);

export const refreshStore = () => {
  store = createStore();
};
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
