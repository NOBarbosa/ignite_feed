import s from './sideBar.module.scss';
import cover from '../../assets/cover.jpg'
import {PencilLine} from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar'


export function SideBar(){
    return(
        <aside className={s.sidebar}>
            <img src={cover} className={s.cover}/>  
            <div className={s.profile}> 

            <Avatar src="https://github.com/NOBarbosa.png" hasborder/>
                <strong>Natalia Oliveira</strong>
                <span>Web Developer</span>
            </div>
            <footer className={s.footer}>
                
                <a href='#'> <PencilLine size={20}/> Editar seu perfil</a>
            </footer>
        </aside>
    )
}