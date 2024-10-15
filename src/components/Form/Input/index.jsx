import React, { forwardRef } from 'react'
import styles from "./style.module.scss"

export const Input = forwardRef(({error, ...rest}, ref) => {
  return (
    <>
        <input className={styles.input} ref={ref} {...rest} />
    </>
  )
});
