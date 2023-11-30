import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import '../components/styles/PokeInfoPage.css'

const PokeInfoPage = () => {

    const {id} = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemon, getPokemon]=useFetch(url)

    useEffect(()=>{
        getPokemon()
    },[])

console.log(pokemon);
  return (
    <div className='div__home'>
      <article className='article'>
      <img className='article__img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      <h2 className='name'>{pokemon?.name}</h2>
      <ul>
                    {
                        pokemon?.types.map(infoType => (
                            <li className='type' key={infoType.type.url}>{infoType.type.name}</li>
                        ))
                    }
                </ul>
                <ul className='ul'>
                    {
                        pokemon?.abilities.map(infoAbilitie => (
                            <li key={infoAbilitie.ability.url}>{infoAbilitie.ability.name}</li>
                        ))
                    }
                </ul>
                <ul className='ul__stat'>
                    {
                        pokemon?.stats.map(infoStat => (
                            <li key={infoStat.stat.url}>
                            <span>{infoStat.stat.name}</span>
                            <span>{infoStat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
                
      </article>
    </div>
  )
}

export default PokeInfoPage