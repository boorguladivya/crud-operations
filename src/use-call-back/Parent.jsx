import React, { useState } from 'react';
import Button from './Button';
import Counter from './Counter';

const Parent=()=>{
  
    let [age,setAge]=useState(5);
    let[salary,setSalary]=useState(5000);
    
    let changeAge=()=>{
   setAge(age+5);
    }

    let changeSalary=()=>{
   setSalary(salary+5000);
    }

    return(<div>
         <Counter age={age} salary={salary} ></Counter><br/>
    <Button handleAge={changeAge} handleSalary={changeSalary}></Button>
  
  
    </div>)
}
export default Parent;