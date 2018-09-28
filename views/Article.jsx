
import React from 'react';


class Article extends React.Component {

    render(){
        return(
            <div>{this.props.params.article}</div>
        )
    }
}

export default Article;