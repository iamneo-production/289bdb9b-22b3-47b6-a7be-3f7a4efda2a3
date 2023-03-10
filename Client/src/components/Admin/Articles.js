import axios from 'axios';
import React from 'react';
import Card from './Card';
import Spinner from './Spinner';
import { useEffect,useState } from 'react';

import {NavLink} from 'react-router-dom';
import Navbar from '../Navbar';
export const Articles = () => {
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
    
    <div>
        <Navbar/>
        <div className='section'>
            <div className='first'>
            <section class="module bg-dark-30 about-page-header">
          <div class="second">
          <h2 id='h2'>Women In Tech Articles</h2>
          <p id='para'>Women can bring a fresh approach and offer unique perspectives to meet challenges, solve problems, and design new products. </p>
          <h3>
            To Connect With LinkedIn Profiles<NavLink to="/linkedposts"> Click</NavLink>
          </h3>
            <div class="row" id="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h1 class="module-title font-alt mb-0">
                
                <form className="d-flex" onSubmit={onSubmit} id="form">
                <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                <input className="btn btn-outline-success" type="submit" value="Search" id='btn' />
                </form>
                </h1>
              </div>
            </div>
          </div>
        </section>
            </div>
        </div>
        {data.length >=1 ? 
      <center>
        <Card songs={data} />
      </center> 
      :
      <Spinner />
      }
    </div>
  )
}
