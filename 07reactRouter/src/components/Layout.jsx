
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> 
    {/* header and footer will be ramain same but outlet inside part will be change  */}
    <Footer/>
    </>
  )
}

export default Layout