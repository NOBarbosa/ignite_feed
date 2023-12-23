import { Header } from "./components/Header/Header"
import s from './App.module.scss';
import { SideBar } from "./components/SideBar/SideBar";

function App() {

  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        <SideBar />
      </div>

    </div>
  )
}

export default App
