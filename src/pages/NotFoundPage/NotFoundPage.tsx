import React from 'react'
import { useNavigate } from 'react-router-dom'

import './notFoundPage.scss'

export default function NotFoundPage() {
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
