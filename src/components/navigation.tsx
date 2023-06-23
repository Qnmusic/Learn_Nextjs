"use client";
import logo from '../../public/assets/image/logo.png'
import Image from 'next/image';
import { useState } from 'react'

const navigation = () => {
    const [showNavlist, setshowNavlist] = useState<boolean>(false)

    const handleOnclickShowNavList = () => {
        setshowNavlist(true)
    }

    const handleOnclickcloseNavList = () => {
        setshowNavlist(false)
    }


    return (
        <>
            <div className=''>
                <div className=" bg-slate-900 h-[100px] text-white px-12 flex items-center justify-between fixed right-0 left-0 top-0 z-10 ">
                    <div className='flex items-center'>
                        <div className=' flex items-center '>
                            <Image src={logo} alt="" className=' w-[60px] mr-6 cursor-pointer' />
                            <span className=' hidden lg:block text-[50px] font-bold cursor-pointer'>
                                HHQLEN
                            </span>
                        </div>
                        <div className=' hidden lg:block ml-10'>
                            <ul className=' flex items-center justify-center'>
                                <li className=' p-2 hover:border-b-[2px] hover:border-blue-500 border-b-[2px] border-transparent'>
                                    <a href="/">Trang chủ</a>
                                </li>
                                <li className=' p-2 hover:border-b-[2px] hover:border-blue-500 border-b-[2px] border-transparent'>
                                    <a href="/">Lộ Trình</a>
                                </li>
                                <li className=' p-2 hover:border-b-[2px] hover:border-blue-500 border-b-[2px] border-transparent'>
                                    <a href="/">Học qua video</a>
                                </li>
                                <li className=' p-2 hover:border-b-[2px] hover:border-blue-500 border-b-[2px] border-transparent'>
                                    <a href="/">Group Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='hidden md:block p-2 cursor-pointer hover:border-b-[2px] hover:border-blue-500 border-b-[2px] border-transparent'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className=' hidden md:block p-2 cursor-pointer hover:border-b-[2px] hover:border-blue-500 border-b-[2px] border-transparent'>
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <div className=' hidden md:block p-2 cursor-pointer hover:border-b-[2px] hover:border-blue-500 border-b-[2px] border-transparent'>
                            <a href='/auth' className='px-2 '>
                                Đăng nhập
                            </a>
                        </div>
                        <div className='lg:hidden'>
                            {showNavlist === false ?
                                <div onClick={() => handleOnclickShowNavList()} className='ml-3 px-4 py-2 text-4xl md:text-2xl'>
                                    <i className="fa-solid fa-list"></i>
                                </div> :
                                <div onClick={() => handleOnclickcloseNavList()} className='ml-3 px-4 py-2 text-4xl md:text-2xl'>
                                    <i className="fa-solid fa-list"></i>
                                </div>}
                        </div>
                    </div>
                </div>

            </div>
            {showNavlist === true &&
                <div className='block lg:hidden text-white bg-slate-900 w-full fixed h-[220px] md:h-[180px] mt-[100px] border-t-2 border-t-slate-400 z-10'>
                    <div className=''>
                        <ul className=''>
                            <li className=' block md:hidden p-2  border-transparent'>
                                <a href="/auth" className='pr-[200px] md:pr-[400px]'>Đăng nhập</a>
                            </li>
                            <li className=' p-2  border-transparent border-t-2 border-t-slate-600'>
                                <a href="/" className='pr-[200px] md:pr-[400px]'>Trang chủ</a>
                            </li>
                            <li className=' p-2  border-transparent border-t-2 border-t-slate-600'>
                                <a href="/" className='pr-[200px] md:pr-[400px]'>Lộ Trình</a>
                            </li>
                            <li className=' p-2   border-transparent border-t-2 border-t-slate-600'>
                                <a href="/" className='pr-[200px] md:pr-[400px]'>Học qua video</a>
                            </li>
                            <li className=' p-2   border-transparent  border-t-slate-600 border-t-2'>
                                <a href="/" className='pr-[200px] md:pr-[400px]'>Group Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default navigation;