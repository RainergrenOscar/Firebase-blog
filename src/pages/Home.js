import { useEffect, useState } from "react";
import "./Home.css"
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore"
import { auth, db } from "../firebaseConfig";

const Home = (isAuth) => {
  const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db, "posts")
  
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getPosts()
  }, [])
  
  const deletePost =  async (id) => {
    const postDoc = doc(db, "posts",id)
     await deleteDoc(postDoc)
  }


  return <div className="homePage">
    {posts.map((post) => {
      return (
        <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
              {isAuth && post.author.id === auth.currentUser && (<button onClick={() => { deletePost(post.id) }}>Delete</button>)} 
            </div>
          </div>
          <div className="postTextContainer">
            <p>{post.post}</p>
            <h3> @ {post.author.name}</h3>
          </div>
        </div>
      )
    })}
  </div>;
};

export default Home;
