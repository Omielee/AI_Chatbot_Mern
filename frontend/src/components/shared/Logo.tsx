import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return <div style={{ 
        display: "flex", 
        marginRight: "auto", 
        marginTop:"8px",
        alignItems: "center",
        gap: "15px", 
    }}> 
    <Link to={"/"}>
         <img 
            src="profile.png" 
            alt='logo' 
            width={"40px"} 
            height={"50px"}
            // className='image-inverted'
        />
    </Link>
    <Typography sx={{
            display:{md:"block",sm:"none",xs:"none"}, 
            mr:"auto", 
            fontWeight:"800",
            textShadow:"2px 2px 20px #000",}}
            >
            <span style={{fontSize:"20px"} }>MERN-GPT</span> <span style={{fontSize:"8px"}}>by Yu</span>


        </Typography>
    </div>
}

export default Logo

