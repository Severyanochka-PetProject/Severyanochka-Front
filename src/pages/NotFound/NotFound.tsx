import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './notFound.scss'

export default function NotFound() {
    const navigation = useNavigate();

  return (
    <div className='page notfound-page'>
        <div className="notfound-page__content">
            <div className="notfound-page__banner">
                <img src="/images/NotFound.svg" alt="" />
            </div>
            <p className="notfound-page__text">Упс... Страница не найдена (Error: 404)</p>
            <p onClick={() => navigation(-1) } className="notfound-page__text notfound-page__link">Вернуться на главную ❯</p>
        </div>
    </div>
  )
}
