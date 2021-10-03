import {useState} from "react";
import styled from "styled-components";
import date from 'date-and-time';
import LikeEmoji from './img/LikeEmoji.png';
const CommentCss = styled.ul`
display: flex;
list-style: none;
flex-direction: column;
`

const CommentNameANdContext= styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
list-style: none;
background-color: #F2F2F2;
`

const CommentLikeAndDate = styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: row;
 list-style: none;
 color: #64666A;;
`
const LikeEmojiComment = styled.img`
width:12px;
height: 12px;
`
const LikeComment = styled.a`
` 

function Comment({
    userName,
    content,
})
{
    const [commentLike , SetCommentLike] = useState(false);
    const  dateComment = date.format(new Date(), 'DD-MM-YYYY')
return(
    
<li>
<CommentCss>
<div>  
  <CommentNameANdContext>
    <div><b><small>{userName}</small></b></div>
    <div>{content} </div>
  </CommentNameANdContext> 
</div>
<div>
  <CommentLikeAndDate  style={LikeEmojiComment.valid = false ? {"display" : "none"} : {} }>
<div><LikeComment valid={false} onClick={()=>SetCommentLike(!commentLike)}>like</LikeComment></div>
{commentLike && <div><LikeEmojiComment  src={LikeEmoji}/></div>}
<li><small>{dateComment}</small></li>
  </CommentLikeAndDate>
  </div>
</CommentCss>
</li>)}
export default Comment;
