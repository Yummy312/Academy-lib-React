import style from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import { Section } from './Section/Section';
import { page } from '../../../data';
import { Sidebar } from './Sidebar/Sidebar';
import { SectionList } from './SectionList/SectionList';
import { BookList } from './BookList/BookList';

export const Content = ()=>{
    return(
        <div className="container">
            <div className={style.content}>
                <div className={style.page}>
                    <Routes>
                    
                        <Route path='/' element ={<SectionList/>}/>

                        <Route path='/kyrgyz-fund-books' element ={<BookList/>}/>

                        <Route path='/literature-department' element ={<BookList/>}/>
                        
                        <Route path='/library-ADI' element ={<BookList/>}/>


                        <Route path="/archive-fund" element={
                            <Section 
                            title={page.archiveFund.title}
                            text={page.archiveFund.text}

                            />}
                        />                    
                        <Route path="/publication-fund" element={
                            <Section 
                            title={page.publicationFund.title}
                            text={page.publicationFund.text}
                            />}
                        />
                    </Routes>
                </div>

                <Sidebar/>
                
            </div>

        </div>
        
    )
}