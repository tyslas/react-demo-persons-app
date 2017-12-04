import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  const assignedClasses = [] //result -> "red bold"
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red ); //classes -> ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold ); //classes -> ['red', 'bold']
  }
  const paraStyle = assignedClasses.join(' ');

  return (
    <Aux>
      <h1>Hi, I'm a React App</h1>
      <p className={paraStyle}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </Aux>
  );
};

export default cockpit;
