import React from 'react';
import './Home.css'

const Home = () => {
    const data = [
        { course: 'Spanish for beginer', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyZKhxZK9GYsU-EzGqdN0AUhw3JqX1HzXRlswneKlwiAwFGLE4_1DYgEBNUrcO-RZnHU&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
        { course: 'AudioBook to learn English', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfAw7p4wlU_LHqkKanE8_0IhPVdbgYtMw8w&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
        { course: 'English for Beginers', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfAw7p4wlU_LHqkKanE8_0IhPVdbgYtMw8w&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
        { course: 'Arabic for beginer', price: 150, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcLB0M1oRTVklKxDnRzLfyBPwUu_XMRS5vQ&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
        { course: 'Japanese for beginer', price: 455, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToc2EAwlUnxz-zGW3P7ejSKl15IAspa1u4bQ&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
        { course: 'Chinese for Travel', price: 432, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRv6u_tfscjK8G644IWMA9X7F_H2f-b0yQA&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
        { course: 'Learn basic Portuguese', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xgq3yy0w1wyhF2f5cVH2WBm5M9086hi-0Q&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
        { course: 'Chinese for Business', price: 670, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRv6u_tfscjK8G644IWMA9X7F_H2f-b0yQA&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
        { course: 'Bangla for beginer', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNlKV71vxjLCoxvMWTgEPSk0mJt0hS2GPrg&usqp=CAU', details: 'The course has Learn section for starting with basics, stories to challange your listening and reading skills' },
    ]
    return (
        <div className="home row text-white">
            <div className="col-md-6">
                <h1 className="fs-1 text-danger
                pt-2 back">The awesome, fun and effective way to learn a language!!</h1>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Home;