import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/postActions";

const PostList = () => {
    const dispatch = useDispatch();
    const { post, loading, error } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    return (
        <div>

        </div>
    )
}

export default PostList;
