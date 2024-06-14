import style from './SectionList.module.css'
import {Link} from "react-router-dom";

export const SectionList = ()=>{
    return(
        <section className={style.body}>
             <div className={style.pageTitleWrapper}>
                    <h1 className={style.pageTitle}>Фонды и коллекции</h1>
             </div>
             <nav className={style.fondNav}>
                <ul className={style.fondNavList}>
                    <li className={style.fondNavItem}>
                        <img className={style.fondNavItemImg} src="./arrow-right.png" alt="arrow-right" />
                        <Link className={style.fondNavItemLink} to='/kyrgyz-fund-books'>Фонд Кыргыз Китеби</Link>

                    </li>
                    <li className={style.fondNavItem}>
                        <img className={style.fondNavItemImg} src="./arrow-right.png" alt="arrow-right" />
                        <Link className={style.fondNavItemLink} to='/library-ADI'>Библиотека АЦИ</Link>

                    </li>
                    <li className={style.fondNavItem}>
                        <img className={style.fondNavItemImg} src="./arrow-right.png" alt="arrow-right" />
                        <Link className={style.fondNavItemLink} to='/literature-department'>Отдел Литературы</Link>

                    </li>
                    <li className={style.fondNavItem}>
                        <img className={style.fondNavItemImg} src="./arrow-right.png" alt="arrow-right" />
                        <Link className={style.fondNavItemLink} to='/publication-fund'>Фонд редких и особо ценных изданий</Link>

                    </li>
                    <li className={style.fondNavItem}>
                        <img className={style.fondNavItemImg} src="./arrow-right.png" alt="arrow-right" />
                        <Link className={style.fondNavItemLink} to='/archive-fund'>Архивный фонд</Link>
                    </li>
                    
                </ul>
             </nav>
        </section>
    )
}