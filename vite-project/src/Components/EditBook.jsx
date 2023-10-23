import React, { useState } from 'react';
import style from './editBook.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBook } from '../reducers/Reducer';
function EditBook() {
  const dispatch = useDispatch();
  const location = useLocation();
  let { id } = location.state;
  //   console.log(location.state);
  const navigate = useNavigate();
  const [title, setTitle] = useState(location.state.title);
  const [desc, setDesc] = useState(location.state.desc);
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, desc }));
    navigate('/showBook', { replace: true });
  };
  return (
    <div className={style.container}>
      <form action='' className={style.form} onSubmit={handleUpdate}>
        <div className={style.inp1}>
          <label className={style.label} htmlFor='title'>
            Title:{' '}
          </label>
          <input
            value={title}
            required
            className={style.title}
            type='text'
            name='title'
            id='title'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className={style.inp2}>
          <label className={style.label} htmlFor='desc'>
            Desc:{' '}
          </label>

          <textarea
            cols='30'
            rows='10'
            value={desc}
            required
            className={style.desc}
            type='text'
            name='desc'
            id='desc'
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <button className={style.btn} type='submit'>
          UPDATE
        </button>
      </form>
    </div>
  );
}

export default EditBook;
