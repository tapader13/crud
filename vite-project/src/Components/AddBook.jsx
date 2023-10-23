import React, { useState } from 'react';
import style from './addbook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../reducers/Reducer';
import { useNavigate } from 'react-router-dom';
function AddBook() {
  const lengthId = useSelector((state) => state.todos.users.length);
  // console.log(lengthId);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSub = (e) => {
    e.preventDefault();
    const newTodos = { id: lengthId + 1, title, desc };
    // console.log(newTodos);
    dispatch(addBook(newTodos));
    navigate('/showBook', { replace: true });
  };
  return (
    <div className={style.container}>
      <form action='' className={style.form} onSubmit={handleSub}>
        <div className={style.inp1}>
          <label className={style.label} htmlFor='title'>
            Title:{' '}
          </label>
          <input
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className={style.title}
            type='text'
            name='title'
            id='title'
          />
        </div>
        <div className={style.inp2}>
          <label className={style.label} htmlFor='desc'>
            Desc:{' '}
          </label>
          <input
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            required
            className={style.desc}
            type='text'
            name='desc'
            id='desc'
          />
        </div>
        <button className={style.btn} type='submit'>
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddBook;
