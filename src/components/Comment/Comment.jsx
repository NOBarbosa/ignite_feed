/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'
import s from './comment.module.scss'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }
    return(
        <div className={s.comment}>
           <Avatar src="https://github.com/NOBarbosa.png"  hasborder={false}/>
            <div className={s.commentBox}>
                <div className={s.commentContent}>
                    <header>
                        <div className={s.authorAndTime}>
                            <strong>Natalia Oliveira</strong>
                            <time title='23 de Dezembro às 22:27' dateTime='2023-12-23'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'> 
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}