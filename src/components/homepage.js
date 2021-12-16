import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel' //import carousel
import Card from 'react-bootstrap/Card';

class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                {/* //Normally due to how the tree structure of React works you can only return one element, 
                this gives you a root node that allows you to do multiple elements */}
                {/* //Carousel displays images on the homepage */}
                <div>
                    <h2>Welcome to Essay Haven!</h2>
                </div>
                <div class="center">
                    <div>

                        <Card>
                            <Card.Body>
                                <Carousel > {/*Showing images which rotate */}
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-5 p-1" //Formatting
                                            src="https://images.squarespace-cdn.com/content/v1/589b7c3946c3c43e71916cfd/1562701284947-LFF3JF90VDJ44GDRD46U/Untitled+design+%282%29.jpg?format=1000w"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-5"
                                            src="https://www.totalassignmenthelp.com/uploads/write-my-essay-01.png"
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-5"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4EOJrnboMI0kHexucO3-Z5bFjzCq_zAZNw&usqp=CAU"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div>
                    <h2>To get started, use the navigation bar at the top of the page to create your Essay!</h2>
                </div>

            </React.Fragment>
        );
    }
}
export default Homepage;