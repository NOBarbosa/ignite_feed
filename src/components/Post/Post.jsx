import s from './post.module.scss';

export function Post(){
    return(
        <article className={s.Post}>
            <header>
                <div className={s.author}>
                    <img  className={s.avatar} src="https://avatars.githubusercontent.com/u/75585553?v=4"/>
                    <div className={s.authorInfo}>
                        <strong>Natalia Oliveira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='23 de Dezembro às 22:27' dateTime='2023-12-23'>Públicado há 1h</time>
            </header>

            <div className={s.content}>
                <p>Fala galeraa 👋 </p>

                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

                <a href="#">👉 jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}