import React, { useMemo, useState } from 'react';

const UseMemo1=()=>{
    let[count1,setCount1]=useState(0);
    let [count2,setCount2]=useState(10);
   
    let isEven = useMemo(()=> {
        let i=0;
        while(i<=999999999999) i++;
        return count1 % 2 == 0; 
      },[count1]);
      
    return(
        <div>
            <button onClick={()=>{setCount1(count1+1)}}>Count-{count1}</button>&nbsp;&nbsp;&nbsp;
            {isEven?'even':'odd'}<br/><br/><br/>
            <button onClick={()=>setCount2(count2+10)}>Count-{count2}</button>
        </div>
    )
}
export default UseMemo1;