import React from 'react'


class ImageCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {span : 0};
        this.ImageRef = React.createRef();
        console.log('image card updated')
    }

    setSpan = () => {
        const height = this.ImageRef.current.clientHeight;
        const span = Math.ceil(height / 10);
        console.log(span,'span')
        this.setState( {span : span } );
    }

    componentDidUpdate(){
        console.log(this.ImageRef);
        this.ImageRef.current.addEventListener('load', this.setSpan);
    }
    
    render(){
        const {urls,id} = this.props.image
        return(
            <div style={{ gridRowEnd : `span ${this.state.span}` }} key={id}>
                <img ref={this.ImageRef} src={urls.regular} key={id}/>
            </div>
        )
    }
}


export default ImageCard