import React from 'react'
import styles from "./style.module.scss"
import imgHomePage from "../../../assets/imgHomePage.png"
import { Button } from '../../buttons'
import { Link } from 'react-router-dom'
import { Input } from '../../Form/Input'


export const SectionLogin = () => {
  return (
    <section className={styles.sectionContainer}>
          <div className={styles.divImgLogin}>
            <img src={imgHomePage} alt="" />
          </div>
          <div className={styles.divForm}>
            <h1 className='title bold2' >Acesse o KenzieFeed</h1>
            <p className='smallParagraph'>Preencha os campos corretamente para fazer login</p>
            <form className={styles.form}>
              <Input type="email" placeholder='E-mail' />
              <Input type="password" placeholder='Senha' />
              <Button className="btn medium">Entrar</Button>
            </form>
            <div className={styles.divRegister}>
                <p className='paragraph'>Não é cadastrado?</p>
                <Link to="/register" ><span className='link'>Cadastre-se</span></Link>
            </div>
            
          </div>
        </section>
  )
}
