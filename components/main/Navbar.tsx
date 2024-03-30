import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {

    return (
        <div className="px-4 pt-4">
            <div className="navbar bg-base-100 rounded-box sticky top-0 z-[1]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="flex flex-row text-xl text-primary gap-2 ml-2 select-none font-bold" href="/"
                    ><FontAwesomeIcon icon={faPen} style={{ width: "1.2em", height: "1.2em" }} /> SÖZLEŞMECİ</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><a href="/">Anasayfa</a></li>
                        <li><a href="/sozlesmeler" className="bg-primary text-white font-bold hover:bg-secondary">Sözleşmeler</a></li>
                        <li><a href="/hakkimizda">Hakkımızda</a></li>
                        <li><a href="/iletisim">İletişim</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Giriş</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar