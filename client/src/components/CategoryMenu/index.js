import React, { useEffect } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
// import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
// import { QUERY_CATEGORIES } from "../../utils/queries";
import { useDispatch, useSelector } from 'react-redux';
// import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    // this will eventually need to be moved to the server side seed
    const categories = [
        {
            name: 'All Idols',
            id: 0
        },
        {
            name: 'Athletes',
            id: 1
        },
        {
            name: 'Musicians',
            id: 2
        },
        {
            name: 'Entrepreneurs',
            id: 3
        }
    ];

    const categoryData = ["test"];

    // const { categories } = state;
    // const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    // useEffect(() => {
    //     if (categoryData) {
    //         dispatch({
    //             type: UPDATE_CATEGORIES,
    //             categories: categoryData.categories
    //         });
    //         categoryData.categories.forEach(category => {
    //             idbPromise('categories', 'put', category);
    //         });
    //     } else if (!loading) {
    //         idbPromise('categories', 'get').then(categories => {
    //             dispatch({
    //                 type: UPDATE_CATEGORIES,
    //                 categories: categories
    //             });
    //         });
    //     }
    // }, [categoryData, loading, dispatch]);

    // const handleClick = id => {
    //     dispatch({
    //         type: UPDATE_CURRENT_CATEGORY,
    //         currentCategory: id
    //     });
    // };

    return (
        // <div>
        //     <h2>Choose a Category:</h2>
        //     {categories.map(item => (
        //         <button
        //             key={item._id}
        //             onClick={() => {
        //                 // handleClick(item._id);
        //             }}
        //         >
        //             {item.name}
        //         </button>
        //     ))}
        // </div>
        <>
        <h4 className="mb-3 ml-4">Choose a Category:</h4>
            <Container className="mb-3">
                <Row>
                    
                </Row>

                <Row>
                    
                        {categories.map(category => (
                            <Col md={3} key={category.id}>
                            <Button className="mr-3 mb-3 px-3" variant="secondary" block onClick={() => {
                                console.log("clicked" + category.name);
                            }}>
                                {category.name}
                            </Button>
                            </Col>
                        ))}
                    
                </Row>
            </Container>
        </>
    );
}

export default CategoryMenu;
