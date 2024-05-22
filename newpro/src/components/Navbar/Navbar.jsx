function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-primary-content rounded-box w-52">
                    <li><a>Menu Item 1</a></li>
                    <li>
                        <a>Menu Item 2</a>
                        <ul className="p-2">
                            <li><a>Sub Menu Item 1</a></li>
                            <li><a>Sub Menu Item 2</a></li>
                        </ul>
                    </li>
                    <li><a>Menu Item 3</a></li>
                </ul>
            </div>
            <a className="btn btn-ghost text-xl">Calculator</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a>Menu Item 1</a></li>
                <li>
                    <details>
                    <summary>Menu Item 2</summary>
                    <ul className="p-2 bg-primary text-primary-content">
                        <li><a>Sub Menu Item 1</a></li>
                        <li><a>Sub Menu Item 2</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>Menu Item 3</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
