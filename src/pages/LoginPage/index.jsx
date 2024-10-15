import React from 'react'
import styles from "./style.module.scss"
import { TemplateDefault } from '../../components/TemplateDefault'
import imgHomePage from "../../assets/imgHomePage.png"
import { Button } from '../../components/buttons'
import { Link } from 'react-router-dom'
import { SectionLogin } from '../../components/Sections/SectionLogin'


export const LoginPage = () => {
  return (
    <TemplateDefault>
      <main className={styles.main}>
        <SectionLogin />
      </main>
    </TemplateDefault>
  )
}
