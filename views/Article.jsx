
import React from 'react';


class Article extends React.Component {

    render(){
        return(
            <div>{this.props.match.params.article}</div>
        )
    }
}

export default Article;