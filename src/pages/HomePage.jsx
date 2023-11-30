import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../components/styles/HomePage.css'

const HomePage = () => {

    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('pokedex')
    }

  return (
    <div className='app'>
      <div className='app'>
        <img className='app__logo' src="pokedex.png" alt="" />
        <h2 className='app__title-second'> hi trainer!</h2>
        <p className='app__title-tree'>to start,please give me your trainer name</p>
        <form className='app__form' onSubmit={handleSubmit}>
            <input className='app__input' ref={inputName} type="text" />
            <button className='app__button'>Ready?</button>
        </form>
        </div>
    </div>
  )
}

export default HomePage