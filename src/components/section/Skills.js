import styles from './Skills.module.css'
import javascript from '../../image/skills/js.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import typescript from '../../image/skills/ts.svg'
import React from 'react';
import {Link, Element, animateScroll as scroll} from 'react-scroll';

function Skills(){
    return (
        <Element name="Skills1"><div className={styles.skill} id="Skills">
        
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={typescript}/>
            </div>
        
       
    </div></Element>
    )
}

export default Skills