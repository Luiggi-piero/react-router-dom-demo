import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscar } from "../api/api";
import "../assets/css/componentes/card.css";

const ListPosts = ({ url }) => {

    const [posts, setPosts] = useState([]);
    // Cada vez que cambie la url se ejecuta esta funcion
    useEffect(() => {
        buscar(url, setPosts);
    }, [url])

    return (
        <section className="posts container">
            {
                posts.map(post => {
                    const { id, title, metadescription, categoria } = post;
                    return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                        <article >
                            <h3 className="post-card__title">
                                {title}
                            </h3>
                            <p className="post-card__meta">{metadescription}</p>
                        </article>
                    </Link>
                })
            }
        </section>
    )
}

export default ListPosts