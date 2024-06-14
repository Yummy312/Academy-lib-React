import style from './Sidebar.module.css'
export const Sidebar = ()=>{
    return(

            <div className={style.sidebar}>
                <div className={style.sidebarHeader}>
                    <div className={style.sidebarTitle}>
                        <h3>О Библиотеке</h3>
                    </div>
                </div>

                <div className={style.sidebarBody}>
                    <div className={style.box}>
                        <div className={style.columnItem}>
                                <img src="./internet.jpg" alt="internet" />
                                <span>Системы мобильной связи и радиодоступа</span>
                          
                        </div>
                        <div className={style.columnItem}>
                                <img src="./network-defence.jpg" alt="internet" />
                                <span>Информационная безопасность</span>
                          
                        </div>
                        <div className={style.columnItem}>
                                <img src="./connections.jpg" alt="internet" />
                                <span>Сети связи и системы коммутации</span>
                          
                        </div>

                        <div className={style.columnItem}>
                                <img src="./programm.jpg" alt="internet" />
                                <span>Программно-защищенные инфокоммуникации</span>
                          
                        </div>
                        
                    </div>
                
                </div>  
            </div>

    )
}
