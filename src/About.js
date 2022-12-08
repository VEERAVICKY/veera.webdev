import React from 'react';
import profile from './icons/profile.JPG';

export const About = () => {

  return (
    <div   style={container}  >
      <div style={left} >
        <img src={profile}  style={pic} alt='veera'></img>
        <p style={name}>Veera Brahmam Chepuri</p>
        <p>Web Developer</p>
        
          
        
        <button style={email} >Email</button>
        
      </div>
        <div style={right}> 
          <p style={abt}>About Me</p>
          <p> I am a Self taught Developer in Web technologies .
         I am eager to join in a tech company that builds out-of-box solutions for regional clients.I am skilled in developing web applications,
            creating ETL tasks,and Database development And generating reports.
          </p>
         <button  style={resume}> <a className='resume' href="veerabrahmamchepuri.pdf" download>Resume</a></button>
        </div>
        
      
    </div>
  )
}
const name={
  fontWeight:'600',
  marginBottom:'5px'
}

const email={
  marginTop:'15px',
  padding:'3% 10%',
  backgroundColor:'black',
  color:'white'

}
const abt={
  fontSize:'28px',
  marginBottom:'10px',
  fontWeight:'500'
}

const pic={
  height:'140px',
  marginBottom:'10px'
}


var container={ 
  width:'800px',
  textAlign:'center',
  position:'absolute',
  top:'50%',
  left:'50%',
  display:'grid',
  transform:'translate(-50%,-50%)',
  gridTemplateColumns:'1fr 1fr',
  gap:'20px',
  border:'2px solid black',
  alignItems:'center'
}

var left={
 
  justifySelf:'center',  
}
const resume={
  padding:'10px',
  backgroundColor:'black',
  justifySelf:'center',
  marginTop: '1rem'
}

const right={
  padding:'10% 5% ',
  backgroundColor:'hsl(0, 0%, 90%)'
}



if (window.matchMedia("(max-width: 700px)").matches) {
  // Viewport is less or equal to 700 pixels wide
  var container={ 
    width:'100%',
    marginTop:'50px',
    textAlign:'center',
    position:'absolute',
    top:'50%',
    left:'50%',
    display:'grid',
    transform:'translate(-50%,-50%)',
    gridTemplateColumns:'1fr ',
    gap:'20px',
    alignItems:'center'
  }
  left={
      alignSelf:'center',
    justifySelf:'center'
  }
} else {
  // Viewport is greater than 700 pixels wide
}