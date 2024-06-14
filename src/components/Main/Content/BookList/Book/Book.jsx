import style from './Book.module.css'

export const Book = ({img, title, description})=>{
    return(
        <>
        <div className={style.bookBody}>
            <img src={img} alt={title} className={style.bookImg}/>
            <div className={style.bookContent}>
                <h4 className={style.bookTitle}>
                    {title}
                </h4>
                <p className={style.bookDescription}>
                    {description}
            
                </p>
            </div>
        </div>
        </>
    )
}