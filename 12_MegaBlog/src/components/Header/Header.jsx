import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  //from setate find out that authenticated or not
  const authStatus = useSelector((state) => state.auth.status);
  /*
  const initialState = {
  status:false,  //this is want to render
  userData:null
}
*/
  const navigate = useNavigate();
  //when navigation made it will loop over array
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,  //if user is ,ogin then why to show login and singup button
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className='py-3 shadow bg-gray-500'>
        <Container>
          {/* 
          nav--> div->link->logo
           
           */}
          <nav className="flex">
            <div className="mr-4">
              <Link to='/'>
                <Logo width='70px'/>
              </Link>
            </div>
            <ul className="flex ml-auto">
                {navItems.map((item)=>
                    item.active ?( //authenticate :true
                      <li key={item.name}>
                        <button
                        onClick={()=>navigate(item.slug)}
                        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                        >{item.name}</button>
                      </li>
                    ):null
              )}
              {authStatus && ( //if it's true then only show this
               <li>
                <LogoutBtn/>
               </li>
              )}
            </ul>
          </nav>
        </Container>
    </header>
  )
}

export default Header;
