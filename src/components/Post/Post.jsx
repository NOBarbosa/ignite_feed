/* eslint-disable react/prop-types */
import { Comment } from '../Comment/Comment';
import s from './post.module.scss';
import { Avatar } from '../Avatar/Avatar';


export function Post({author,publishedAt, content}){
    const publishedAtFormated = new Intl.DateTimeFormat('pt-Br', {
        day: '2-digit',
        month: 'long',
        hour:'2-digit',
        minute: '2-digit'
    }).format(publishedAt)

    return(
        <article className={s.post}>
            <header>
                <div className={s.author}>
                    <Avatar src={author.avatarUrl} />
                     <div className={s.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='23 de Dezembro às 22:27' dateTime='2023-12-23'>Públicado em {publishedAtFormated}</time>
            </header>

            <div className={s.content}>
                {content.map((item, i)=>{
                        if(item.type=== "paragraph"){
                            return <p key={i}>{item.content}</p>
                        }else if(item.type=== "link"){
                            return <a href='#' key={i}>{item.content}</a>
                        }
                })}

                <p>
                <a href="#">#novoprojeto </a>
                <a href="#" >#nlw</a>           
                <a href="#"> #rocketseat</a></p>
            </div>

            <form className={s.comment}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer >
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={s.commentList}>
                <Comment />
            </div>
        </article>
    )
}