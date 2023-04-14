import Image from "next/image"
import { BsQuestionCircle } from "react-icons/bs"
import { GoSearch } from "react-icons/go"
import { IoMdMenu } from "react-icons/io"
import { SlSettings } from "react-icons/sl"
import { TbGridDots } from "react-icons/tb"
import { VscSettings } from "react-icons/vsc"
import logo from "../assets/Images/gmail-Logo.png"
import profile from "../assets/Images/img.jpeg"

const Header = ({ activeSideNav }: any) => {

    return (
        <>
            <header className="w-full min-h-[60px] py-2 px-5 flex gap-5 justify-between items-center">

                <div className="w-full flex gap-24 justify-start items-center">
                    <div className="flex gap-2">
                        <IoMdMenu onClick={activeSideNav} className="text-2xl text-primary" />

                        <span className="flex gap-1">
                            <Image className="" width={50} height={40} src={logo} alt="gmail-logo" />
                            <p className="text-xl  text-primary p-0">Gmail</p>
                        </span>

                    </div>


                    <div className="bg-white/25  px-2 py-1 flex gap-3 items-center max-w-3xl w-full rounded-lg">
                        <span className="p-3 hover:bg-white/10">
                            <GoSearch className="text-xl text-primary" />
                        </span>
                        <input className="w-full bg-transparent focus:outline-none py-1 placeholder:text-primary-light text-white" type="text" placeholder="Search mail" />

                        <span className="p-3 rounded-full hover:bg-white/10">
                            <VscSettings className="text-xl text-primary" />
                        </span>

                    </div>

                </div>


                <div className="flex gap-3 justify-between items-center">
                    <div className="p-2 rounded-full hover:bg-white/10">
                        <BsQuestionCircle className="text-2xl text-primary" />

                    </div>
                    <div className="p-2 rounded-full hover:bg-white/10">
                        <SlSettings className="text-2xl text-primary" />

                    </div>
                    <div className="p-2 rounded-full hover:bg-white/10">
                        <TbGridDots className="text-2xl text-primary" />

                    </div>

                    <div className="p-1 rounded-full hover:bg-white/10 ">
                        <Image className="rounded-full object-cover shrink-0" width={70} height={70} src={profile} alt="userprofile" />
                    </div>

                </div>



            </header>
        </>
    )
}

export default Header 