import style from './BookList.module.css';
import { Book } from './Book/Book';
import React, { useEffect, useState } from 'react';
import { bookSkeleton } from '../../../../data';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export const BookList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(5);
  const [loading, setLoading] = useState(true);

  let baseUrl = 'https://nurik9832.pythonanywhere.com';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nurik9832.pythonanywhere.com/books/');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setError(error);
        setTimeout(fetchData, 5000); // Повторяем попытку загрузки данных через 5 секунд
      }
    };

    fetchData();

    return () => {};
  }, []);

  const offset = currentPage * perPage;
  const currentPageData = data.slice(offset, offset + perPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (error) {
    return <div className={style.loading}>Ошибка: {error.message}</div>;
  }

  if (loading) {
    return <div className={style.loading}>Загрузка...</div>;
  }

  return (
    <div className={style.body}>
      {currentPageData.map((book) => (
        <Book title={book.title} img={baseUrl + book.image} description={book.description} key={book.id} />
      ))}

      <ReactPaginate
        pageCount={Math.ceil(data.length / perPage)} // Общее количество страниц
        pageRangeDisplayed={1} // Сколько кнопок показывать на панели
        marginPagesDisplayed={1} // Сколько крайних кнопок показывать на панели
        onPageChange={handlePageChange} // Обработчик смены страницы
        containerClassName={style.pagination} // CSS класс для контейнера
        activeClassName="active" // CSS класс для активной кнопки
        previousLabel={'Пред.'}
        nextLabel={'След.'}
        breakLabel={"..."}
      />
    </div>
  );
};
