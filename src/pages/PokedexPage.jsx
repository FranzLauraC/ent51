import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import { useEffect, useRef, useState } from 'react'
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from '../components/PokedexPage/SelectType'
import '../components/styles/PokedexPage.css'

const PokedexPage = () => {

    const[inputValue, setInputValue]=useState('')
    const [selectValue, setSelectValue]=useState('allPokemons')

    const trainerName = useSelector(store => store.trainerName)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0'
    const [pokemons, getPokemons, getByTypePokemons]= useFetch(url)

    useEffect(()=>{
        if(selectValue === 'allPokemons'){
            getPokemons()
         }else{
            getByTypePokemons(selectValue)
         }
    },[selectValue])
  
  
  const inputSearch = useRef()

  const handleSubmit = e =>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }
  
  
  const cbFilter = (poke) => {
    const nameFiltered = poke.name.includes(inputValue)

    return nameFiltered
  }
    console.log(pokemons);
  
    return (
    <div className='div__mayor'>
      <div className='navbar'>
          <img className='nav__img' src="pokedex.png" alt="" />
        </div>
        <div className='navblack'>
          <div className='circle'></div>
          <div className='circle__'></div>
        </div>
      <div className='black'>
        <p className='p'>welcome <span className='p__span'>{ trainerName} </span>,here you find your favorite pokemon. Let's go!</p>
        <form className='form' onSubmit={handleSubmit}>
            <input className='form__input' ref={inputSearch} type="text" />
            <button className='form__button'>search</button>
        
        <SelectType
            setSelectValue={setSelectValue}
        />
    </form>
    </div>
    <div className='blackk'> 
    {
        pokemons?.results.filter(cbFilter).map(poke=>(
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
        ))
    }
     </div>
     </div>
  )
}

export default PokedexPage