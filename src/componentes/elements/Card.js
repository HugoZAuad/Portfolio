import styles from './Card.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Card({img,title,tech,description,repo,site}){

    const [info,setInfo] = useState(false)

    function InfoON(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className={styles.card}>
            <a onMouseEnter={InfoON} href={site}>
                <img src={img} alt="error"/>
            </a>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia:</strong> {tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse o meu repositorio' link={repo}/>
                </section>
            )}


        </div>
    )
}

export default Card