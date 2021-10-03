import{useRef,useState,useContext, createContext} from 'react';
import styled from 'styled-components';
import HeaderSection from './HeaderSection';
import CreatePostSection from './CreatePostSection';
import Post from './Post';
const FacebookBody = styled.div`
display: flex;
flex-direction: column;
min-width: 100vw;
min-height:100vh;
background-color: #F0F2F5;
`
const PostContiner = styled.div`
 display: flex;
 list-style-type: none;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
`




export const PostsContext = createContext();
let idCount = 0;


function Facebook() {
  const [posts, setPosts] = useState([]);
  function toggleLike(postId, userId) {
      const newPosts = [...posts];
      const post = newPosts.find(existingPost => existingPost.id === postId);
      if(!post) return;
      const likedIndex = post.likes.findIndex(likedUserId => likedUserId === userId);
      
      if(likedIndex >= 0) {
          post.likes.splice(likedIndex, 1);
      } else {
          post.likes.push(userId);
      }
      setPosts(newPosts)
  }

  function addPostInternal(title,name,time,text,idCount) {
      const newPost = {
          title,
          time,
          name,
          text,
          comments: [],
          id: idCount,
          likes: [],
      }
      idCount++;
      
      setPosts([ newPost,...posts]);
  }

  function addComment(comment,postId) {
      const newPosts = [...posts];
      const post = newPosts.find(existingPost => existingPost.id === postId);
      if(post) {
          post.comments.push(comment);
          setPosts(newPosts);
          
      }
  }
   




  
  return (
     <PostsContext.Provider value={{
            posts,
            addPostInternal,
            toggleLike,
            addComment,
        }}>
          <FacebookBody>
          <HeaderSection/>
          <CreatePostSection/>
          <PostContiner >
          {posts.map(post => <Post key={post.id}  {...post}/>)}
          </PostContiner>
      </FacebookBody>      
     </PostsContext.Provider>
  );
}

export default Facebook;
