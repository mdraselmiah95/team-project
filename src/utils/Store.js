import create from "zustand";
import { redux } from "zustand/middleware";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const initialState = { courses: [], user: userInfo, userDetails: {} };

function reducer(state, action) {
  if (action.type === "add/courses") {
    return { ...state, courses: [...state.courses, action.payload] };
  }
  if (action.type === "remove/courses") {
    return {
      ...state,
      courses: state.courses.filter((x) => x.id !== action.payload.id),
    };
  }
  if (action.type === "add/user") {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === "add/userDetails") {
    return {
      ...state,
      userDetails: action.payload,
    };
  }
  if (action.type === "remove/user") {
    return {
      ...state,
      user: action.payload,
    };
  }
}
const courseStore = create(redux(reducer, initialState));

export default courseStore;
