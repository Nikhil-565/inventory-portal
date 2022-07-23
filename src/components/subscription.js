import { useState } from "react"

export default function Subsc(){
    const a="Subscribe here for getting the information about the new equipement being added"
    const b="Thank you for subscribing"
    const [count,setCount] = useState(a)
    const [c,setC]=useState(1000)
    let x,y,z 
    function increment(){
       if(x==true && y==true && z==true)
       {
        setCount(b)
       setC(1001)
       document.querySelector(".verify").textContent=""}
       else document.querySelector(".verify").textContent="Please fill the following deatails"

    }
    function input(){
       x=true
    }
    function inpu(){
        y=true
     }
     function inp(){
        z=true
     }
    return(
    <div>
        <h1 className="verify"></h1>
        <div className='subscriptions'>
            <h1 className='subs'>{count}</h1>
            <form className='subscribe-here'>
          <input type="Text" placeholder='name' className='text' onChange={input}></input>
          <input type="Text" placeholder='email-address'className='text'onChange={inpu}></input>
          <input type="Text" placeholder='room number'className='text'onChange={inp}></input>
        </form>
        <button onClick={increment} className="text">submit</button>
        <h1 className="note">No of subscribers till now :- {c}</h1>
        </div>
    </div>
    )
}