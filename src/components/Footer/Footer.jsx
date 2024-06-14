import style from './Footer.module.css'

export const Footer = ()=>{
    return(
        <div className={style.footer}>
            <div className={style.footerTop}>
                <div className="container">
                    <div className={style.footerRow}>                       
                        <div className={`${style.footerCol} ${style.col}`}>
                            <div className={style.colTitle}>
                                О библиотеке

                            </div>
                            <div className={style.colBody}>
                                <ul className={style.colList}>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            История Библиотеки
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            История Библиотеки
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Законодательно-нормативная база  
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Структура библиотеки
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Фонды и коллекции
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Каталоги
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${style.footerCol} ${style.col} ${style.colNoTitle}`}>
                            <div className={style.colBody}>
                                <ul className={style.colList}>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Отделы библиотеки
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                                Площадки
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                                Проекты  
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Научно-издательская деятельность
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Партнеры
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${style.footerCol} ${style.col}`}>
                            <div className={style.colTitle}>
                                Читателям

                            </div>
                            <div className={style.colBody}>
                                <ul className={style.colList}>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Как записаться
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            График работы
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Правила пользования  
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Читальные залы
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Услуги
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Электронные базы данных
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Вопросы и ответы
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Экскурсии
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> 

                        <div className={`${style.footerCol} ${style.col}`}>
                            <div className={style.colTitle}>
                                 Информация

                            </div>
                            <div className={style.colBody}>
                                <ul className={style.colList}>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Афиша мероприятий
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Новости 
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            СМИ о нас  
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Дистанционное образование
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Новые поступления
                                        </a>
                                    </li>
                                    <li className={style.colItem}>
                                        <a href="#" className={style.colLink}>
                                            Контакты
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${style.footerCol} ${style.col}`}>
                            <div className={style.colTitle}>
                                Контакты АЦИ

                            </div>
                            <div className={style.colBody}>
                                <ul className={style.colList}>
                                    <li className={`${style.colItem} ${style.colItemWithIcon}`}>
                                        <img src="./location.svg" alt="location" />
                                        <a href="" className={style.colLink}>
                                            Кыргызская Республика, г. Бишкек, ул. Ахунбаева 199
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className={style.footerBottom}>
                <div className="container">
                    <div className={style.footerInfo}>
                        <p>
                            Библиотечный фонд Цифровых Инноваций <br/>
                            © 2010-2024 Все права защищены
                        </p>
                        <ul className={style.footerSocialList}>
                            <li className={style.footerSocialItem}>
                                <a href="#" className={style.footerSocialLink}>
                                    <img className={style.footerSocialImg} src="./facebook.svg" alt="facebook" />
                                </a>
                                <a href="#" className={style.footerSocialLink}>
                                    <img className={style.footerSocialImg} src="./instagram.svg" alt="instagram" />
                                </a>
                            </li>
                        </ul>                       
                    </div>
                    <img className={style.footerBottomImg} src="./network.svg" alt="network" />
                </div>
            </div>

        </div>
    )
}
