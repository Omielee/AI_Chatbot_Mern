import { styled } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
    to:string;
    bg:string;
    text:string;
    textcolour:string;
    onClick?:()=>Promise<void>; 
}

const NavigationLink = (props:Props) => {
  return <Link 
  className="nav-Link"
  to={props.to} style={{background:props.bg, color:props.textcolour}}
  >
    {props.text}</Link>;
  
}

export default NavigationLink
