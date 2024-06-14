import style from './Header.module.css'
export const Header = ()=>{
    return(
        <div className={style.header}>
            <div className="container">
                <div className={style.headerTop}>
                    <div className={style.headerLogo}>
                        <img className={style.headerLogoImg} src="./Logo_DIAcademy8.png" alt="Logo_DIAcademy8"/>
                        <div className={style.headerLogoText}>
                            <span className={style.headerLogoTextItem}>АЦИ</span>
                            <span className={style.headerLogoTextItem}>
                                Бибилиотечный фонд академии Цифровых Инноваций
                            </span>
                        </div>
                    </div>

                    <div className={style.headerInfo}>
                        <img className={style.headerInfoImg}  src="./phone-icon.svg" alt="phone-icon"/>
                        <div className={style.headerInfoNums}>
                            <a href="mailto:+996312304675" className={style.headerInfoNumsItem}>
                                Тел.: +996 (312) 30-46-75
                            </a>
                            <a href="mailto:+996312304675" className={style.headerInfoNumsItem}>
                                Тел.: +996 (312) 30-46-75
                            </a>
                        </div>
                        <div className={style.searchBox}>
                            <input type="text" className={style.headerInfoSearch} placeholder="Поиск по сайту..."/>
                            <img className={style.searchIcon} src="./search-icon.svg" alt="search-icon"/>
                        </div>
                        
                    </div>

                </div>
            </div>
                 
            <div className={style.headerBottom}>
                    <div className="container">
                        <ul className={style.headerNav}>
                            <li className={style.dropDown}>
                                <a href="#" className={style.headerNavItemLink}>О библиотеке</a>
                                <img src="./arrow-bottom.svg" alt="arrow-bottom" className={style.arrowBottom}/>
                            </li>
                            <li className={style.dropDown}>
                                <a href="#" className={style.headerNavItemLink}>Читателям</a>
                                <img src="./arrow-bottom.svg" alt="arrow-bottom" className={style.arrowBottom}/>
                            </li>
                            <li className={style.dropDown}>
                                <a href="#" className={style.headerNavItemLink}>Библиотекарям</a>
                                <img src="./arrow-bottom.svg" alt="arrow-bottom" className={style.arrowBottom}/>
                            </li>
                            <li className={style.dropDown}>
                                <a href="#" className={style.headerNavItemLink}>Пресс центр</a>
                                <img src="./arrow-bottom.svg" alt="arrow-bottom" className={style.arrowBottom}/>
                            </li>
                            <li className={style.headerNavItem}>
                                <a href="#" className={style.headerNavItemLink}>Электронная библиотека</a>
                            </li>
                            <li className={style.headerNavItem}>
                                <a href="#" className={style.headerNavItemLink}>Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        
    )
}
