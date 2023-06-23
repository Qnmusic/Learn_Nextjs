
import Navigation from '@/components/navigation';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../../public/assets/image/ngu-phap-co-ban_1539663532.png';
import img2 from '../../public/assets/image/1000-tu-vung-tieng-anh-co-ban_1538706416.png';
import img3 from '../../public/assets/image/khoa-phat-am-co-ban_1548821170.png';
import img4 from '../../public/assets/image/tieng-anh-giao-tiep-co-ban_1557809625.png';
import Achievements from '@/components/achievements';

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className='bg-[url("../../public/assets/image/737912.jpg")] bg-cover h-[1600px] lg:h-[1000px] flex justify-center items-center lg:mt-[60px]'>
        <div className='mt-[60px] flex  w-[1000px]'>
          <div className=' bg-1 min-h-[200px] w-[60%] sm:w-[70%] mx-auto xl:w-[700px] rounded-md'>
            <div className=' text-center mt-6'>
              <span className=' text-base sm:text-3xl font-bold sm:font-medium'>Các Khóa Học Của Bạn</span>
            </div>
            <div className=' lg:flex w-full '>
              <div className=' bg-2 lg:w-1/2 shadow-[6px_6px_10px_rgba(0,0,0,0.3)] mx-8 my-6 lg:m-6 rounded-2xl p-4 text-center'>
                <div>
                  <span className=' text-xs sm:text-base font-bold'>
                    Ngữ Pháp Cơ Bản
                  </span>
                  <Image src={img1} alt='' className=' w-[100px] mx-auto rounded-full my-4' />
                  <p className=' text-xs mb-6 sm:mb-20'>
                    Nắm vững các kiến thức ngữ pháp cơ bản trong tiếng anh.
                  </p>
                </div>
                <div className=''>
                  <Link href='/ngu-phap-co-ban' className=' bg-slate-700 text-white px-3 py-1 rounded-2xl'>
                    HỌC BÀI
                  </Link>
                </div>
              </div>
              <div className=' bg-2 lg:w-1/2 shadow-[6px_6px_10px_rgba(0,0,0,0.3)] mx-8 my-6 lg:m-6 rounded-2xl p-4 text-center'>
                <div>
                  <span className=' text-xs sm:text-base font-bold'>
                    1000 Từ Vựng Tiếng Anh Cơ Bản
                  </span>
                  <Image src={img2} alt='' className=' w-[100px] mx-auto rounded-full my-4' />
                  <p className=' text-xs mb-6 sm:mb-20'>
                    Ghi nhớ nhanh 1000 từ vựng cơ bản thông qua các game tương tác.
                  </p>
                </div>
                <div className=''>
                  <Link href='/1000-tu-vung-co-ban' className=' bg-slate-700 text-white px-3 py-1 rounded-2xl'>
                    HỌC BÀI
                  </Link>
                </div>
              </div>
            </div>
            <div className=' lg:flex w-full '>
              <div className=' bg-2 lg:w-1/2 shadow-[6px_6px_10px_rgba(0,0,0,0.3)] mx-8 my-6 lg:m-6 rounded-2xl p-4 text-center'>
                <div>
                  <span className=' text-xs sm:text-base font-bold'>
                    Khóa Phát Âm Cơ Bản
                  </span>
                  <Image src={img3} alt='' className=' w-[100px] mx-auto rounded-full my-4' />
                  <p className=' text-xs mb-6 sm:mb-20'>
                    Cung cấp các kiến thức về phát âm từ cơ bản tới nâng cao
                  </p>
                </div>
                <div className=''>
                  <Link href='/phat-am-co-ban' className=' bg-slate-700 text-white px-3 py-1 rounded-2xl'>
                    HỌC BÀI
                  </Link>
                </div>
              </div>
              <div className=' bg-2 lg:w-1/2 shadow-[6px_6px_10px_rgba(0,0,0,0.3)] mx-8 my-6 lg:m-6 rounded-2xl p-4 text-center'>
                <div>
                  <span className=' text-xs sm:text-base font-bold'>
                    Tiếng Anh Giao Tiếp Cơ Bản
                  </span>
                  <Image src={img4} alt='' className=' w-[100px] mx-auto rounded-full my-4' />
                  <p className=' text-xs mb-6 sm:mb-20'>
                    Giao tiếp từ cơ bản đến nâng cao qua 60 tình huống thường gặp trong đời sống.
                  </p>
                </div>
                <div className=''>
                  <Link href='/giao-tiep-co-ban' className=' bg-slate-700 text-white px-3 py-1 rounded-2xl'>
                    HỌC BÀI
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='xl:block hidden'>
            <Achievements />
          </div>

        </div>
      </div>
    </div >

  )
}
