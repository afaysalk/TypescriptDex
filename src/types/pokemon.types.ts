import React,{ReactNode} from "react";

export interface IChildren {
	children:ReactNode;
}

export interface IUrl{
	cardUrl:string;
}

export interface PokemonList {
	count: number;
	next: string | null;
	previous: string | null;
	results: {
	  name: string;
	  url: string;
	}[];
  }

export interface IPokemonCard{
	url:string;
	onCardClick: (arg:string) => void;
}

export interface IPokemon {
	abilities: Array<{
	  ability: {
		name: string;
		url: string;
	  };
	  is_hidden: boolean;
	  slot: number;
	}>;
	base_experience: number;
	forms: Array<{
	  name: string;
	  url: string;
	}>;
	game_indices:[any];
	height: number;
	held_items: Array<{}>;
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: [any]
	name: string;
	order: number;
	past_types: Array<{}>;
	species: {
	  name: string;
	  url: string;
	};
	sprites: {
	  back_default?: string;
	  back_female?: string ;
	  back_shiny?: string;
	  back_shiny_female?: string;
	  front_default?: string;
	  front_female: string;
	  front_shiny?: string;
	  front_shiny_female?: string;
	  other?: {
		dream_world: {
		  front_default: string;
		  front_female: string | null;
		};
		"official-artwork": {
		  front_default: string;
		};
	  };
	  versions?: Record<string, unknown>;
	};
	stats:[any]
	types: Array<{
	  slot: number;
	  type: {
		name: string;
		url: string;
	  };
	}>;
	weight: number;
  }