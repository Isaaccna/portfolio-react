import React from 'react';
import Profile from '../../assets/profile/profile.png'
//import picture from the previous passport. create a "assets" directory to save it as indicated below
//import profilePicture from '../../assets/profile/profile-picture.jpg';
//<img src={profilePicture} className="my-2" style={{ width: "100%" }} alt="profile" />
function About() {
    return(
        <section id="about">
        
            <h1> About me </h1>
    <div id="wrapper">
               <div className="m-2" id="profile-picture">
                   <img 
                   src = {Profile}
                   alt="profile picture"
                   >
                   </img>
              </div>
           <div id="description" >
        <p>
            My name is <em>Isaac</em>. I'm a Brazilian 🇧🇷 living in The U.S 🇺🇸. I am a current, full-stack development boot camp student, with a degree in business. My interests are 📚 ⚽️ 🏋️‍♀️ 🥋 .
        </p>
      
    </div>
 </div>
    </section>
    )
}

export default About;