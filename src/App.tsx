import { Box } from "@mui/material";
import React from "react";
import LeftSide from "./components/LeftSide/LeftSide.component";
import MainView from "./components/MainView/MainView.component";
import RightSide from "./components/RightSide/RightSide.component";
const App=() =>{
  return (
   <MainView>
		<LeftSide/>
		{/* <RightSide/> */ }
   </MainView>
  );
}

export default App;
