import Link from "next/link";

const NavigationCourses = ({ props }: { props: any }) => {
    return (
        <div>
            <ul className="mt-14 ml-6 rounded-2xl bg-slate-100 hover text-sm ">
                <li className=" hover:bg-slate-200 cursor-pointers  first:rounded-t-2xl last:rounded-b-2xl ">
                    <Link href={`${props.courses}/${props.vocabulary}/learnWord`}>
                        <div>
                            <i className="fa-solid fa-book p-4 "></i>
                            Học từ
                        </div>
                    </Link>
                </li>
                <li className=" hover:bg-slate-200 cursor-pointers  first:rounded-t-2xl last:rounded-b-2xl ">

                    <Link href={`${props.courses}/${props.vocabulary}/translation`}>
                        <div>
                            <i className="fa-solid fa-book p-4 "></i>
                            Dịch từ
                        </div>
                    </Link>
                </li>
                <li className=" hover:bg-slate-200 cursor-pointers  first:rounded-t-2xl last:rounded-b-2xl ">
                    <i className="fa-solid fa-book p-4 "></i>
                    Điền từ
                </li>
                <li className=" hover:bg-slate-200 cursor-pointers  first:rounded-t-2xl last:rounded-b-2xl ">
                    <i className="fa-solid fa-book p-4 "></i>
                    Chọn đáp án phù hợp nhất
                </li>
            </ul>
        </div>
    )
}
export default NavigationCourses;