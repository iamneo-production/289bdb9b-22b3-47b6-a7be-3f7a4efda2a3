import React, {useState, useEffect, useCallback} from 'react'
import './Catalog.css'
import { Button } from 'reactstrap'
import Navbar from './Navbar';

function Catalog(){
return (
	<div className="App">
        <h1>
            Career Development Tools
        </h1>

        <div className= "cardProfile">
        <h2>
            Linked In     <Button href="https://www.linkedin.com/">View</Button>
        </h2>
        <p>
            A platform to explore industry trends, jobs, and expand your network.
        </p>
        
        
    </div>
    <div className= "cardProfile">
        <h2>
        Resume Builder <Button href="https://www.canva.com/create/resumes/">View</Button> 
        </h2>
        <p>
        A resume is a brief summary of personal and professional experiences and skills.
        </p>
    </div>
    <div className= "cardProfile">
        <h2>
            Glassdoor <Button href="https://www.glassdoor.com/Job/index.htm">View</Button>
        </h2>
        <p>
        Glassdoor is an American website where current and former employees anonymously review companies.
        </p>
    </div>
    <div className= "cardProfile">
        <h2>
        Swot Analysis <Button href="https://en.wikipedia.org/wiki/SWOT_analysis">View</Button>
        </h2>
        <p>
        strengths, weaknesses, opportunities, and threats analysis is used to develop strategic planning of company.
        </p>
    </div>
    <div className= "cardProfile">
        <h2>
        Confidence!   <Button href="https://www.psychologytoday.com/us/basics/confidence">View</Button>
        </h2>
        <p>
        Confidence is a state of being clear-headed: either that a hypothesis or prediction is correct.
        </p>
    </div>
</div>            
);
};

export default Catalog;
