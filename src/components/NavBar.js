import { NavLink } from "react-router-dom";

function NavBar(){
    const liClass = 'text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white';

    return(
        <div className='p-4'>
            <ul className="flex">
            <li className="flex-1 mr-2">
                <NavLink
                    className={liClass}
                    to='/'
                    exact
                >
                    Home
                </NavLink>
            </li>
            <li className="flex-1 mr-2">
                <NavLink
                    className={liClass}
                    to='/addnew'
                    exact
                >
                    Add Video
                </NavLink>
            </li>
            <li className="flex-1 mr-2">
                <NavLink
                    className={liClass}
                    to='/topten'
                    exact
                >
                    Top Ten
                </NavLink>
            </li>
        </ul>
        </div>
        
    )
}

export default NavBar;