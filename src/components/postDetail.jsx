import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const PostDetail = () => {
    const { id } = useParams();
    const data = useSelector((state) => state.data);
    const post = data.find((post) => post.id === parseInt(id));

    if (!post) return <p>Post not found!</p>;

    return (
        <div>
            <h2>Details Page for Post ID {post.id}</h2>
            <div className="post_detail">
                <div className="image">
                    <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                </div>
                <p>User ID: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>
        </div>
    );
};

export default PostDetail;
