import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

//agrupa y da el mismo componente a las paguinas del grupo
export default function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
