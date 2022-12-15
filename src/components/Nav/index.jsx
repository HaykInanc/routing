import React from 'react'
import s from './style.module.sass'
import { Link, NavLink } from 'react-router-dom';

export default function index() {
  const check_class = ({isActive}) => isActive ? s.active : '';

  return (
    <nav className={s.nav}>
        <NavLink className={check_class} to="/">Главная страница</NavLink>
        <NavLink className={check_class} to="/about">О нас</NavLink>
        <NavLink className={check_class} to="/сategories">Категории продуктов</NavLink>
    </nav>
  )
}
