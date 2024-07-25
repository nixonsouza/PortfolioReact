import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img, title, tech, description, rep, site}){
    return(
        <div className={styles.card}>
            <a href={site}>
                <img src={img}/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia</strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={rep}/>
            </section>
        </div>
    )
}

export default Card