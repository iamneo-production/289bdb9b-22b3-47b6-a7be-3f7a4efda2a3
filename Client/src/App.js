import React, { createContext, useReducer } from 'react'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/SignUp'
import Logout from './components/Logout'
import { initialState ,reducer} from './components/reducer/UserReducer';
import Quiz from './components/Quiz'
import { AdminHome } from './components/Admin/AdminHome'
import Profiles from './components/Admin/Profiles'

import { Articles } from './components/Admin/Articles'

import { Post } from './components/Post/Post'
import { LinkedProfiles } from './components/LinkedProfiles/LinkedProfiles'

import Learn from './components/Learn/Learn'
import Catalog from './components/Catalog/Catalog'
import { Faq } from './components/Faq'
import Forum from './components/Forum'
import Calender from './components/Calender'
import Forms from './components/Feedback/Forms'
import Submissions from './components/Feedback/Submissions'
export const UserContext=createContext();
  const Routing=()=>{
   
    return (
      
      <Routes> 
        <Route
            exact
            path="/"
            element={<Home/>}
          /> 
     
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/admin/" element={<AdminHome />} />
      <Route path="/profiles" element={<Profiles/>} />
      <Route path="/articles" element={<Articles/>} />
      <Route path="/posts" element={<Post/>} />
      <Route path="/linkedposts" element={<LinkedProfiles/>} />
      <Route path="/resources" element={<Learn/>} />
      <Route path="/career" element={<Catalog/>} />
      <Route path="/events" element={<Calender/>} />
      <Route path="/forum" element={<Forum/>} />
      <Route path="/feedback" element={<Forms/>} />
      
        <Route path="submissions" element={<Submissions />} />
        <Route path="submission/:id" element={<Submissions />} />
     
      </Routes>

    )
  }
const App= ()=> {
  const [state,dispatch]=useReducer(reducer,initialState)
   
  return (
   
    <>
     <UserContext.Provider value={{state,dispatch}}>
 
     
      <Routing/>
     

     </UserContext.Provider>
     
        
  </>
  )
}

export default App;

