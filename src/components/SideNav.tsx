import { BiChevronDown, BiPencil, BiSend, BiTag } from "react-icons/bi"
import { BsFileEarmark } from "react-icons/bs"
import { CgInbox } from "react-icons/cg"
import { FiClock } from "react-icons/fi"
import { IoMdAdd } from "react-icons/io"
import { MdStarOutline } from "react-icons/md"

type PropsType = {
    activeSideNav: Boolean
}

const SideNav = ({ activeSideNav }: PropsType) => {

    return (
        <div style={{ height: "calc(100vh - 70px)" }} className={`${activeSideNav ? "max-w-[60px]" : "w-full"} max-w-[250px] pr-2 overflow-hidden duration-300 ease-in`}>

            <div className={`${activeSideNav ? "w-14 p-0" : 'w-full'} max-w-[150px] w-full mx-2 px-2 py-4 bg-white flex gap-3 justify-center items-center rounded-xl overflow-hidden`}>
                <BiPencil className="text-black text-2xl text-black/50" />
                <p className={`${activeSideNav ? "hidden" : 'block'}  text-black delay-500`}>Compose</p>
            </div>

            <ul className={`${activeSideNav ? "" : ''} py-3`}>
                <li className={`${activeSideNav ? "activeSideNav" : ''} active sidenav-list rounded-r-full pl-5 pr-3 flex items-center justify-between`}>

                    <div className="flex gap-5 items-center p-[6px] rounded-full">
                        <CgInbox className="text-lg text-primary-light" />
                        <p className="font-medium text-primary-light">Inbox</p>
                    </div>

                    <span className={` ${activeSideNav ? "hidden" : 'block'} text-[12px] text-white`}>999</span>

                </li>

                <li className={`${activeSideNav ? "activeSideNav" : ''} sidenav-list rounded-r-full pl-5 pr-3`}>

                    <div className="flex gap-5 items-center p-[6px] rounded-full">
                        <MdStarOutline className="text-lg text-primary-light" />
                        <p className="font-medium text-primary-light">Starred</p>
                    </div>

                </li>

                <li className={`${activeSideNav ? "activeSideNav" : ''} sidenav-list rounded-r-full pl-5 pr-3`}>

                    <div className="flex gap-5 items-center p-[6px] rounded-full">
                        <FiClock className="text-lg text-primary-light" />
                        <p className="font-medium text-primary-light">Snoozed</p>
                    </div>

                </li>

                <li className={`${activeSideNav ? "activeSideNav" : ''} sidenav-list rounded-r-full pl-5 pr-3`}>

                    <div className="flex gap-5 items-center p-[6px] rounded-full">
                        <BiSend className="text-lg text-primary-light" />
                        <p className="font-medium text-primary-light">Sent</p>
                    </div>

                </li>

                <li className={`${activeSideNav ? "activeSideNav" : ''} sidenav-list rounded-r-full pl-5 pr-3`}>

                    <div className="flex gap-5 items-center p-[6px] rounded-full">
                        <BsFileEarmark className="text-lg text-primary-light" />
                        <p className="font-medium text-primary-light">Drafts</p>
                    </div>

                </li>

                <li className={`${activeSideNav ? "activeSideNav" : ''} sidenav-list rounded-r-full pl-5 pr-3`}>

                    <div className="flex gap-5 items-center p-[6px] rounded-full">
                        <BiChevronDown className="text-lg text-primary-light" />
                        <p className="font-medium text-primary-light">See more</p>
                    </div>

                </li>

            </ul>


            <div className="">
                <div className={` ${activeSideNav ? "flex justify-center pl-3" : ''} px-5 flex items-center justify-between`}>
                    <h2 className={`${activeSideNav ? "hidden" : 'block'} text-lg text-primary-light font-medium`}>Labels</h2>
                    <span className="p-2 rounded-full hover:bg-white/20">
                        <IoMdAdd className="text-lg text-primary-light" />
                    </span>
                </div>
                <ul className="py-3">
                    <li className={`${activeSideNav ? "activeSideNav" : ''} sidenav-list rounded-r-full pl-5 pr-3`}>

                        <div className="flex gap-5 items-center p-[6px] rounded-full">
                            <BiTag className="text-lg text-primary-light -scale-x-100 fill-white/50" />
                            <p className="font-medium text-primary-light">Unwanted</p>
                        </div>

                    </li>
                </ul>

            </div>

        </div>
    )
}

export default SideNav