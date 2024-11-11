import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState('')
  const [search, setSearch] = useState('pikachu')
  const URL = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${search}`

  async function fetchData(){
    try {
      const response = await axios.get(URL)
      const result = await response.data
      setPokemon(result)
    }
    catch (err) {
      console.log(err.message)
    }
  }
  
  function handleChange(event) {
    let pokemonName = event.target.value.toLowerCase();
    setSearch(pokemonName)
  }

  function handleSubmit(event) {
    fetchData()
  }

  function getTypeColor(type) {
    switch (type) {
      case 'fire':
        return '#ff6f52';
      case 'grass':
        return '#78cc55';
      case 'water':
        return '#42a1ff';
      case 'electric':
        return '#fecc33';
      case 'fightning':
        return '#d3887e';
      case 'psychic':
        return '#ff66a3';
      case 'poison':
        return '#c68bb7';
      case 'ground':
        return '#dfba52';
      case 'rock':
        return '#baaa66';
      default:
        return '#8899ff'; // default color
    }
  }
 
  useEffect (()=>{
    fetchData() 
  },[])

  const stats = pokemon?.stats?.map((stat) => {
    return (
      <tr key={stat.stat.name}>
        <th>{stat.stat.name}</th>
        <th>{stat.base_stat}</th>
      </tr>
    );
  })

  return (
    <div className="content">
      <h1>Pokémon Search App</h1>
      <div className='container'>
        <div className='search-box'>
          <p>Search for pokemon by name or ID</p>
          <input
            className='search-input'
            type="text" 
            placeholder='Search Pokemon!'
            onChange = {handleChange}
            />
          <button 
          type="submit"
          onClick={handleSubmit}
          >Search</button>
        </div>
        <div className="top-container">
          <div className="name-and-id">
            <span>{pokemon.name} #{pokemon.id}</span>
          </div>
          <div className="size">
            <span>Weight: {pokemon.weight} </span>
            <span>Height: {pokemon.height} </span>
          </div>
          <div className="sprite-container">
            <img src={pokemon?.sprites?.front_default} alt="" />
          </div>
          <div className="types">
            {pokemon?.types?.map((typeInfo) => (
              <span
                className='type'
                key={typeInfo.type.name}
                style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
              >
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="bottom-container">
          <table>
            <tbody>
              <tr>
                <th>Base</th>
                <th>Stats</th>
              </tr>
              {stats}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App


// Conditional rendering on types
// red - fire, yellow - electric etc.