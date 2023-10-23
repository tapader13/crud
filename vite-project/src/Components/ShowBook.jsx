import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './showbook.module.css';
import { dltBook } from '../reducers/Reducer';
import { Link } from 'react-router-dom';
function ShowBook() {
  const todos = useSelector((state) => state.todos.users);
  const dispatch = useDispatch();

  const onDlt = (id) => {
    dispatch(dltBook(id));
  };

  return (
    <>
      <div className={style.container}>
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <td style={{ width: '20%' }} className={style.td}>
                Title
              </td>
              <td className={style.td}>Desc</td>
              <td style={{ width: '22%' }} className={`${style.td} `}>
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.map((todo, i) => {
                const { id, title, desc } = todo;

                return (
                  <tr key={i} className={style.tr}>
                    <td style={{ width: '20%' }} className={style.td}>
                      {title}
                    </td>
                    <td className={style.td}>{desc}</td>
                    <td style={{ width: '22%' }} className={`${style.td} `}>
                      <div className={style.btn}>
                        <Link to={'/editBook'} state={{ id, title, desc }}>
                          {' '}
                          <button
                            style={{
                              backgroundColor: '#9bdb9b',
                              paddingBlock: '.3rem',
                              paddingInline: '.5rem',
                              borderRadius: '7px',
                              cursor: 'pointer',
                              border: 'none',
                              fontSize: '1rem',
                            }}
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            onDlt(id); // Pass the specific id to the onDlt function
                          }}
                          style={{
                            backgroundColor: '#9bdb9b',
                            paddingBlock: '.3rem',
                            paddingInline: '.5rem',
                            borderRadius: '7px',
                            cursor: 'pointer',
                            border: 'none',
                            fontSize: '1rem',
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowBook;
