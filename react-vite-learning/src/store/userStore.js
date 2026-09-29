import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [],
  editIndex: null,

  darkMode:false,


  toggleTheme: () =>
set((state) =>({
   darkMode: !state.darkMode, 
})),






  saveUser: (formData) =>
    set((state) => {
      if (state.editIndex !== null) {
        const updatedUsers = [...state.users];
        updatedUsers[state.editIndex] = formData;

        return {
          users: updatedUsers,
          editIndex: null,
        };
      }

      return {
        users: [...state.users, formData],
      };
    }),

  deleteUser: (index) =>
    set((state) => ({
      users: state.users.filter((_, i) => i !== index),
    })),

  editUser: (index) =>
    set({
      editIndex: index,
    }),
}));

export default useUserStore;
