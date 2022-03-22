import create from "zustand";
import { redux } from "zustand/middleware";

const initialState = { courses: [] };

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
}
const courseStore = create(redux(reducer, initialState));

export default courseStore;
