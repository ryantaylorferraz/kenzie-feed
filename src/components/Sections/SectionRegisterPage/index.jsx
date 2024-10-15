import React from 'react'
import { Button } from '../../buttons'
import { IoArrowBack } from "react-icons/io5";
import styles from "./style.module.scss"
import { Input } from '../../Form/Input';
import { Link } from 'react-router-dom';

export const SectionRegisterPage = () => {
    return (
        <section className={styles.sectionContainer}>
            <Button><Link className={styles.linkBack} to="/login" ><IoArrowBack /> voltar</Link></Button>
            <div className={styles.divRegister}>
                <h1 className='title bold2 '>Cadastre um usuário</h1>
                <p>Preencha os campos corretamente para fazer login</p>
                <form className={styles.form}>
                    <div className={styles.divForm}>
                        <Input type="text" placeholder="Nome" />
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Senha" />
                        <Input type="password" placeholder="Confirmar senha" />
                    </div>
                    <Button className="btn mediumRegister">Cadastre-se</Button>
                </form>
            </div>
        </section>
    )
}
