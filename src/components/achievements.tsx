"use client";

import img5 from '../../public/assets/image/4.png'
import img6 from '../../public/assets/image/dashboard-img.png'
import Image from 'next/image';
import { useState, useEffect } from 'react'

const achievements = () => {

    const [point, setpoint] = useState<number>(0)

    useEffect(() => {
        if (point < 100) {
            setTimeout(() => {
                setpoint((pre) => pre + 1)
            }, 50);
        }
    }, [point])
    return (
        <div>
            <div className=' h-[900px] w-[300px]'>
                <div className=' bg-2 w-full rounded-md mx-6 mb-6 px-5 py-2'>
                    <Image src={img5} alt='' className=' w-[70px] mx-auto ' />
                    <div className=' text-center font-medium '>
                        Level 16
                    </div>
                    <div className=' text-[12px] bg-black font-bold  rounded-full  p-2'>
                        <div className=' bg-yellow-500 max-w-[244px] rounded-full' style={{ width: `${point}%`, transition: "with 0.5s" }}>
                            <span className=' text-center ml-[90px] text-white'>
                                200*/300*
                            </span>
                        </div>
                    </div>
                </div>
                <div className=' bg-2 w-full rounded-md mx-6 mb-6 px-5 py-2'>
                    <Image src={img6} alt='' className=' w-[100px] mx-auto' />
                    <div className=' text-center font-bold'>
                        Hướng dẫn kiểm tra và nhận chứng chỉ
                    </div>
                </div>
                <div className='bg-2 w-full rounded-md  mx-6 mb-6'>
                    <div className=' bg-red-600 rounded-t-md text-center font-bold text-white py-1 '>Bảng xếp hạng</div>
                    <div className=' h-[200px]'>
                        <div className=' flex justify-around px-3 border-b-1 border-x-zinc-700'>
                            <div>
                                Top tuần
                            </div>
                            <div>
                                Top hệ thống
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default achievements;