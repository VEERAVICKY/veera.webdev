import React from 'react';
import {Link} from 'react-router-dom';


function Header(){
    return(
        <div >
             <nav>
            <div className="logo"  > <Link to='/'>Veera</Link></div>

            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/About'><li>About</li></Link>
                <Link to='/Projects'><li>Projects</li></Link>
               
            </ul>
        </nav>
        
   
        
            </div>
            
    )
    
    }

export default Header




