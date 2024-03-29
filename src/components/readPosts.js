import React, { Component } from 'react';
import { Posts } from './posts';
import axios from 'axios';

export class ReadPosts extends Component {
    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/posts')
            .then((response) => {
                this.setState({ posts: response.data }) //Got rid of posts aspect as it is looking for DATA not specifically post
            })
            .catch((error) => { console.log(error) });
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/posts')
            .then((response) => {
                this.setState({ posts: response.data }) //Got rid of posts aspect as it is looking for DATA not specifically post
            })
            .catch((error) => { console.log(error) });
    }
    state =
        {
            posts: []
        };

    render() {
        return (
            <div>
                <br></br>
                <Posts posts={this.state.posts} ReloadData = {this.ReloadData}></Posts> {/*Pass component/method down */}
            </div>

        );
    }
}
