import React, {useState ,useEffect} from 'react'
import axios from 'axios';

const SearchBar = () => {
    const [search, setSearch] = useState("")
    const [submit, setSubmit] = useState("")

    const handleChange = (e) => setSearch({ [e.target.name]: e.target.value })
    const handleClick = () => setSubmit()
    return (
        <div>
            <p>QUESTIONS & ANSWERS</p>
            <div className="search-box">
                <input className="search-input" type="text" name="search" placeholder="QUESTION LIST QUESTION & ANSWERS HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleChange} />
                <button className="search-btn" onClick={ handleClick }>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
} 
export default SearchBar;