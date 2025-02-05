import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/actions';
import { Link } from 'react-router-dom'; // Fixed import
import './posts.css';

const Home = () => {
    const { loading, data, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            {loading && <div className="spinner"></div>} {/* Add spinner */}
            {error && <p className="error">{error}</p>}
            <div className="container">
                {data.map((post) => (
                    <div key={post.id} className="subcontainer">
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                        <p>User ID: {post.userId}</p>
                        <p>Title: {post.title.slice(0, 15)}...</p>
                        <p className="body">
                            {post.body.length > 30 ? post.body.slice(0, 30) + '...' : post.body}
                        </p>
                        <Link to={`/item/${post.id}`} className="readmore"><p>Read more...</p></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
