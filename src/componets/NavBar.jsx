import {Menu, X} from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png"
import {navItems} from "../constants"

const NavBar = () => {
    const [mobileDraweOpen, setMobileDraweOpen] = useState(false)
     
    const toggleNavbar =() => {
        setMobileDraweOpen(!mobileDraweOpen)
    }


  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800">
    <div className="container px-4 relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                <span className="text-xl tracking-tight">VirtualR</span>
            </div>
            <ul className="hidden lg:flex ml-19 space-x-12">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#"className="py-2 px-3 border rounded-md">
                    Sign In
                </a>
                <a href="#"className="bg-gradient-to-r from-orange-500 to-orange-800 
                py-2 px-3 border rounded-md">
                    Create an account
                </a> 
            </div>
             <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={ toggleNavbar}>
                    {!mobileDraweOpen && <Menu />}
                </button>
             </div>
             
                <div className={`fixed ${mobileDraweOpen ? "min-h-64 p-12" : " h-0"} overflow-hidden transition-all duration-500 w-screen right-0 z-20 top-0 left-0 bg-neutral-900 
                flex flex-col justify-center items-center lg:hidden`}>
                  <ul>
                    <div onClick={() => setMobileDraweOpen(false)} className="w-full h-auto text-xl flex justify-center py-10">X</div>
                      {navItems.map((item, index) => (
                        <li className="w-full flex justify-center h-16" key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href=""  className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href=""  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
                            Create an account
                        </a>
                    </div>
                </div>
             
        </div>
    </div>
   </nav>
  )
}

export default NavBar 