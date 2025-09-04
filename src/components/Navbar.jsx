import {FaHome,FaInfoCircle,FaServicestack,FaEnvelope} from "react-icons/fa";

const navlink=[
{
    name:"Home",
    icon:<FaHome/>,
    href:"#"
},
{
    name:"About",
    icon:<FaInfoCircle/>,
    href:"#"
},
{
    name:"Services",
    icon:<FaServicestack/>,
    href:"#"
},
{
    name:"Contact",
    icon:<FaEnvelope/>,
    href:"#"
}
]

function Navbar(){
    
    return(
        <>
       <nav className="bg-gray-900 text-white p-4">
        <div className="container flex  items-center justify-between mx-auto">
             <h1 className="text-2xl font-bold">🚀 My Website</h1>
                <ul className="flex space-x-6  ">
                    {/* <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-500" ><FaHome/>Home</a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-500"><FaInfoCircle/>About</a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-500"><FaServicestack/>Services</a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-1 hover:text-blue-500"><FaEnvelope/>Contact</a>
                    </li> */}


                    {navlink.map((link,index)=>(
                          <li key={index}>
                        <a href={link.href} className="flex items-center gap-1 hover:text-blue-500">
                            {link.icon}
                            {link.name}
                            </a>
                    </li>
                     ) )
                    }
                </ul>
        </div>
       </nav>
        
        </>
        
    )
}
export default Navbar