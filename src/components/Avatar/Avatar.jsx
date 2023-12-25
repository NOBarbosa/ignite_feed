import s from './avatar.module.scss';

// eslint-disable-next-line react/prop-types
export function Avatar({src, hasborder}){
    return(
        <img className={hasborder ?  s.AvatarWithBorder: s.avatar} src={src}/>
    )
}