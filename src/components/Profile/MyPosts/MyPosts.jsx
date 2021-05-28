import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 1, message: 'Hi, how are you?', countLikes: 15 },
        { id: 2, message: "It's my first message", countLikes: 25 }
    ]

    let postElements = postData.map(post => <Post message={post.message} countLikes={post.countLikes} />)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <br />
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;