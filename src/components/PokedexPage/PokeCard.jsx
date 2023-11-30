import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import '../../components/styles/PodeCard.css'

const PokeCard = ({ url }) => {

    const [infoPoke, getInfoPoke] = useFetch(url)

    useEffect(() => {
        getInfoPoke()
    }, [])
    console.log(infoPoke);

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(`/pokedex/${infoPoke?.id}`)
    }

    return (
       <div className='divv'>
        <article className='article'onClick={handleNavigate}>
            <header className='article__header'>
                <img className='article__img'src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
            <section className='article__sec'>
                <h3 className='article__h' >{infoPoke?.name}</h3>

                <ul className='article__ul'>
                    {
                        infoPoke?.types.map(infoType => (
                            <li className='article__li'key={infoType.type.url}>{infoType.type.name}</li>
                        ))
                    }
                </ul>
                <hr className="article__hr"/>
                <ul className='article__ul'>
                    {
                        infoPoke?.stats.map(infoStat => (
                            <li className='article__li'key={infoStat.stat.url}>
                            <span className='article__span'>{infoStat.stat.name}</span>
                        
                            <span className='article__span'>{infoStat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
        </div>
    )

}
export default PokeCard