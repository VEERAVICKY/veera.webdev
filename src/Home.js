import React from 'react';
import './App.css';

function Home() {
  return (
    <div >
      <div > </div>
      <div style={hero_title}><p style={iam}>Hello;<br /></p>
      <p style={veera}>I'm Veera, a Web Developer based in India.</p></div>
    </div>
  )
}

export default Home

const hero_title={
  position:"absolute",
  top:'50%',
  left:"50%",
  transform:'translate(-50%,-50%)',
  textAlign:'center',
  fontWeight:'800'
}
const iam={
  fontSize:'10vh',
  color:'#112A46'
  
}

const veera={
  fontSize:'24px',
  fontWeight:'700',
  zIndex:'10',
  color:'rgb(4, 170, 109)'
  
}