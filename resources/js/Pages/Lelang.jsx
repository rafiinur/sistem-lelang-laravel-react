import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ListLelang from "@/Components/ListLelang";
import Paginator from "@/Components/Paginator";

function Lelang(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title={props.title} />
            <div className="relative overflow-hidden bg-white my-8">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-sm">
                            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Ikuti Lelang Disini
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                Lelang akan dibuka sesuai tanggal yang tertera
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="http://ujikom-rafi.test:8000/assets/images/1.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="http://ujikom-rafi.test:8000/assets/images/2.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="http://ujikom-rafi.test:8000/assets/images/3.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="http://ujikom-rafi.test:8000/assets/images/4.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="http://ujikom-rafi.test:8000/assets/images/5.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="http://ujikom-rafi.test:8000/assets/images/6.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="http://ujikom-rafi.test:8000/assets/images/7.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-blue-500 flex flex-col py-8 px-2 text-center lg:px-16 md:px-8 xl:px-24 xxl:px-40">
                <div>
                    <h2 className="text-xl font-bold text-white lg:text-3xl ">
                        List Lelang
                    </h2>
                </div>
            </section>
            <div className="antialiased bg-gradient-to-l from-slate-200 to-slate-400 p-8 mx-auto sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4 p-6">
                        <ListLelang listLelang={props.listLelang} />
                    </div>
                </div>
                <Paginator meta={props.listLelang.meta} />
            </div>
            <footer className="text-center bg-gray-200 flex flex-col px-4 py-12 sm:text-left lg:px-16 md:px-8 xl:px-24 xxl:px-40">
                <div className="sm:flex flex-wrap justify-evenly">
                    <div className="sm:w-1/2 lg:w-1/5">
                        <h6 className="text-sm text-gray-600 font-bold uppercase">
                            Contact
                        </h6>

                        <div className="mt-4">
                            <a href="#" className="block text-md text-gray-900">
                                support@bytewebster.com
                            </a>
                            <a
                                href="#"
                                className="block text-md text-gray-900 mt-2"
                            >
                                +91 000 000 0000
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 sm:w-1/2 sm:mt-12 lg:w-1/5 lg:mt-0">
                        <h6 className="text-sm text-gray-600 font-bold uppercase">
                            Legal
                        </h6>
                        <ul className="mt-4">
                            <li>
                                <a href="#">Terms and Conditions</a>
                            </li>
                            <li className="mt-2">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="mt-2">
                                <a href="#">Refund & Cancellation</a>
                            </li>
                            <li className="mt-2">
                                <a href="#">Core Values</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12 sm:w-1/2 lg:w-2/5 lg:mt-0 lg:pl-12">
                        <div className="mb-2 sm:mb-0 flex flex-row ">
                            <div className="h-10 w-10 self-center mb-4"></div>
                            <div className="mx-auto">
                                <a
                                    href="https://bytewebster.com/"
                                    className="text-3xl no-underline text-blue-700 font-sans font-bold"
                                >
                                    Byte
                                    <span className="text-green-800">
                                        Webster
                                    </span>
                                </a>
                                <br />
                                <span className="text-xs text-grey-dark">
                                    Have A Web Bite!
                                </span>
                            </div>
                        </div>

                        <p className="text-base text-gray-600 mt-4 ">
                            Fusce dapibus, tellus ac cursus commodo, tortor
                            mauris condimentum nibh, ut fermentum massa justo
                            sit amet risus. Praesent commodo cursus magna.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-sm text-gray-600">
                        ©{" "}
                        <script>
                            document.write(new Date().getFullYear())
                        </script>{" "}
                        Bytewebster.com, Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </Authenticated>
    );
}

export default Lelang;
