import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'

function Presentation(){
    return (
    <div className={styles.presentation} id="Presentation">
        <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
        <h1>Olá, eu sou Nixon!</h1>
        <p>
            Sou apaixonado por tecnologia, sempre atento as inovações tecnológicas <br/>
            para aprimorar minhas habilidades e agregar novos conhecimentos. <br/>
            Como Desenvolvedor, encaro cada projeto como uma oportunidade <br/>
            de crescimento. Vamos juntos transformar ideias em realidade <br/>
            e criar juntos soluções inovadoras?!
        </p>
        <ButtonA link='https://github.com/nixonsouza' text='Conecte-se comigo!!'/>
    </div>
    )
}

export default Presentation