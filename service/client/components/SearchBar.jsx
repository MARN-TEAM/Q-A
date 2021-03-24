import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            data: [{
            "question_id": 152891,
            "question_body": "how are you?",
            "question_date": "2021-03-07T00:00:00.000Z",
            "asker_name": "test1",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        },
        {
            "question_id": 152887,
            "question_body": "test?",
            "question_date": "2021-03-07T00:00:00.000Z",
            "asker_name": "test",
            "question_helpfulness": 0,
            "reported": false,
            "answers": {}
        }]

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSearch() {
        const newData = this.state.data.filter((finded) => finded.question_body === this.state.searchInput)
        this.setState({
            data: newData
      })
  }

    render() {
        return (
            <div className="mainstyle" >
            <p>QUESTIONS & ANSWERS</p>
            <div className="search-box">
                <input className="search-input" type="text" name="searchInput" placeholder="QUESTION LIST QUESTION & ANSWERS HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleChange} />
                    <button className="search-btn" onClick={(qu) => { this.handleSearch(qu) } }>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
    }
}
export default SearchBar;