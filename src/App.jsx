import { Header } from "./components/Header/Header"
import s from './App.module.scss';
import { SideBar } from "./components/SideBar/SideBar";
import { Post } from "./components/Post/Post";

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/NOBarbosa.png',
        name: 'Natalia Oliveiora',
        role: 'Dev front-end'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
      id: 3,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2022-05-10 20:00:00'),
    },
  ];

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <SideBar />
        <main>
          {posts.map(post =>{
            return  (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}

            />)
          })}
        </main>
        
      </div>

    </>
  )
}

export default App
