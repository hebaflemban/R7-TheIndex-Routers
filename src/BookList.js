import React, {useState} from 'react';
import { useParams } from "react-router-dom";


import SearchBar from "./SearchBar";
import BookTable from "./BookTable"

const BookList = props => {
    const [query, setQuery] = useState("");
    const{bookcolor} = useParams()

    let searchbooks = props.books
    searchbooks = (props.books.filter(book => book.title.toLowerCase().includes(query.toLowerCase())))

    if(bookcolor) 
    console.log('bookcolor', bookcolor)
        searchbooks = (props.books.filter(book => book.color.includes(bookcolor)))


    return(
        <div>
            <h3>Books</h3>
            <SearchBar handleFilter={setQuery} />
            <div><BookTable books={searchbooks}/></div>
        </div>
    )
}

export default BookList;

