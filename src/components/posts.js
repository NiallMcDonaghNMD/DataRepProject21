import React from 'react';
import { PostItem } from './postItem';
export class Posts extends React.Component {
    render() {
        return this.props.posts.map((post) => { //Shows the list of posts from the database, if they are any.

            return <PostItem post={post} ReloadData={this.props.ReloadData}></PostItem>

        });
    }
}
