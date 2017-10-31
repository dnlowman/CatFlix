import React from 'react';
import Post from './Post';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './App.css';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: [],
            username: '',
            status: '',
            imageUrl: '',
            avatarUrl: ''
        };
    }

    componentDidMount() {
        fetch('/api/Post').then(result => {
            result.json().then(json => {
                json = json.map(json => {
                    return {
                        ...json,
                        CreatedAt: new Date(json.CreatedAt)
                    };
                });

                this.setState({
                    ...this.state,
                    posts: json
                });
            });
        });
    }

    onDeleteClicked = id => {
        fetch(`http://localhost:54405/api/Post/${id}`, { method: 'DELETE' }).then(result => {
            result.json().then(json => {
                this.setState({
                    ...this.state,
                    posts: this.state.posts.filter(post => post.Id !== id)
                });
            });
        });
    };

    onUsernameChanged = event => {
        this.setState({
            ...this.state,
            username: event.target.value
        });
    };

    onStatusChanged = event => {
        this.setState({
            ...this.state,
            status: event.target.value
        });
    };

    onImageURLChanged = event => {
        this.setState({
            ...this.state,
            imageUrl: event.target.value
        });
    };

    onAvatarURLChanged = event => {
        this.setState({
            ...this.state,
            avatarUrl: event.target.value
        });
    };

    onSubmitClicked = id => {
        const post = {
            Username: this.state.username,
            CreatedAt: new Date(Date.now()),
            Status: this.state.status,
            ImageUrl: this.state.imageUrl,
            AvatarUrl: this.state.avatarUrl
        };

        console.log(post.CreatedAt);

        const body = JSON.stringify(post);
        fetch(`http://localhost:54405/api/Post`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body }).then(result => {
            this.state.posts.push(post);
            this.setState({
                ...this.state,
                username: '',
                status: '',
                imageUrl: '',
                avatarUrl: ''
            });
        });
    };


    render() {

        const posts = [];

        const sortedPosts = this.state.posts.sort((a, b) => {
            if (a.CreatedAt > b.CreatedAt) {
                return -1;
              }
            if (a.CreatedAt < b.CreatedAt) {
                return 1;
              }
              // a must be equal to b
              return 0;

        });

        sortedPosts.forEach(post => {
            posts.push(<Post key={post.Id} id={post.Id} userName={post.Username} imageUrl={post.ImageUrl} likes="1" onDeleteClicked={this.onDeleteClicked} />);
        })

        return (
            <div className="postContainer">
                <Form>
                  <Form.Field>
                    <label>Username:</label>
                    <input placeholder='Kavita' value={this.state.username} onChange={this.onUsernameChanged} />
                  </Form.Field>
                  <Form.Field>
                    <label>Status:</label>
                    <input placeholder='Eating Lunch' value={this.state.status} onChange={this.onStatusChanged} />
                  </Form.Field>
                  <Form.Field>
                    <label>Image URL:</label>
                    <input placeholder='http://example.com/my-image.jpeg' value={this.state.imageUrl} onChange={this.onImageURLChanged} />
                  </Form.Field>
                  <Form.Field>
                    <label>Avatar URL:</label>
                    <input placeholder='http://example.com/my-image.jpeg' value={this.state.avatarUrl} onChange={this.onAvatarURLChanged} />
                  </Form.Field>
                  <Button disabled={!this.state.username || !this.state.imageUrl} type='submit' icon onClick={this.onSubmitClicked}>
                    Submit
                  </Button>
                </Form>
                {posts}
            </div>
        );
    }
}

export default App;
