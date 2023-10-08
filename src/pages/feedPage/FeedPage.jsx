import { useContext, useEffect, useState } from "react"
import Header from "../../components/header/Header"
import { GlobalContext } from "../../contexts/GlobalContext";
import PostCard from "../../components/postCard/PostCard";
import { FormArticle, Divisor, Input, PostBtn, Wrapper, PostsArticle } from "./FeedPageStyle";
import useForm from "../../hooks/useForm";

export const FeedPage = () => {
    const context = useContext(GlobalContext);

    const { getPosts, createPost } = context;
    const [postList, setPostList] = useState([]);
    const [reloadPosts, setReloadPosts] = useState(false)

    useEffect(()=>{
        getPosts()
        .then((data)=> {
            console.log(data)
            setPostList(data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[reloadPosts]);

    const [form, onChangeInput, clearInputs] = useForm({
        post: ''
    });


    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('try')
            await createPost({
                content: form.post
            }) 

            clearInputs()
            setReloadPosts(!reloadPosts)
        } catch (error) {
            console.log(error.response)
        }
    }
     

    return(
        <>
            <Header/>
            <Wrapper>
                <FormArticle>
                    <form onSubmit={onSubmit}>
                        <section>
                            <Input
                                id="post"
                                name="post"
                                placeholder="Escreva seu post..."
                                type="text"
                                value={form.post}
                                onChange={onChangeInput}
                                style={{fontSize: '2em', fontFamily: 'IBM Plex Sans', color: '#6F6F6F', fontWeight: '400', lineHeight: '2em'}}
                            />
                        </section>

                        <PostBtn
                            type="submit"
                        >
                            Postar
                        </PostBtn>
                    </form>
                </FormArticle>
                <Divisor></Divisor>
                <PostsArticle>
                    {postList.map((post, index)=>{
                        return(
                            <PostCard
                                key={index}
                                post={post}
                            />
                        )
                    })}
                </PostsArticle>
            </Wrapper>
        </>
    )
}

export default FeedPage