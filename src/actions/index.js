export function selectBook(book) {
    //console.log(book.title + " has been selected");
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

// export default selectBook;