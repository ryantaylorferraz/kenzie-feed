import React from 'react'
import styles from "./style.module.scss"
import imgHeader from "../../assets/imgHeader.png"
import { Button } from '../buttons'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <div>
          <Link to="/"><img src={imgHeader} alt="" /></Link>
        </div>
        <div>
          <Link to="/login"><Button className="btn small">Acessar</Button></Link>
        </div>
    </header>
  )
}
