import style from './BreadCrumbs.module.css'
import {Link} from "react-router-dom";

export const BreadCrumbs = ({ currentPage, pageName }) => {

    return (
        <div className={style.breadCrumbs}>
            <div className="container">
                <ul className={style.breadCrumbsList}>
                    {
                        currentPage == '' || currentPage == '/'?               
                        <>

                            <li className={style.breadCrumbsItem}>                        
                                <Link to={'/'} className={style.breadCrumbsLink}>                          
                                        Главная
                                </Link>                                               
                            </li>
                            <li className={style.breadCrumbsItem}>                        
                                <Link to={'/'} className={style.breadCrumbsLink}>                          
                                        Фонды и коллекции
                                </Link>                                               
                            </li>
                        
                        </>
                        :
                        <>
                            <li className={style.breadCrumbsItem}>                        
                                <Link to={'/'} className={style.breadCrumbsLink}>                          
                                        Главная
                                </Link>                                               
                            </li>
                            <li className={style.breadCrumbsItem}>                        
                                <Link to={'/'} className={style.breadCrumbsLink}>                          
                                        Фонды и коллекции
                                </Link>                                               
                            </li>
                            
                            <li className={style.breadCrumbsItem}>
                                <Link to={currentPage} className={style.breadCrumbsLink}>                          
                                    {pageName}
                                </Link>                          
                            </li>
                        </>                   

                    }              
                </ul>
            </div>
                
        </div>
    );

}