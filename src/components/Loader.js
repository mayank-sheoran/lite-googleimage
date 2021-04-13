import React from 'react'

export default () => {
    return (
        <div className = {`load_container`}>
            <div className="ui segment">
                <div className="ui active dimmer loadsize">
                    <div className="ui mini text loader massive">Waiting For Input ...</div>
                </div>
                <p></p>
            </div>
        </div> 
    ); 
}

