import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs);
    console.log(event.target.username);
    console.log(event);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(event);
  }

  let header1 = ''
  if (inputs.username) {
      header1 = <h1>Hello {inputs.username}</h1>
  } else {
      header1 = ''
  }

  let header2 = ''
  if (inputs.age && Number(inputs.age)) {
      header2 = <h1>{inputs.age} tuổi</h1>
  } else {
      header2 = ''
  }

  let err = ''
  if (!Number(inputs.age) && inputs.age) {
      err = <h1>Tuổi phải là số</h1>
  } else {
      err = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br/>
      <label>Enter your age:
        <input 
          type="text" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        <br/>
        </label>
        <input type="submit" />
        {header1} {header2}
        {err}
    </form>
  )
}

export default MyForm