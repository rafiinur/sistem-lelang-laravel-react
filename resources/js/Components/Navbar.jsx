import { useState } from "react";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";
import { Link } from "@inertiajs/react";

function Navbar({ auth }) {
    const [toggle, setToggle] = useState(true);

    const toggleHandler = () => {
        setToggle((prev) => !prev);
    };
    return (
        <nav className="bg-white w-full py-[20px] md:py-[20px] mx-auto md:border-b-2 flex justify-around items-center border-b border-gray-300 z-10">
            {auth.user ? (
                <>
                    <img
                        onClick={toggleHandler}
                        className="md:hidden object-contain cursor-pointer"
                        src={menuIcon}
                        alt="menu"
                    />
                    <ul className="hidden md:flex space-x-10 ">
                        <li>
                            <Link
                                as="a"
                                className={
                                    route().current("dashboard")
                                        ? "border-blue-600 border-b-2 md:pb-[0.7rem] lg:pb-[1.5rem] text-black"
                                        : "transition-all border-blue-600 hover:border-b-2 md:hover:pb-[0.7rem] lg:hover:pb-[1.5rem] hover:text-black"
                                }
                                href={route("dashboard")}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                as="a"
                                className={
                                    route().current("lelang") ||
                                    route().current("lelang.detail")
                                        ? "border-blue-600 border-b-2 md:pb-[0.7rem] lg:pb-[1.5rem] text-black"
                                        : "transition-all border-blue-600 hover:border-b-2 md:hover:pb-[0.7rem] lg:hover:pb-[1.5rem] hover:text-black"
                                }
                                href={route("lelang")}
                            >
                                Lelang
                            </Link>
                        </li>
                        <li>
                            <Link
                                as="a"
                                className={
                                    route().current("history")
                                        ? "border-blue-600 border-b-2 md:pb-[0.7rem] lg:pb-[1.5rem] text-black"
                                        : "transition-all border-blue-600 hover:border-b-2 md:hover:pb-[0.7rem] lg:hover:pb-[1.5rem] hover:text-black"
                                }
                                href={route("history")}
                            >
                                History
                            </Link>
                        </li>
                    </ul>
                    <ul
                        className={`${
                            toggle ? "hidden" : "block"
                        } lg:hidden bg-white absolute top-0 left-0 z-10 w-[70%] h-[100vh] pt-[100px] pl-6 space-y-6 font-[700] text-[18px] `}
                    >
                        <img
                            onClick={toggleHandler}
                            className="-mt-[75px] mb-14 lg:hidden object-contain cursor-pointer"
                            src={closeIcon}
                            alt="menu"
                        />
                        <li>
                            <Link as="a" href={route("dashboard")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link as="a" href={route("lelang")}>
                                Lelang
                            </Link>
                        </li>
                        <li>
                            <Link as="a" href={route("history")}>
                                History
                            </Link>
                        </li>
                    </ul>
                    <div className="hidden md:flex items-center relative">
                        <div className="dropdown dropdown-end">
                            <div className="flex items-center">
                                <div className="mr-2">
                                    <div className="font-bold">
                                        {auth.user.name}
                                    </div>
                                    <div className="text-xs opacity-60 border-t-2">
                                        {auth.user.email}
                                    </div>
                                </div>
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img src="http://ujikom-rafi.test:8000/assets/images/avatar.png" />
                                    </div>
                                </label>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link href={route("profile.edit")}>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex ">
                        <img
                            className="w-[100%] h-[22px] md:pr-[50px] cursor-pointer"
                            src={logo}
                            alt="sneakers-logo"
                        />
                    </div>
                    <div className="btn-group gap-2">
                        <Link
                            as="a"
                            href={route("login")}
                            className="btn btn-outline btn-info"
                        >
                            Login
                        </Link>
                        <Link
                            as="a"
                            href={route("register")}
                            className="btn btn-outline btn-info"
                        >
                            Register
                        </Link>
                    </div>
                </>
            )}
        </nav>
    );
}

export default Navbar;
