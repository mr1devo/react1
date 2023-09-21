import React, { useState } from 'react'

const Student = () => {
    const [n,setn]=useState('');
    const[a,seta]=useState('');
    const[ag,setag]=useState('');
    const[p,setp]=useState('');
    const[d,setd]=useState('');
    const[error,setError]=useState(false);
    const readn=(event)=>{
        setn(event.target.value);
    console.log(n);
    }
    const readd=(event)=>{
        setd(event.target.value);
    console.log(d);
    }
    const readp=(event)=>{
        setp(event.target.value);
    console.log(p);
    }
    const reada=(event)=>{
        seta(event.target.value);
        console.log(a);
        }
    const readag=(event)=>{
         setag(event.target.value);
         console.log(ag);
         }
     const checkerror =(event)=>{
          if (n.trim()===''||a.trim()===''||ag.trim()===''||p.trim()===''||d.trim()==='')
          {
          setError(true);
           return;
         }
            }
            const myobj={
                na:n,
                ad:a,
                age:ag,
                ph:p,
                do:d
            }
            
  return (
    <div>
      <h1>Student Registration</h1>
      <form>
      Name : <input type="text" onChange={readn}></input><br></br><br></br>
      Address : <input type="textarea" onChange={reada}></input><br></br><br></br>
      Age : <input type="number" onChange={readag}></input><br></br><br></br>
      Phone : <input type="number" onChange={readp}></input><br></br><br></br>
      DOB : <input type="date" onChange={readd}></input><br></br><br></br>
      <button type="submit" onClick={checkerror}>SAVE</button><br></br>
      {error&& 'Error occurs'}
      </form>
    </div>
)}

export default Student
