import React,{useState} from 'react';
var Multiselect = require('react-bootstrap-multiselect');

export function ReactBootstrapMultiselect() {
  let [gender, setGender] = useState(null)
  const handleChange = function(){

  }
  return (
    <div className="App">
      <h1>I couldnt get this to work with an onchange handler and i couldnt find examples so im going to use a differnt library</h1>
      <label htmlFor="gender">Gender</label>
      <Multiselect  id="gender" multiple data={[{value:'Male'},{value:'Female'},{value:'Non Binary'},{value:'Four',label:'Four Label'}]}/>

    </div>
  );
}
