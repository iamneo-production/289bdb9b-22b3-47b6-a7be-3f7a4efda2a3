import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
const Logout = () => {
  const {dispatch}=useContext(UserContext);
    const history=useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            header:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:'include'
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            history('/',{replace:true});
            if(res.status!==200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        });
    });

    return (
    <>
        <h1>logout page</h1>
    </>
  )
}

export default Logout