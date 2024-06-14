import style from './Section.module.css'
import {Route, Routes} from "react-router-dom";
import { BreadCrumbs } from '../../BreadCrumbs/BreadCrumbs';
export const Section = ({title, text, currentPage})=>{

    return(
        <>       
            <section className={style.body}>
                <div className={style.pageTitleWrapper}>
                    <h1 className={style.pageTitle}>{title}</h1>
                </div>
                <div className={style.pageContent}>
                    {text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <div className={style.socialNetworks}>
                        <a href="#">
                            <img className={style.socialNetwork} src="./Vk.svg" alt="svg" />
                        </a>
                        <a href="#">
                            <img className={style.socialNetwork} src="./odnoclassniki.svg" alt="odnoclassniki" />
                        </a>
                        <a href="#">
                            <img className={style.socialNetwork} src="./pinterest.svg" alt="pinterest" />
                        </a>
                        <a href="#">
                            <img className={style.socialNetwork} src="./Viber.svg" alt="Viber" />

                        </a>
                        <a href="#">
                            <img className={style.socialNetwork} src="./whatsapp.svg" alt="whatsapp" />
                        </a>
                        <a href="#">
                            <img className={style.socialNetwork} src="./skype.svg" alt="skype" />
                        </a>
                        <a href="#">
                            <img className={style.socialNetwork} src="./tg.svg" alt="tg" />
                        </a>
                    </div>
                </div>
            </section>
        </>


    )
}

