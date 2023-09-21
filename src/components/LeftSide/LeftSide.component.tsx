import React,{ useState} from "react"
import Container from '@mui/material/Container';
import useApi from "../../hooks/useApi.hook";
import { PokemonList } from "../../types/pokemon.types";
import { FIRST_PAGE_URL } from "../../const/pokemon.const";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PokemonCard from "../Card/PokemonCard.component";
import RightSide from "../RightSide/RightSide.component";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import EmptyRightSide from "../EmptyRightSide/EmptyRightSide.component";

const LeftSide:React.FC = () => {
	const [url, setUrl] = useState<string>(FIRST_PAGE_URL)
	const [urlPokemon, setUrlPokemon] = useState('')
	const [ data, loading, error] = useApi<PokemonList>(url)

	const handleNextPage = () =>{
		if(data?.next != null){
			setUrl(data.next)
		}else {
			setUrl(FIRST_PAGE_URL)
		}
	}
	const handlePrevPage = () =>{
		if(data?.previous != null){
			setUrl(data?.previous)
		}else {
			setUrl(FIRST_PAGE_URL)
		}
	}

	const handleCardClick = (url: string) => {
		setUrlPokemon(url);
	  };

	if (loading) {
		return <div>Loading...</div>;
	  }
	
	  if (error) {
		return <div>Error: {error}</div>;
	  }
	
	  if (!data) {
		return null;
	  }
	
  return (
	<>
		<Container 
		sx={{paddingTop:2,}} 
		maxWidth='md'
	>
		<Box sx={{ flexGrow: 1 }}>
			<ButtonGroup 
				sx={{
					width:"100%", 
					display:'flex', 
					padding:'20px',
					alignItems:'center', 
					justifyContent:'center'}}
				disableElevation
				variant="contained"
			
				>
				<Button onClick={handlePrevPage}>Prev</Button>
				<Button onClick={handleNextPage}>Next</Button>
			</ButtonGroup>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{data.results.map((el, index) => (
					<Grid item xs={2} sm={3} md={3} key={index}>
						<PokemonCard url={el.url} onCardClick={handleCardClick}/>
					</Grid>
				))}
			</Grid>
		</Box>
	</Container>
	<Container sx={{paddingTop:2 ,display:'flex',  justifyContent:'center' , alignItems:'center'}} maxWidth='md'>
	{urlPokemon 
		? 	<RightSide cardUrl={urlPokemon}/> 
		:	<EmptyRightSide/>
		}
	</Container>
	
	</>
  )
};

export default LeftSide;
