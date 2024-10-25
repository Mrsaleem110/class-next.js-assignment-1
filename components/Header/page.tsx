import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-sky-800 flex justify-center items-center p-5 ">
     
                <Image
                    src={require('@/public/logo.png')}
                    alt='Logo'
                    width={100}
                    height={100}
                    className="absolute top-0 left-0  flex justify-start mt-5 ml-2 "                />
                <span className="text-xl font-bold text-blue-200 ml-12">
                    Tuition Free Education Program On Latest Technology
                </span>
                <ul className="flex gap-8 text-bold text-white justify-end ml-10">
                    <li><Link href="/" className="hover:bg-emerald-300 p-2">Home</Link></li>
                    <li><Link href="/Apply" className="hover:bg-emerald-300 p-2">Apply</Link></li>
                    <li><Link href="/Jobs" className="hover:bg-emerald-300 p-2">Jobs</Link></li>
                    <li><Link href="/Result" className="hover:bg-emerald-300 p-2">Result</Link></li>
                    <li><Link href="/Courses" className="hover:bg-emerald-300 p-2">Courses</Link></li>
                    <li><Link href="/Login" className="hover:bg-emerald-300 p-2">Login</Link></li>
                    <li><Link href="/SignUp" className="hover:bg-emerald-300 p-2">SignUp</Link></li>
                </ul>
         </div> 
    );
};

export default Header;
