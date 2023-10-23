import { createSlice } from '@reduxjs/toolkit';

const initialData = {
  users: [
    {
      id: 1,
      title: 'minhaj',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis magni tempora odio soluta eligendi.',
    },
    {
      id: 2,
      title: 'miftah',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis magni tempora odio soluta eligendi.',
    },
  ],
};
export const Reducer = createSlice({
  name: 'todos',
  initialState: initialData,
  reducers: {
    showBook: (state) => {
      return state;
    },
    addBook: (state, action) => {
      state.users.push(action.payload);
    },
    dltBook: (state, action) => {
      const idr = action.payload;
      state.users = state.users.filter((user) => {
        return user.id !== idr;
      });
    },
    updateBook: (state, action) => {
      const { id, title, desc } = action.payload;
      const result = state.users.filter((user) => user.id === id);
      //   console.log(result);
      if (result) {
        result[0].title = title;
        result[0].desc = desc;
      }
    },
  },
});
export const { showBook, addBook, dltBook, updateBook } = Reducer.actions;
export default Reducer.reducer;
