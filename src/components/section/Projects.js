import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import weather from '../../image/projects/weather.svg'
import portfolio from '../../image/projects/portfolio.svg'

function Projects(){
    return (
    <div className={styles.projects} id="Projects">
        <h1>Projetos</h1>
        <Card 
            img={weather}
            title="DNC WEATHER"
            tech= " - (HTML / CSS / JAVASCRIPT)"
            description=" Desenvolvimento de uma tela funcional com consumo de API"
            rep='https://github.com/nixonsouza/DesafioBase-DNCweather'
            site='https://desafiobasedncweather.netlify.app/'
        />
        <Card
            img={portfolio}
            title="Portfolio React"
            tech=" - React"
            description="Desenvolvimento de portfolio com React"
            rep=''
            site=''
        />
        <div id='btnB'>
        <ButtonB text='Ver repositório completo' link='https://github.com/nixonsouza/DesafioBase-DNCweather?tab=readme-ov-file'/>
        </div>
        
    </div>
    )
}

export default Projects