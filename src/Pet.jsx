import React from 'react';
const Pet = (props) => {
  return (<div>
    <h1>{props.name}</h1>
    <h2>{props.pet}</h2>
    <h2>{props.color}</h2>
  </div>);
};
export default Pet;