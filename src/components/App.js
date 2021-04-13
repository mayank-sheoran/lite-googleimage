import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Loader from './Loader'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'
import '../css/App.css'
import '../css/SearchBar.css'
import '../css/loader.css'


class App extends React.Component {
    state = { 
        images : [],
        query : '',
        loaderShow : false
    };

    querySubmit = async (query) => {
        const response = await unsplash.get(
            '/search/photos',{
                params : {
                    query : query
                }
            }
        )
        this.setState({ query : query})
        this.setState({ images : [...response.data.results ]});
        this.setState({loaderShow : true})
        console.log(this.state.images)
    }

    render(){
        return (
            <div className="global_container">
                <div className = {`search_container ui container`}>
                    <SearchBar onSubmit = { this.querySubmit }/>
                </div>
                {!this.state.loaderShow && <Loader />}
                <div className = {`image_container ui container`}>
                    <ImageList images = {this.state.images}/>
                </div>
            </div>
        )
    }
    
}

export default App;