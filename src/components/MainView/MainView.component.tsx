import Box from "@mui/material/Box";
import React from "react"
import { IChildren } from "../../types/pokemon.types";
import { Margin } from "@mui/icons-material";


const MainView:React.FC<IChildren> = ({children}) => {
	const style = {
		width:'100%',
		display:'flex',

		
	}


	const backgroundStyle: React.CSSProperties = {
		
    alignItems: 'center', // Align the links vertically centered
    backgroundImage: 'url("https://i.ebayimg.com/images/g/GVsAAOSwYihgT~Yi/s-l1600.jpg")', // Set the background image URL
    backgroundPosition: 'top right', // Position the image in the top right corner
	backgroundRepeat: 'no-repeat',
    backgroundSize: '500px', // Adjust the image size
	backgroundPositionX: '115%',
	backgroundBlendMode :'unset'
	
		
	  };

	const flexboxBarStyle: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'red',
		padding: '10px 20px',
		color: 'white',
	  };
	
	  const textSectionStyle: React.CSSProperties = {
		display: 'flex',
	  };
	
	  const linkStyle: React.CSSProperties = {
		color: 'white',
		textDecoration: 'none',
		padding:'20px',
		marginLeft:'20px',
		fontWeight: 'bold',
		scale :'2'
	  };
	
	  const logoStyle: React.CSSProperties = {
		maxWidth: '100px',
	  };
	
  return (
	<div style={backgroundStyle}>
      <nav style={flexboxBarStyle}>
        <div style={textSectionStyle}>
          <a href="#" style={linkStyle}>Your Pokedex</a>
          
        </div>
        <div>
          <img src="" alt="" style={logoStyle} />
        </div>
      </nav>

      <Box component='main' sx={style}>
        {children}
      </Box>
    </div>
  )
};

export default MainView;
