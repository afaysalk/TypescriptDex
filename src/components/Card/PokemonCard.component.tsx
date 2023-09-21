import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IPokemon, IPokemonCard } from "../../types/pokemon.types";
import useApi from "../../hooks/useApi.hook";


const PokemonCard:React.FC<IPokemonCard> = ({url,onCardClick}) => {
	const [ data, loading, error] = useApi<IPokemon>(url)
	
	const handleCardClick = (url: string) => {
		onCardClick(url);
	  };
  return (
	<Card sx={{ maxWidth: 345 }}>
	{data && 
		<CardActionArea onClick={() => handleCardClick(url)}>
			<CardMedia
				component="img"
				height="140"
				image={data.sprites.front_default}
				alt={data.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
				{ data.name}
				</Typography>
			</CardContent>
		</CardActionArea>}
  </Card>
  )
};

export default PokemonCard;
