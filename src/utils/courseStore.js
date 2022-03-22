import create from "zustand";

const courseStore = create((set) => ({
  courses: [],
  addCourse: (data) => set((state) => ({ courses: [...state.courses, data] })),
}));

export default courseStore;
