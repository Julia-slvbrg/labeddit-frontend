import { Wrapper, Content, Creator, LikesDislikes, Comments, ActionSection, Img } from "./PostCardStyled";
import likeArrow from "../../assets/likeArrow.svg";
import dislikeArrow from "../../assets/dislikeArrow.svg";
import commentBallon from "../../assets/commentBallon.svg"
import { useState } from "react";

export const PostCard = ({post}) => {
    
    const [scaleLike, setScaleLike] = useState(false);
    const [scaleDislike, setScaleDislike] = useState(false);

    const likePost = () => {
        if(!scaleLike && !scaleDislike){
            setScaleLike(true);
        }else if(!scaleLike && scaleDislike){
            setScaleLike(true);
            setScaleDislike(false)
        }else if(scaleLike && !scaleDislike){
            setScaleLike(false);
        }
    };

    const dislikePost = () => {
        if(!scaleDislike && !scaleLike){
            setScaleDislike(true);
        }else if(scaleLike && !scaleDislike){
            setScaleLike(false);
            setScaleDislike(true)
        }else if(!scaleLike && scaleDislike){
            setScaleDislike(false);
        }
    }

    return(
        <Wrapper>
            <Creator>Enviado por: {post.creator.name}</Creator>

            <Content>
                <p>{post.content}</p>
            </Content>

            <ActionSection>
                <LikesDislikes>
                    <Img 
                        src={likeArrow} 
                        onClick={()=>likePost()} 
                        $scale={scaleLike}
                    />
                    <p>{post.likes-post.dislikes}</p>
                    <Img 
                        src={dislikeArrow} 
                        onClick={()=>dislikePost()} 
                        $scale={scaleDislike}
                    />
                </LikesDislikes> 

                <Comments>
                    <Img src={commentBallon}/>
                    {post.comments}
                </Comments>

            </ActionSection>
        </Wrapper>
    )
}
export default PostCard