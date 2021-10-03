import styled from "styled-components";
import { useContext,useRef,useState } from "react";
import date from 'date-and-time';
import Profile from './img/Profile.png';
import { format } from "date-fns";
import {PostsContext} from './Facebook';

const CreatePostContiner= styled.div`
display: flex;
justify-content: center;
min-width: 100vw;
align-items: center;
`

const CreatePostBody = styled.div`
flex:1;
display: flex;
justify-content: center;
text-align: center;
max-height: 10vh;
`
const ProfileImage =styled.img`
flex-grow: 1;
max-width: 5vw;
border-radius: 50%;
 `

const  WritePost = styled.input`
flex-grow: 10;
font-size: 24px;
text-align: justify;
 `

const SendPost = styled.button`
flex-grow: 1;
background-color: #008CBA;
color: white;
`




function  CreatePostSection(){
 const postsContext = useContext(PostsContext);
 const inputRef = useRef('');
 const dataRef = useRef();
 const {sendPost, useSendPost} = useState(true);
 

function addPost() {
 const title = 'me';
 const time = date.format(new Date(), 'DD-MM-YYYY');   
 const name ="Ariel Okmian"; 
 const text =  inputRef.current.value;             
 const responce = 1;
 const likes =[];
  if (text === ''){
   return  {} 
  }
   else{
     postsContext.addPostInternal(title,time,name,text,responce,likes)
   }
   inputRef.current.value = '';
  };
  
  
      

 
 
 return (

     <CreatePostContiner>
       <CreatePostBody>
          <ProfileImage src={Profile}/> 
          <WritePost  placeholder='what you think today?' type="text" ref={inputRef} /> 
          <SendPost   ref={dataRef}   onClick={addPost}> <medium>post</medium> </SendPost>
        </CreatePostBody>  
      </CreatePostContiner>       
 
 )
}

export default CreatePostSection;