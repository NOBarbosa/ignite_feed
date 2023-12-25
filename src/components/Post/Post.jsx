import { Comment } from '../Comment/Comment';
import s from './post.module.scss';
import { Avatar } from '../Avatar/Avatar';


export function Post(){
    return(
        <article className={s.post}>
            <header>
                <div className={s.author}>
                    <Avatar src="https://github.com/NOBarbosa.png" />
                     <div className={s.authorInfo}>
                        <strong>Natalia Oliveira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='23 de Dezembro às 22:27' dateTime='2023-12-23'>Públicado há 1h</time>
            </header>

            <div className={s.content}>
                <p>Fala galeraa 👋 </p>

                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

               <p> <a href="#">👉 jane.design/doctorcare</a></p>

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