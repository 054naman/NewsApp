import React, { useState } from "react";
import './form.css'
function UserForm() {
    const [user,setUser]=useState({
        name:"",
        email:" ",
        phone:" ",
        msg:" ",
        address:""
    })

    let name,value;
    const getdata=(event)=>{
        name=event.target.name;
        value=event.target.value;
        // console.log(user);
        setUser({...user,[name]:value});
    }

    const dataStore=async()=>{
        // e.preventdefault();
         const res = await fetch("https://database1-634b9-default-rtdb.firebaseio.com/database1.json",{
            method:"POST",
            Header:"Contebt-type application/json",
            body:JSON.stringify({
                name:user.name,
                email:user.email,
                phone:user.phone,
                msg:user.msg,
                address:user.address

            })
        })
        if(res){
            setUser({
                name:" ",
                email:" ",
                phone:" ",
                msg:" ",
                address:""
            },alert("user data is submited"))

        }

    }

    return (
        <>
            <div className="container">
            <div className="col1">
                <img src="feedbackimg.png" alt="no" />
            </div>
             <div className="col2">
                   
            <h1> User Details form</h1>
            <div className="form">

                <div className="form-div">
                    
                    <input type="text" name="name" placeholder="Enter your name" value={user.name} onChange={getdata}/>
                </div>
                <div className="form-div">
            
                    <input type="email" name="email" placeholder="Enter your email" value={user.email} onChange={getdata}/>
                </div>
                <div className="form-div">
            
                    <input type="tel" name="phone" placeholder="Enter your phone no" value={user.phone} onChange={getdata}/>
                </div>
                <div className="form-div">
                    
                    <input type="text" name="address" placeholder="Enter your address"  value={user.address} onChange={getdata}/>
                </div>
                <div className="form-div">
                    
                    <textarea name="msg" placeholder="Enter your feedback" rows="5" cols="20"  value={user.msg} onChange={getdata}></textarea>
                </div>

                <div>
                    <button type="submit" className="btn" onClick={dataStore}>submit</button>
                </div>

            </div>
            </div>
            
            </div>
        </>
    )
}

export  default UserForm ;