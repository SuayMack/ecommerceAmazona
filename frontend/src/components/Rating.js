import React from 'react'

export default function Rating(props) {
    const {rating, numReviews} = props;
    return (
        <div clasNameName="rating">
            <span>
                <i clasName={ 
                    rating >= 1 
                    ? "fa fa-star" 
                    : rating >= 0.5 
                    ? 'fa fa-star-half-o' 
                    : 'fa fa-star-0'}>
                </i>
            </span>
            <span>
                <i clasName={ 
                    rating >= 2 
                    ? "fa fa-star" 
                    : rating >= 1.5 
                    ? 'fa fa-star-half-o' 
                    : 'fa fa-star-0'}>
                </i>
            </span>
            <span>
                <i clasName={ 
                    rating >= 3 
                    ? "fa fa-star" 
                    : rating >= 2.5 
                    ? 'fa fa-star-half-o' 
                    : 'fa fa-star-0'}>
                </i>
            </span>
            <span>
                <i clasName={ 
                    rating >= 4 
                    ? "fa fa-star" 
                    : rating >= 3.5 
                    ? 'fa fa-star-half-o' 
                    : 'fa fa-star-0'}>
                </i>
            </span>
            <span>
                <i clasName={ 
                    rating >= 5 
                    ? "fa fa-star" 
                    : rating >= 4.5 
                    ? 'fa fa-star-half-o' 
                    : 'fa fa-star-0'}>
                </i>
            </span>   
            <span>{numReviews + 'reviews'}</span>
        </div>
    )
}
