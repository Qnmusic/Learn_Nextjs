"use client";
import Navigation from "@/components/navigation";
import NavigationCourses from "@/components/navigationCourses";
import Image from "next/image";
import img from '../../../../../../public/assets/image/first.png';
import { useState, useEffect } from "react";
const learnWord = ({ params }: { params: { courses: string, vocabulary: string } }) => {
    const [chooseanswer, setchooseanswer] = useState<string>("")
    const [swith, setwith] = useState<number>(0)
    const handleOnclickBtnone = () => {
        setchooseanswer("Thứ Nhất")
    }

    const handleOnclickBtntwo = () => {
        setchooseanswer("Thứ Hai")
    }

    const handleOnclickBtnthree = () => {
        setchooseanswer("Thứ Ba")
    }
    const handleOnlickCheckAnswer = () => {
        console.log(">>> check chooseanswer", chooseanswer)
        if (swith === 100) {
            console.log('>>> full')
            setwith(0)
        } else if (chooseanswer !== "") {
            setwith(p => p + 10)
        }
        setchooseanswer("")
    }

    return (
        <div>
            <Navigation />
            <div className=" mt-[100px] flex" >
                <div className=" w-[20%]">
                    <NavigationCourses
                        props={params}
                    />
                </div>
                <div className=" w-[80%] mx-20 mt-14 ">
                    <div className=" bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]   w-[900px] h-[500px] rounded-2xl">
                        <div className="p-6">
                            <div className=" bg-slate-200 w-full h-[12px] rounded-full">
                                <div style={{ width: `${swith}%`, transition: "with 0.5s" }} className={`bg-blue-500 h-[12px] rounded-full`}>

                                </div>
                            </div>
                            <div className=" flex items-center justify-center mt-20">
                                <div className=" text-center">
                                    <span className=" mx-1 cursor-pointer">
                                        <i className="fa-solid fa-clock-rotate-left"></i>
                                    </span>
                                    <span className=" mx-1 cursor-pointer">
                                        <i className="fa-solid fa-backward"></i>
                                    </span>
                                    <Image src={img} alt="" className=" w-[200px] rounded-md mt-2" />
                                </div>
                                <div className=" mt-8 ">
                                    <button onClick={() => handleOnclickBtnone()} className="dark:md:hover:bg-fuchsia-600 border-[1px] border-black w-[250px] h-[40px] rounded ml-20 my-4 cursor-pointer flex px-3 items-center relative bg-transparent focus:bg-blue-500 focus:text-white focus:border-none ">
                                        <span className=" absolute float-right rounded-full px-2 flex justify-center items-center border-[1px] border-slate-600  ">
                                            1
                                        </span>
                                        <span className=" mx-auto group ">
                                            Thứ Nhất
                                        </span>
                                    </button>
                                    <button onClick={() => handleOnclickBtntwo()} className="dark:md:hover:bg-fuchsia-600 border-[1px] border-black w-[250px] h-[40px] rounded ml-20 my-4 cursor-pointer flex px-3 items-center relative bg-transparent focus:bg-blue-500 focus:text-white focus:border-none  ">
                                        <span className=" absolute float-right rounded-full px-2 flex justify-center items-center border-[1px] border-slate-600 ">
                                            2
                                        </span>
                                        <span className=" mx-auto group ">
                                            Thứ Hai
                                        </span>
                                    </button>
                                    <button onClick={() => handleOnclickBtnthree()} className="dark:md:hover:bg-fuchsia-600 border-[1px] border-black w-[250px] h-[40px] rounded ml-20 my-4 cursor-pointer flex px-3 items-center relative bg-transparent focus:bg-blue-500 focus:text-white focus:border-none  ">
                                        <span className=" absolute float-right rounded-full px-2 flex justify-center items-center border-[1px] border-slate-600 ">
                                            3
                                        </span>
                                        <span className=" mx-auto group ">
                                            Thứ Ba
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => handleOnlickCheckAnswer()} className=" bg-slate-300 w-full h-[100px] rounded-b-2xl mt-[38px]">
                            <div className=" bg-slate-100 w-[100px] text-center rounded-full px-2 py-1 float-right mt-8 mr-6 cursor-pointer hover:bg-white">
                                Kiểm tra
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default learnWord;