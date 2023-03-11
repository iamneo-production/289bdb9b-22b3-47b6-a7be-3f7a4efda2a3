import axios from 'axios';
import React from 'react';
import Card from './Card';
import Spinner from './Spinner';
import { useEffect,useState } from 'react';
import './profiles.css';

import Navbar from '../Navbar';
const Profiles = () => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState(null);
  useEffect(() =>{
    axios.get('https://women-in-tech.apievangelist.com/apis/people/').then(
      res => {
        !search ? setData(res.data) : setData(res.data.filter(songs => songs.name===search))
      }
    )
  },[search])
  const onSubmit = e =>{
    e.preventDefault();
    setSearch(search);
  }
  return (
    <>
       <Navbar/>
        <div>
        <div> <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
           
            <form className="d-flex" onSubmit={onSubmit} >
            <input id="searchinput" className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
            <input id="buttonn" className="btn btn-outline-success" type="submit" value="Search" />
            </form>
        </div>
       </nav>
    
      {data.length >=1 ? 
      <center>
        <Card songs={data} />
      </center> 
      :
      <Spinner />
      }</div>
        </div>
    </>
    
   
       
     
  )
}

export default Profiles;