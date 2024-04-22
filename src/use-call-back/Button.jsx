import React from 'react';

const Button=(props)=>{
    return(<div>
  <button onClick={props.handleAge}>Age</button>&nbsp;&nbsp;&nbsp;
  <button onClick={props.handleSalary}>Salary</button>
    </div>)
}
export default Button;