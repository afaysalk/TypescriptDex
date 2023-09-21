import React from "react"
import { IPokemon, IUrl } from "../../types/pokemon.types";
import useApi from "../../hooks/useApi.hook";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const RightSide:React.FC<IUrl> = ({cardUrl}) => {
	const [ data, loading, error] = useApi<IPokemon>(cardUrl)

	if(!data){
		return <h1>Select a Pokemon</h1>
	}
	const firstImage = Object.values(data.sprites)[4];

	
  return (
	<>
	
		{data && <Card  sx={{ maxWidth: 500 }}>
			<CardMedia
				sx={{ height: 300 }}
				image={String(firstImage)}
				title={data.name}
			/>
			<CardContent>
				<Typography align="center" gutterBottom variant="h5" component="div">
					{data.name}
				</Typography>
				<Box sx={{
					display:'flex',
					justifyContent:'space-around', 
					width: '400px'}}>
					<List>Abilities:
						{data.abilities.map((el, index)=>(
								<ListItem key={index}>{el.ability.name}</ListItem>
						))}
					</List>
					<List>Types:
						{data.types.map((el, index)=>(
								<ListItem key={index}>{el.type.name}</ListItem>
						))}
					</List>
				</Box>
			</CardContent>
		</Card>}
	</>
  )
};

export default RightSide;
