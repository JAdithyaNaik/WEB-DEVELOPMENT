import React from "react";
import { NavLink } from "react-router-dom";
// rafce




const Navbar = () => {
  return (
    <div>
      {/* this reloads the page */}
      {/* <nav>
          <a href="/"><li>Home</li></a>
          <a href="/about"><li>About</li></a>
          <a href="/contact"><li>Contact</li></a>
      </nav> */}


 {/* to avoid reload */}
      <nav>
        {/* this will check wheather that component is active or not */}
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/contact"><li>Conatct</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":""}} to="/profile"><li>Profile</li></NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
