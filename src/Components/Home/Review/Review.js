import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://glacial-castle-93985.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section style={{backgroundColor:'rgba(247, 245, 240, 0.637)'}}>
            <h5 className="text-center  text-secondary mb-5">Read Our Customer Review</h5>
           <div>
           <div className="container">  
                <div className="row ">
                    {
                     reviews.map(review =><ReviewCard key={review._id} review={review} />)
                    }
                    
                </div>
            </div>
           </div>
        </section>
    );
};

export default Review;