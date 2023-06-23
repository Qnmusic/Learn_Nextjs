
import Navigation from "@/components/navigation";
import img1 from '../../../public/assets/image/1.png'
import Achievements from "@/components/achievements";
import Image from "next/image";
import Link from 'next/link';
const Vocabulary = ({ params }: { params: { courses: string } }) => {
    return (
        <div>
            <Navigation />
            <div className='bg-[url("../../public/assets/image/737912.jpg")] bg-cover h-[1200px] lg:h-[1000px] flex justify-center items-center lg:mt-[60px]'>
                <div className='mt-[60px] flex  w-[1000px]'>
                    <div className=' bg-1 h-[820px] w-[300px] sm:w-[500px] md:w-[700px] mx-auto lg:mx-0 rounded-md'>
                        <Link href="/" className=" ml-6 mt-6 flex items-center cursor-pointer">
                            <i className="fa-solid fa-arrow-right-from-bracket rotate-180 text-2xl mr-2 z-0"></i>
                            Quay lại
                        </Link>
                        <div className=' text-center my-6'>
                            <span className=' text-base sm:text-lg md:text-3xl font-bold md:font-medium'> Các Bài Học Của Bạn</span>
                        </div>
                        <Link href={`/${params.courses}/lesson-1`}>
                            <div className=' flex w-full '>
                                <div className=' bg-2 w-full shadow-[2px_2px_5px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_10px_rgba(0,0,0,0.4)] transition ease-in-out duration-500 mx-6 rounded-2xl p-4 flex'>
                                    <div>
                                        <Image src={img1} alt="" className=" w-[80px] md:w-[120px]"></Image>
                                    </div>
                                    <div className=' mx-6 py-2'>
                                        <span className=" text-[12px] md:text-[18px] font-bold">Lesson 1: Shapes</span>
                                        <p className=" text-[10px] md:text-[13px]">Cách hình dạng trong tiếng anh</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className=" hidden lg:block">
                        <Achievements />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Vocabulary;