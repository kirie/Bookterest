import React from 'react';

const cardDisplay = (props) => {
  function renderCard(eachBook, idx) {
    const NO_IMG = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
    const id = eachBook.id;
    const title = eachBook.volumeInfo.title;
    const authors = eachBook.volumeInfo.authors ?
      eachBook.volumeInfo.authors.reduce((author1, author2) => {
        return `${author1}, ${author2}`;
      }) : 'Unknown Author';
    const description = eachBook.searchInfo ? eachBook.searchInfo.textSnippet : 'No Description found';
    const thumbnail = eachBook.volumeInfo.imageLinks ? eachBook.volumeInfo.imageLinks.thumbnail : NO_IMG;
    const webreaderlink = eachBook.accessInfo.webReaderLink ? eachBook.accessInfo.webReaderLink : '//:0';
    const indx = idx;

    return(
      <div className="card" key={id}>
        <button className="btn btn-secondary pinbutton" value={indx} onClick={event => props.funcToCards(event.target.value)}>
          <i className={props.iconButton} /> {props.textButton}
        </button>
        <img className="card-img-top" src={thumbnail} />
          <div className="card-block">
            <h5 className="card-title">{title}</h5>
            <h6>{authors}</h6>
            <p className="card-text">
              <small>
                {description}
              </small>
            </p>
            <a href={webreaderlink} target="_blank" rel="noopener noreferrer"><button className="btn btn-secondary viewbutton">View</button></a>
          </div>
      </div>
    );
  }

  return (
    <div className="card-columns">
      {props.booksToCards.map(renderCard, this)}
    </div>
  );
};

export default cardDisplay;
