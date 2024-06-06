import React from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
function Header() {
    return (
        <header className="bg-slate-200 shadow-md">
            <div className="mx-auto flex justify-between items-center max-w-6xl max-auto p-3 ">
                <Link to={"/"}>
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className="text-slate-500">Sahand</span>
                        <span className="text-slate-700">Estate</span>
                    </h1>
                </Link>
                <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                    <input type="text" placeholder="Search..." className="focus:outline-none bg-transparent w-24 sm:w-64" />
                    <FaSearch className="text-slate-500 " />
                </form>
                <ul className="flex gap-4">
                    <Link to={"/"}>
                        <li className="hidden pb-5 sm:inline text-slate-700 hover:underline">
                            Home
                        </li>
                    </Link>
                    <Link to={"/aboud"}>
                        <li className="hidden pb-5 sm:inline text-slate-700 hover:underline">
                            About
                        </li>
                    </Link>
                    <Link to={"/sign-in"}>
                        <li className="hidden pb-5 sm:inline text-slate-700 hover:underline">
                            Sign In
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header