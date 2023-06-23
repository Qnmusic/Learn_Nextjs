"use client";
import imgBgAuth from '../../../../public/assets/image/hero.jpg';
import imgLogoahth from '../../../../public/assets/image/logo.png'
import Image from 'next/image';
import Inputcomponent from '@/components/Inputcomponent';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';


const Auth = () => {

    const [name, setname] = useState<string>('');
    const [email, setemail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [isShowPassword, setisShowPassword] = useState<boolean>(false)

    const [variant, setvariant] = useState('login');

    const togglevariant = useCallback(() => {
        setvariant((event) => event === 'login' ? 'register' : 'login')
    }, [])

    const handleOnClickBtnLogin = () => {
        console.log('check name email password:', name, email, password)

    }


    return (
        <div className="h-screen ">
            <Image src={imgBgAuth} alt="" className='h-full w-full' />
            <div className=' fixed top-0 left-0 bottom-0 right-0 bg-black lg:bg-opacity-50 '>
                <div>
                    <Image src={imgLogoahth} alt='' className='w-[160px] mx-auto my-10 lg:my-0 lg:mx-0 lg:w-[200px] px-10 py-6 opacity-50 cursor-pointer' />
                </div>
                <div className='flex justify-center'>
                    <div className=' bg-black bg-opacity-70 min-w-[20rem] min-h-[10rem] rounded-md py-3'>
                        <span className=' text-white font-bold text-3xl flex justify-center'>
                            {variant === 'login' ? 'Login' : 'Create an account'}
                        </span>
                        <div className=' text-center mx-10'>
                            {variant !== 'login' &&
                                <div className=' my-3'>
                                    <Inputcomponent
                                        onChange={(event: any) => setname(event.target.value)}
                                        value={name}
                                        id="name"
                                        type='text'
                                        label="Name"
                                    />
                                </div>}
                            <div className=' my-3'>
                                <Inputcomponent
                                    onChange={(event: any) => setemail(event.target.value)}
                                    value={email}
                                    id="email"
                                    type='text'
                                    label="Email"
                                />
                            </div>
                            <div className=' my-3 flex relative'>
                                <Inputcomponent
                                    onChange={(event: any) => setpassword(event.target.value)}
                                    value={password}
                                    id="password"
                                    type={isShowPassword === true ? "text" : "password"}
                                    label="Password"
                                />
                                {isShowPassword === false ? <i onClick={() => setisShowPassword(true)} className="fa-solid fa-eye text-white absolute right-4 top-5 cursor-pointer"></i> :
                                    <i onClick={() => setisShowPassword(false)} className="fa-solid fa-eye-slash text-white absolute right-4 top-5 cursor-pointer"></i>}
                            </div>

                            <div>
                                <button
                                    onClick={() => handleOnClickBtnLogin()}
                                    className=' bg-red-500 text-white w-full rounded-md py-3 my-4 hover:text-opacity-90 hover:bg-opacity-80'>
                                    {variant === "login" ? "Login" : "Sigh Up"}
                                </button>
                            </div>
                            {variant === "login" ?
                                <p className=' text-slate-400 text-[10px]'>
                                    First time using Netflix?
                                    <span onClick={togglevariant} className='text-white font-bold cursor-pointer'>
                                        Create an account
                                    </span>
                                </p> :
                                <p className=' text-slate-400 text-[10px]'>
                                    You want to return to the loginpage?
                                    <span onClick={togglevariant} className='text-white font-bold cursor-pointer'>
                                        Go Login
                                    </span>
                                </p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;