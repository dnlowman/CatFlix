import React from 'react';
import './App.css';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('/api/Post').then(result => {
            result.json().then(json => {
                this.setState({
                    posts: json
                });
            });



        });
    }

    render() {

        const posts = [];

        this.state.posts.forEach(post => {
            posts.push(<Post key={post.Id} userName={post.Username} imageUrl={post.ImageUrl} likes="1" />);
        })

        return (
            <div>
                {posts}
            </div>
        );
    }
}

const Post = ({ imageUrl, userName, likes }) => (
    <div className="post">
        <div className="headerContainer">
            <h1>{userName}</h1>
            <p>Likes: {likes}</p>
        </div>
        <img className="cat-img" src={imageUrl} alt="Cat!"></img>
    </div>
);

export default App;
