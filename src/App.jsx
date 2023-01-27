import React from "react";
import Pet from './Pet';
import Searchpets from "./Searchpets";

const App = () => {
  return (<div>
    <h1>You are here</h1>
    <Pet name="suhas" pet="dog" color="red"/>
    <Pet name="Manish" pet="cat" color="orange"/>
    <Searchpets/>

  </div>);
};
export default App;
