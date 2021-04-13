import React from 'react'
import '../css/SearchBar.css'

class SearchBar extends React.Component {
    state = { query : ''}
    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.query);
        this.props.onSubmit(this.state.query)
    }
    render(){
        return(

            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
                    <div className="three fields">
                        <div className="field">
                            <i className="fa fa-google search_icon"></i>
                        </div>
                        <div className="field input_bar">
                            <input onChange={(e)=>this.setState({query : e.target.value})} value={this.state.query} type="text" placeholder="Search for Images ......"/>
                        </div>
                        <div className="fields submit_button">
                            <div onClick={(event) => this.props.onSubmit(this.state.query)} className="ui button">Search</div>
                        </div>
                    </div>
                </form>
            </div>
            
        );
    }
    
}

export default SearchBar