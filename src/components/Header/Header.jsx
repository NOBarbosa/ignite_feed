
import s from "./header.module.scss";
import logo from '../../assets/logo.svg';

export function Header() {
  return <header className={s.header}>
    <img src={logo} /> <h1>Ignite Feed</h1>
  </header>;
}
