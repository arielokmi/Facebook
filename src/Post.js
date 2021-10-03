import {createContext,useContext,useState,useReducer, useRef} from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import Profile from './img/Profile.png';
import likeOn from './img/likeOn.png'
import { PostsContext } from './Facebook';


const PostBody = styled.div`
 display: flex;
 background-color: white;
 flex-direction :column ;
 min-width: 40%;
 min-height: 20vh;
 padding: 1vh;
 margin: 1vh;
 `

 const SectionHeader =styled.div`
 display: flex;
flex-direction :row ;
justify-content: space-between;
`
const InfoPostUser= styled.div`
display: flex;
flex-direction: row;
`

const ProfileImage =styled.img`
flex-direction :row ;
justify-content: space-between;
max-height: 5vh;
border-radius: 25%;
`
const PostInfo = styled.div`
flex-direction: column;

`
const Title =styled.div`
font-weight: bold;
`
const NameAndTime = styled.div`
display: flex;
flex-direction: row;
color: #64666A;
`

const TextSection = styled.div`
display: flex;
min-height: 25vh;
justify-content: center;
text-align: center;
font-size: 24px;
background-image: url("https://www.adobe.com/express/create/post/media_1d5eaa8f839b0ba3c0bd1344f5e3df7ff77319ebe.png?width=2000&format=webply&optimize=medium");
`

const TextAlign = styled.div`
display: flex;
align-self: center;

`
const CommentSection = styled.div`
`

const InfoCommentAndLikesOnPost = styled.div`
display: flex;
justify-content: space-between;
`

const AddCommentsAndLikes = styled.div`
display: flex;
min-height: 8vh;
justify-content:space-around;
align-items: center;
`

const CommentContiner = styled.ul`
padding: 0px;
margin: 0px;
display:flex;
`

const CreateComment = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`
function Post ({
  id,
  title, 
  time,
  name, 
  text,
  comments,
  likes,
 }){
  
  const PostFunctions = useContext(PostsContext);
  const {CommentSectionToggle,SetCommentSectionToggle} = useState(true) ; 
  const commentText = useRef();
  function ToggleLikes(){
    PostFunctions.toggleLike(id,'userId');
    }

    function AddComments(){
    PostFunctions.addComment(commentText,'userId')

    }
 return(
  <PostBody>
   <SectionHeader> 
    <InfoPostUser> 
      <ProfileImage src={Profile}/>
      <PostInfo>
        <Title>{title}</Title>
        <NameAndTime>{time}•{name}</NameAndTime>
      </PostInfo>
      </InfoPostUser>
      <div>...</div>
   </SectionHeader>
   <TextSection>
    <TextAlign> {text} </TextAlign>
   </TextSection>
   <CommentSection  style={AddCommentsAndLikes.valid = false  ? {"display" : "none"} : {} }>
     <InfoCommentAndLikesOnPost>
       <div>commits:{comments.length}</div>
       <div>likes:{likes.length}</div>
     </InfoCommentAndLikesOnPost>
     <AddCommentsAndLikes valid={CommentSectionToggle} >
       <buttom>Comment</buttom>
       <buttom onClick={ToggleLikes}>Like</buttom>
    </AddCommentsAndLikes>
   </CommentSection>
 </PostBody>
 )
}



export default  Post;