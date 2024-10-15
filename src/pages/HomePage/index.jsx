import React from 'react'
import kenzieFeed from "../../assets/kenzieFeed.png"
import styles from "./style.module.scss"
import imgHomePage from "../../assets/imgHomePage.png"
import { SectionHomePage } from '../../components/Sections/SectionHomePage'
import { TemplateDefault } from '../../components/TemplateDefault'


export const HomePage = () => {
  return (
    <TemplateDefault>
      <main className={styles.mainContainer}>
        <div className={styles.divHome}>
          <span><img src={kenzieFeed} alt="" /></span>
          <h1 className='title bold'> Seja muito bem vindo ao KenzieFeed</h1>
          <p className='paragraph mobile'>Fique por dentro das últimas notícias</p>
          <img className={styles.imgHomePage} src={imgHomePage} alt="img notebook e xícara" />
        </div>

        <SectionHomePage />

      </main>
    </TemplateDefault>
  )
}
