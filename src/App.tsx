import React, { useEffect, useState } from 'react';
import { Paper, Fade } from '@material-ui/core'
import './App.css';
import Appbar from './components/Appbar/Appbar';
import Sidebar from './components/Sidebar/Sidebar';
import Pokepage from './pages/Pokepage';
import Loading from './components/Loading/Loading';
import WifiIndicator from './components/WifiIndicator/WifiIndicator';

import axios from 'axios';

function App() {

  const [loading, setloading] = useState<boolean>()
  const [offline, setoffline] = useState<boolean>()
  const [pokemons, setpokemons] = useState<any[]>([])
  const [generations, setgenerations] = useState<any[]>([])
  const [expand, setexpand] = useState(false)
  const [selectedGeneration, setselectedGeneration] = useState()
  const [selectedPokemon, setselectedPokemon] = useState()

  const init = async () => {
    const generationResult = await axios.get("https://pokeapi.co/api/v2/generation");
    const pokemonResult = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    setgenerations(generationResult.data.results);
    console.log(pokemonResult.data.results)
    setpokemons(pokemonResult.data.results);
  }

  const handleExpand = (flag: boolean) => {
    if(flag !== null) {
      setexpand(flag)
    } else {
      setexpand(!expand)
    }
  }

  const handleSelected = async (pokemon: any) => {
    setloading(true);
    handleExpand(false);
    if(pokemon) {
      const information = (await axios.get(pokemon.url)).data;
      const speciesResult = (await axios.get(information.species.url)).data;
      setselectedPokemon({... information, ... speciesResult});
      setloading(false);
      return;
    }
    setselectedPokemon(pokemon);
    setloading(false);
  }

  const handleGeneration = async (url: string) => {
    setloading(true);
    const pokemonResult = (await axios.get(url)).data;
    const speciesResult = pokemonResult.pokemon_species;
    for(const specie of speciesResult) {
      specie.url = `https://pokeapi.co/api/v2/pokemon/${specie.name}/`
    }
    setpokemons(speciesResult);
    handleSelected(speciesResult[0]);
    setloading(false);
  }

  useEffect(() => {
    setloading(true);
    window.addEventListener('online', () => setoffline(false));
    window.addEventListener('offline', () => setoffline(true));
    init();
    setloading(false);
  }, [])

  return (
    <Paper square className="w-screen h-screen d-flex flex-column">
      <Appbar eventSelection={handleGeneration} generations={generations} eventButton={handleExpand}/>
      <Sidebar eventClose={handleExpand} pokemons={pokemons} expand={expand} eventSelect={handleSelected} />
      <div className="px-4 d-flex overflow-hidden">
        <Pokepage pokemon={selectedPokemon} />
      </div>
      <div className="indicator-container top right">
        <Fade timeout={{ exit: 1200, appear: 500 }}
          in={loading}
          mountOnEnter
          unmountOnExit>
          <Loading />
        </Fade >
        <Fade timeout={{ exit: 1200, appear: 500 }}
          in={offline}
          mountOnEnter
          unmountOnExit>
          <WifiIndicator />
        </Fade>
      </div>
    </Paper>
  );
}

export default App;
