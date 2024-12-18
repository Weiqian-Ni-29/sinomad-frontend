import './ReviewSection.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import React from 'react';

const reviews = [
  {
    id: 1,
    avatar: 'https://via.placeholder.com/50',
    userName: 'Sarah Lee',
    content: 'The service was fantastic! The team really went above and beyond to make my trip enjoyable.',
    rating: 4, // Rating out of 5
  },
  {
    id: 2,
    avatar: 'https://via.placeholder.com/50',
    userName: 'James Brown',
    content: 'Amazing experience! The attention to detail and customer support were top-notch.',
    rating: 4.5,
  },
  {
    id: 3,
    avatar: 'https://via.placeholder.com/50',
    userName: 'Olivia White',
    content: 'Good service overall. However, I felt the itinerary could have been more flexible.',
    rating: 3,
  },
  {
    id: 4,
    avatar: 'https://via.placeholder.com/50',
    userName: 'David Johnson',
    content: 'Truly an unforgettable journey! I would highly recommend this service to my friends and family.',
    rating: 5,
  },
  {
    id: 5,
    avatar: 'https://via.placeholder.com/50',
    userName: 'Emily Carter',
    content: 'Everything was well-organized and smooth. The team handled all my requests promptly.',
    rating: 4,
  }
];



function Rating({ rating }) {
    const fullStars = Math.floor(rating);  // 获取实心星星的数量
    const halfStar = rating % 1 !== 0;    // 是否需要半颗星
    const emptyStars = 5 - Math.ceil(rating);  // 计算空心星星的数量
  
    return (
      <div className="comment-rating">
        {Array(fullStars).fill(<FaStar />).map((star, index) => (
          <span key={`full-${index}`}>{star}</span>
        ))}
        {halfStar && <span><FaStarHalfAlt /></span>}  {/* 半颗星 */}
        {Array(emptyStars).fill(<FaRegStar />).map((star, index) => (
          <span key={`empty-${index}`}>{star}</span>
        ))}
      </div>
    );
}

function ReviewSection() {
  return (
    <section id="review">
      <h2>Reviews</h2>
      <div className="review">
        <div className="review-header">Customer Voices</div>
        <div className="review-list">
          {reviews.map((review) => (
            <div key={review.id} className="comment-card">
              <div className="user-info">
                <img src={review.avatar} alt="User Avatar" />
                <span className="user-name">{review.userName}</span>
              </div>
              <div className="comment-content">
                {review.content}
              </div>
              <div className="comment-rating">
                <Rating rating={review.rating} />  {/* 使用组件而非函数调用 */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
