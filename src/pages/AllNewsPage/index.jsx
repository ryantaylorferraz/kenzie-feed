import React from 'react'
import styles from "./style.module.scss"
import { TemplateDefault } from '../../components/TemplateDefault'
import imgNews1 from "../../assets/imgNews/imgNews1.png"
import { Link } from 'react-router-dom'



export const AllNewsPage = () => {
  return (
    <TemplateDefault>
      <h1 className='title bold2' >Todas as notícias</h1>
      <div>
            <ul className={styles.ulNewsHome}>
                <li className={styles.liNews}>
                    <img src={imgNews1} alt="img new" />
                    <span className='smallParagraph'>Por: Roberto Silva</span>
                    <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                    <span className='link'><Link to="/newlist/news">Ler mais</Link></span>
                </li>
                <li className={styles.liNews}>
                    <img src={imgNews1} alt="img new" />
                    <span className='smallParagraph'>Por: Roberto Silva</span>
                    <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                    <span className='link'><Link to="/newlist/news" >Ler mais</Link></span>
                </li>
                <li className={styles.liNews}>
                    <img src={imgNews1} alt="img new" />
                    <span className='smallParagraph'>Por: Roberto Silva</span>
                    <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                    <span className='link'><Link to="/newlist/news">Ler mais</Link></span>
                </li>
                <li className={styles.liNews}>
                    <img src={imgNews1} alt="img new" />
                    <span className='smallParagraph'>Por: Roberto Silva</span>
                    <h3 className='title small'>5 lugares para viajar nas proximas ferias</h3>
                    <span className='link'><Link to="/newlist/news">Ler mais</Link></span>
                </li>
            </ul>
        </div>

    </TemplateDefault>
  )
}
