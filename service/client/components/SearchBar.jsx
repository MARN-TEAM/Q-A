import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            data: []

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
//        finding(str) {
//       const newData = this.state.data.filter((finded) => finded.name.search(str) >= 0)
//       this.setState({
//         data: newData
//       })
//   }
// <button onChange={(e) => {this.props.finding(this.state.name,e)}}>Search</button>


    render() {
        return (
            <div className="mainstyle" >
            <p>QUESTIONS & ANSWERS</p>
            <div className="search-box">
                <input className="search-input" type="text" name="searchInput" placeholder="QUESTION LIST QUESTION & ANSWERS HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleChange} />
                    <button className="search-btn" onClick={() => { this.handleSearch()}}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
    }
}
export default SearchBar;