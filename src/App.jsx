import { useState, useEffect } from 'react'
import { axios } from 'axios'

function App() {
  const [pokemon, setPokemon] = useState('')
  const URL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon'

  useEffect(() => {
    async function fetchData(){
      const data = await fetch(URL);
    }
    
  }, [])

  return (
    <>
      <h1>Pokemon Wiki</h1>
      <div className='container'>
        <h3>Search for pokemon. Enter name or ID</h3>
        <div>
          <input type="text" />
          <button type="submit">Search</button>
        </div>
        <div className="top-container">
          <div className="name-and-id">
            <span>NAME ID</span>
          </div>
          <div className="size">
            <span>SIZE</span>
          </div>
          <div className="sprite-container">
            <img src="" alt="" />
          </div>
          <div className="types">
            <span>Type 1</span>
            <span>Type 2</span>
          </div>
        </div>
        <div className="bottom-container">
          <table>
            <tbody>
              <tr>
                <th>Base</th>
                <th>Stats</th>
              </tr>
              <tr>
                <th>HP</th>
                <th>S6</th>
              </tr>
              <tr>
                <th>Attack</th>
                <th>4</th>
              </tr>
              <tr>
                <th>Defence</th>
                <th>53</th>
              </tr>
              <tr>
                <th>Sp. Attack</th>
                <th>2</th>
              </tr>
              <tr>
                <th>Sp. Defence</th>
                <th>1</th>
              </tr>
              <tr>
                <th>Speed</th>
                <th>100</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
