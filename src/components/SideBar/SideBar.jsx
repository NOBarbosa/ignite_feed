import s from './sideBar.module.scss';
import cover from '../../assets/cover.jpg'
import {PencilLine} from 'phosphor-react'
export function SideBar(){
    return(
        <aside className={s.sidebar}>
            <img src={cover} className={s.cover}/>  
            <div className={s.profile}> 

                <img src="https://avatars.githubusercontent.com/u/75585553?v=4"/>
                <strong>Natalia Oliveira</strong>
                <span>Web Developer</span>
            </div>
            <footer className={s.footer}>
                
                <a href='#'> <PencilLine size={20}/> Editar seu perfil</a>
            </footer>
        </aside>
    )
}