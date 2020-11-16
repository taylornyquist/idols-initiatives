import React, { useEffect } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useDispatch, useSelector } from 'react-redux';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { categories } = state;
    // console.log(categories);
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    // this will eventually need to be moved to the server side seed
    // const categories = [
    //     {
    //         name: 'All Idols',
    //         id: 0
    //     },
    //     {
    //         name: 'Athletes',
    //         id: 1
    //     },
    //     {
    //         name: 'Musicians',
    //         id: 2
    //     },
    //     {
    //         name: 'Entrepreneurs',
    //         id: 3
    //     }
    // ];

    // faking the data: categoryData query from the server
    // const categoryData = {
    //     categories: ['All Idols', 'Athletes', 'Musicians', 'Entrepreneurs']
    // };

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            });
            categoryData.categories.forEach(category => {
                idbPromise('categories', 'put', category);
            });
        }
        else if (!loading) {
            idbPromise('categories', 'get').then(categories => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
        // console.log("clicked " + id);
        // console.log(state);
    };

    return (
        <>
            <Row className="text-center">
                <Col sm={6} md={4}>
                    {/* <h5 className="mb-3 ml-4 mr-2">Choose a Category:</h5> */}
                    <h5 className="text-secondary">Choose a Category:</h5>
                </Col>
            </Row>

            <Container className="mb-3">
                {categories ?
                    <>
                        <Row className="justify-content-center">

                            {categories.map(category => (
                                <Col md={3} key={category._id} >
                                    <Button className="m-1 px-3" variant="secondary" block onClick={() => {
                                        // console.log("clicked" + category.name);
                                        // handleClick(category.id);
                                        handleClick(category._id);
                                    }}>
                                        {category.name}
                                    </Button>
                                </Col>
                            ))}

                            <Col md={3} >
                                <Button className="m-1 px-3" variant="secondary" block onClick={() => {
                                    handleClick("clear");
                                }}>
                                    Show All
                                </Button>
                            </Col>

                        </Row>
                    </>
                    : null}
            </Container>
        </>
    );
}

export default CategoryMenu;
