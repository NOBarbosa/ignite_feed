import { ThumbsUp, Trash } from 'phosphor-react'
import s from './comment.module.scss'
import { Avatar } from '../Avatar/Avatar'

export function Comment(){
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
                        <button title='Deletar comentário'> 
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}