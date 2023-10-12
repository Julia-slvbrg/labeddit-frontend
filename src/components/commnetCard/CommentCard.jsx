import { Wrapper, Content, Creator, LikesDislikes, ActionSection, Img } from "./CommentCardStyle";
import likeArrow from "../../assets/likeArrow.svg";
import dislikeArrow from "../../assets/dislikeArrow.svg";
import commentBallon from "../../assets/commentBallon.svg"
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToCommentPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const CommentCard = ({comment, reloadComments, setReloadComments, idPost}) => {
    const navigate = useNavigate();
    const context = useContext(GlobalContext);

    const { likedislikePost } = context;
    
    const [scaleLike, setScaleLike] = useState(false);
    const [scaleDislike, setScaleDislike] = useState(false);
/* 
    const likePost = () => {
        if(!scaleLike && !scaleDislike){ 
            setScaleLike(true); 

            const body = {
                like: true
            };

            likedislikePost(post.id, body)
            setReloadComments(!reloadComments)

        }else if(!scaleLike && scaleDislike){  
            setScaleLike(true); 
            setScaleDislike(false);

            const body = {
                like: true
            };

            likedislikePost(comment.id, body)
            setReloadComments(!reloadComments)

        }else if(scaleLike && !scaleDislike){ 
            setScaleLike(false);  

            const body = {
                like: true
            };

            likedislikePost(comment.id, body)
            setReloadComments(!reloadComments)
        }
    };

    const dislikePost = () => {
        if(!scaleDislike && !scaleLike){
            setScaleDislike(true);

            const body = {
                like: false
            };

            likedislikePost(comment.id, body)
            setReloadComments(!reloadComments)

        }else if(scaleLike && !scaleDislike){
            setScaleLike(false);
            setScaleDislike(true);

            const body = {
                like: false
            };

            likedislikePost(comment.id, body)
            setReloadComments(!reloadComments)

        }else if(!scaleLike && scaleDislike){
            setScaleDislike(false);

            const body = {
                like: false
            };

            likedislikePost(comment.id, body)
            setReloadComments(!reloadComments)
        }
    }; */


    return(
        <Wrapper>
            <Creator>Enviado por: {comment.creator.name}</Creator>

            <Content>
                <p>{comment.content}</p>
            </Content>

            <ActionSection>
                <LikesDislikes>
                    <Img 
                        src={likeArrow} 
                        onClick={()=>likePost()} 
                        $scale={scaleLike}
                    />
                    <p>{comment.likes-comment.dislikes}</p>
                    <Img 
                        src={dislikeArrow} 
                        onClick={()=>dislikePost()} 
                        $scale={scaleDislike}
                    />
                </LikesDislikes> 

            </ActionSection>
        </Wrapper>
    )
}
export default CommentCard