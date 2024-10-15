import React from 'react'
import styles from "./style.module.scss"
import { TemplateDefault } from '../../components/TemplateDefault'
import { SectionRegisterPage } from '../../components/Sections/SectionRegisterPage'


export const RegisterPage = () => {
  return (
    <TemplateDefault>
        <SectionRegisterPage />
    </TemplateDefault>
  )
}
