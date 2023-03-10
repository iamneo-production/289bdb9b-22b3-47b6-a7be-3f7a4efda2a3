import React from 'react';
import './contact.css';
import Navbar from './Navbar';
const Contact=()=>{
        return(
            <>
            <Navbar/>
                    <div class="container">
                    

                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                        <label for="email"><b>Email</b></label> 
                        <input type="text" placeholder="Enter Your E-mail" name="email" required/><br/>

        
                        <input type="submit" value="Submit"/>

                    
                    </div>

            </>

        )

}
export default Contact;