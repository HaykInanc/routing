import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <p>Страница не найдена</p>
      <p>Перейдите на <Link to='/'>домашнюю страницу</Link></p>
    </div>
  )
}