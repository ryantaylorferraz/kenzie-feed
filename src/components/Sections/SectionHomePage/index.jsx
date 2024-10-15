import React from 'react'
import { Button } from '../../buttons'
import styles from "./style.module.scss"
import imgNews1 from "../../../assets/imgNews/imgNews1.png"
import { Link } from 'react-router-dom'


export const SectionHomePage = () => {
  return (
    <section className={styles.sectionContainer}>
        <div className={styles.divHome}>
            <h2 className='title bold2'>Últimas notícias</h2>
            <Link to="/newlist" ><Button className="btn small">Ver tudo</Button> </Link>
        </div>

        <div>
            <ul className={styles.ulNewsHome}>
                <li className={styles.liNews}>
                    <img src={imgNews1} alt="img new" />
                    <span className='smallParagraph'>Por: Roberto Silva</span>
                    <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                    <span className='link'>Ler mais</span>
                </li>
                <li className={styles.liNews}>
                    <img src={imgNews1} alt="img new" />
                    <span className='smallParagraph'>Por: Roberto Silva</span>
                    <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                    <span className='link'>Ler mais</span>
                </li>
                <li className={styles.liNews}>
                    <img src={imgNews1} alt="img new" />
                    <span className='smallParagraph'>Por: Roberto Silva</span>
                    <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                    <span className='link'>Ler mais</span>
                </li>
                <li className={styles.liNews}>
                    <img src={imgNews1} alt="img new" />
                    <span className='smallParagraph'>Por: Roberto Silva</span>
                    <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                    <span className='link'>Ler mais</span>
                </li>
            </ul>
        </div>

    </section>
  )
}
