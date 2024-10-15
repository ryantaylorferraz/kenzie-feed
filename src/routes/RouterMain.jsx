import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { AllNewsPage } from '../pages/AllNewsPage'
import { NewsPage } from '../pages/NewsPage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const RouterMain = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/newlist' element={<AllNewsPage />}/>
        <Route path="/newlist/news" element={<NewsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

    </Routes>

  )
}
