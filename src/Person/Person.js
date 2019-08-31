import React from 'react';
import styles from './Person.module.scss';

const person = ({ name, age, children, click, changed }) => {
  return (
    <div className={styles.Person}>
      <p onClick={click}>
        I'm {name} and I'm {age} years old!
      </p>
      <p>{children}</p>
      <input type='text' onChange={changed} value={name} />
    </div>
  );
};

export default person;
