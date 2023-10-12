import { useContext, useEffect, useState } from "react"
import Header from "../../components/header/Header"
import PostFeedCard from "../../components/postCard/PostFeedCard"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import CommentCard from "../../components/commnetCard/CommentCard"
import { Divisor, FormArticle, Input, CommentBtn, Wrapper, CardsArticle } from "./CommentPageStyle"
import useForm from "../../hooks/useForm"

export const CommentPage = () => {
    const { idPost } = useParams();
    const context = useContext(GlobalContext);

    const { getPostById, getCommentsByPostId, createComment } = context;

    const [postIdParams, setPostIdParams] = useState('');
    const [closeIcon, setCloseIcon] = useState(true);
    const [post, setPost] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [reloadRender, setReloadRender] = useState(false);

    const [form, onChangeInput, clearInputs] = useForm({
        comment: ''
    });
   
    useEffect(()=>{
        
        getPostById(idPost)
        .then((data) => {
            console.log(data[0]);
            setPost(data[0])
            setPostIdParams(idPost)
        })
        .catch((error) => {
            console.log(error)
        });

        getCommentsByPostId(idPost)
        .then((data) => {
            console.log({data})
            setCommentList(data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[reloadRender]);

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await createComment(idPost, {
                content: form.comment
            });

            clearInputs();
            setReloadRender(!reloadRender)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <Header closeIcon={closeIcon}/>
            <Wrapper>
                <CardsArticle>
                    { postIdParams && 
                        <PostFeedCard  
                            post={post}
                            reloadPosts={reloadRender}
                            setReloadPosts={setReloadRender}
                        />
                    } 
                </CardsArticle>
               
                <FormArticle>
                    <form onSubmit={onSubmit}>
                        <section>
                            <Input
                                id="comment"
                                name="comment"
                                placeholder="Adicionar comentário"
                                type="text"
                                value={form.comment}
                                onChange={onChangeInput} 
                                style={{fontSize: '2em', fontFamily: 'IBM Plex Sans', color: '#6F6F6F', fontWeight: '400', lineHeight: '2em'}}
                            />
                        </section>

                        <CommentBtn
                            type="submit"
                        >
                            Responder
                        </CommentBtn>

                    </form>
                </FormArticle>

                <Divisor></Divisor>

                <CardsArticle>
                    {commentList.length > 0? 
                        commentList.map((comment, index)=>{
                            return(
                                <CommentCard 
                                    key={index}
                                    comment={comment}
                                    reloadComments={reloadRender}
                                    setReloadComments={setReloadRender}
                                    idPost={postIdParams}
                                />
                            )
                        })
                        : 
                        <p>Seja o primeiro a comentar!!</p> /* TEM QUE ESTILIZAR ISSO TAMBÉM */
                    }
                </CardsArticle>
                
            </Wrapper>
        </>
    )
}

export default CommentPage