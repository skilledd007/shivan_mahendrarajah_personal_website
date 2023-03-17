import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function NavBar() {
   return (
    <header className="bg-orange-600">
        <div className="container mx-auto flex justify-between">
            <nav className="flex">
                <NavLink to= "/" 
                activeClassName = "text-white"
                className="inflex-flex items-center py-6 px-0 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">  Shivan Mahendrarajah </NavLink>
                <NavLink to = "/publications" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" 
                activeClassName="text-red-100 bg-red-700">  Publications </NavLink>
                <NavLink to = "/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                activeClassName="text-red-100 bg-red-700">  About Me </NavLink>
                <NavLink to = "/travelogue" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                activeClassName="text-red-100 bg-red-700">  Travelogue </NavLink>
                <NavLink to = "/pictures" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                activeClassName="text-red-100 bg-red-700">  Pictures </NavLink>
                <NavLink to = "/podcasts" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                activeClassName="text-red-100 bg-red-700">  Podcasts </NavLink>

            </nav>
            <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url = "https://twitter.com/s_mahendrarajah" className="mr-4" target="_blank" fgColor = "#fff" style={{height: 35, width: 35}}/>
                {/* (<SocialIcon url = "instagram.com" className="mr-4" target="_blank" fgColor = "#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url = "linkedin.com" className="mr-4" target="_blank" fgColor = "#fff" style={{height: 35, width: 35}}/> */}
            </div>
        </div>
    </header>
   )
}