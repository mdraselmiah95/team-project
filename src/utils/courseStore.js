import create from "zustand";

const courseStore = create((set) => ({
  courses: [],
  addCourse: (data) => set({ courses: { ...data } }),
}));

export default courseStore;
