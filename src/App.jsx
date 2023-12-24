import { Header } from "./components/Header/Header"
import s from './App.module.scss';
import { SideBar } from "./components/SideBar/SideBar";
import { Post } from "./components/Post/Post";

function App() {
  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <SideBar />
        <Post/>
        
      </div>

    </>
  )
}

export default App
