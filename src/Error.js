import React from 'react';


function Error() {
  return (
    <div>
    <div style={Error_msg}>Error</div>
    <div style={msg}>The page you are looking can't be found.</div>
    </div>
  )
}

export default Error


const Error_msg={
  color:"brown",
  fontSize: "3.8rem",
  fontWeight: "600",
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%,-50%)"
}

const msg={
  top: "50%",
  left: "50%",
  position:"absolute",
  fontSize: "24px",
  marginTop: "4rem",
  transform: "translate(-50%,-50%)"
}
