import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class PostItem extends React.Component {

    constructor() {
        super();
        this.deletePost = this.deletePost.bind(this); //must bind Delete Movie to use lower sections of code.
    }

    deletePost(e) {
        e.preventDefault(); //only make DeletePost run ONCE.
        if (window.confirm("Are you sure you wish to delete this post?")) {

            console.log("Delete: " + this.props.post._id);
            //Goes to link to remove selected movie
            axios.delete("http://localhost:4000/api/posts/" + this.props.post._id)
                .then(() => {
                    this.props.ReloadData();
                })
                .catch();
        }
    }



    render() {
        return (
            <div class="card">
        
                <Card>
                    <Card.Header as="h5">Author: {this.props.post.postName}</Card.Header>
                    <Card.Body>
                        <Card.Title>Date Posted: {this.props.post.postDate}</Card.Title>
                        <Card.Text>
                            Essay: {this.props.post.postEssay}
                        </Card.Text>
                        <Button variant="danger" className='btn btn-outline-dark' onClick={this.deletePost}>Delete Post</Button>
                        <Link to={"/edit/" + this.props.post._id} className='btn btn-primary'>Edit</Link>  {/*When clicked move to this post */}

                    </Card.Body>
                </Card>
            </div>
        );
    }
}
