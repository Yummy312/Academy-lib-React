import style from './Main.module.css'
import { Content } from './Content/Content'
import {Route, Routes} from "react-router-dom";
import { BreadCrumbs } from './BreadCrumbs/BreadCrumbs';
import { page } from '../../data';
export const Main = ()=>{
    return(
        <main className={style.main}>
            
            <Routes>
                <Route path="/" element={
                    <BreadCrumbs 
                     currentPage={"/"}
                    />
                }/>
                <Route path="/archive-fund" element={
                    <BreadCrumbs 
                    currentPage={"/archive-fund"}
                    pageName={page.archiveFund.title}
                    />
                }/>

                 <Route path="/publication-fund" element={
                    <BreadCrumbs 
                    currentPage={"/publication-fund"}
                    pageName={page.publicationFund.title}
                    />
                }/>
                <Route path="/kyrgyz-fund-books" element={
                    <BreadCrumbs 
                    currentPage={"/kyrgyz-fund-books"}
                    pageName={"Фонд Кыргыз китеби"}
                    />
                }/>

                <Route path="/literature-department" element={
                    <BreadCrumbs 
                    currentPage={"/literature-department"}
                    pageName={"Отдел Литературы"}
                    />
                }/>

                <Route path="/library-ADI" element={
                    <BreadCrumbs 
                    currentPage={"/library-ADI"}
                    pageName={"Библиотека АЦИ"}
                    />
                }/>


            </Routes>

        
            <Content/>
        </main>
    )
}

