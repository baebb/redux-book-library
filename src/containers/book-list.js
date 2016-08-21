import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends React.Component {
    renderList() {
    this.props.books.map((book) => {
        return (
            <li key={book.title} className="list-group-item">{book.title}</li>
        )
    })
}

    render () {
        return(
            <ul className="list-group col-sm-4">
                {/*{this.renderList()} this didn't work!!!*/}
                {this.props.books.map((book) => {
                    return (
                        <li
                            onClick={() => this.props.selectBook(book)}
                            key={book.title}
                            className="list-group-item">
                            {book.title}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //turns app state in props inside BookList
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);