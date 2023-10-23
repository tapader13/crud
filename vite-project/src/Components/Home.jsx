import React from 'react';
import style from './home.module.css';
function Home() {
  return (
    <div className={style.container}>
      <h1 style={{ textAlign: 'center', paddingTop: '.7rem' }}>
        What a CRUD app?
      </h1>
      <div className={style.intro}>
        A CRUD (Create, Read, Update, Delete) application is a fundamental type
        of software application that provides essential operations for managing
        and manipulating data. These operations are the building blocks of many
        web and database applications, allowing users to interact with and
        manipulate data stored in a database. Let's break down the key
        components of a CRUD app and how it works:
      </div>
      <div className={style.desc}>
        <h2>1. Create (C):</h2>
        <p>
          The "Create" operation involves adding new data to the system. Users
          can input data through forms, APIs, or other input methods. This data
          is then stored in a database, creating a new record.
        </p>
      </div>
      <div className={style.desc}>
        <h2>2. Read (R):</h2>
        <p>
          The "Read" operation allows users to retrieve or access data from the
          database. Users can query, search, or simply view the data stored in
          the system. Reading operations are essential for displaying data on
          user interfaces.
        </p>
      </div>
      <div className={style.desc}>
        <h2>3. Update (U):</h2>
        <p>
          The "Update" operation lets users modify or edit existing data. This
          involves making changes to specific records by updating their
          attributes or values. It's crucial for keeping data up-to-date.
        </p>
      </div>
      <div className={style.desc}>
        <h2>4. Delete (D):</h2>
        <p>
          The "Delete" operation allows users to remove data from the system.
          This operation is often used to clean up obsolete or irrelevant
          records, ensuring data integrity and efficiency.
        </p>
      </div>
      <div className={style.desc}>
        In summary, a CRUD app simplifies the process of managing data, making
        it accessible, editable, and deletable as needed.
      </div>
    </div>
  );
}

export default Home;
