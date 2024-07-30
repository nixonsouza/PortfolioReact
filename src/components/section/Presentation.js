import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'
import React from 'react';
import {Link, Element, animateScroll as scroll} from 'react-scroll';
import { useState, useEffect } from 'react'

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['eu sou Nixon Souza!', 'eu sou Desenvolvedor Full Stack', 'eu sou Analista de Sistemas', 'eu sou Engenheiro de Software'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(100);

    useEffect(() =>{
        let timer = setInterval(()=>{
            toType()
        }, delta)
        return() => {clearInterval(timer)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);
        
        setText(updateText);

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(50);
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setDelta(100);
            setLoop(loop +1);
        }
    }
    return (
        <Element name="Presentation1"><div className={styles.presentation} id="Presentation">
       
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, {text}</h1>
            <p>
                Sou apaixonado por tecnologia, sempre atento as inovações tecnológicas <br/>
                para aprimorar minhas habilidades e agregar novos conhecimentos. <br/>
                Como Desenvolvedor, encaro cada projeto como uma oportunidade <br/>
                de crescimento. Vamos juntos transformar ideias em realidade <br/>
                e criar juntos soluções inovadoras?!
            </p>
            <ButtonA link='https://www.linkedin.com/in/nixon-souza/' text='Conecte-se comigo!!'/>

    </div> </Element>
    )
}

export default Presentation