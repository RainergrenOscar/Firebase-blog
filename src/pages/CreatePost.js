import React, { useEffect } from 'react';
import "./CreatePost.css"
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../firebaseConfig"
import { useNavigate } from 'react-router-dom';


const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("")
  const [post, setPost] = useState("")
  const navigate = useNavigate();
  const postsCollectionRef = collection(db, "posts")

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    })
    navigate("/")
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/")
    }
  },[])

  return <div className='createPostPage'>
    <div className="cpContainer">
      <h1>Create Post</h1>
      <div className="inputGp">
        <label> Title</label>
        <input type="text" placeholder='Title...' onChange={(e) => {setTitle(e.target.value)}}/>
      </div>
      <div className="inputGp">
        <label> Post</label>
        <textarea placeholder="Post..." onChange={(e) => { setPost(e.target.value) }}/>
      </div>
      <button onClick={createPost}>Upload Post</button>
    </div>
  </div>;
};

export default CreatePost;
