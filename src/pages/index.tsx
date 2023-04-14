import Header from "@/components/Header";
import MessageList from "@/components/MessageList";
import SideNav from "@/components/SideNav";
import { useState } from "react";
import { AiOutlineTag } from 'react-icons/ai';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CgInbox } from "react-icons/cg";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import { TbReload, TbUsers } from "react-icons/tb";
export default function Home() {
  const [activeCheckBox, setActiveCheckBox] = useState<boolean>(false)
  const [activeSideNav, setActiveSideNav] = useState<boolean>(false)

  return (
    <div className="relative max-w-[2080px] h-screen mx-auto w-full overflow-hidden">
      <Header activeSideNav={() => setActiveSideNav(!activeSideNav)} />

      <div className="relative flex justify-between ">
        <SideNav activeSideNav={activeSideNav} />

        <span className="absolute -right-3 bottom-3 bg-neutral-500 p-3 rounded-l-full z-50 hover:right-0 duration-300">
          <MdKeyboardArrowLeft className="text-lg text-primary-light " />
        </span>

        <div className="grow relative bg-white/10 rounded-xl ml-2 mr-5 mb-3  overflow-hidden">
          <header className=" px-5 py-3 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div onClick={() => setActiveCheckBox(!activeCheckBox)} className='flex items-center'>
                {!activeCheckBox ? (
                  <span className="p-1 rounded-lg hover:bg-white/10">
                    <MdCheckBoxOutlineBlank className="text-lg text-white/80 " />
                  </span>
                ) : (
                  <span className="p-1 rounded-lg hover:bg-white/10">
                    <MdCheckBox className="text-lg text-white/80 " />
                  </span>
                )}
                <span className="p-1 rounded-lg hover:bg-white/10">
                  <MdOutlineArrowDropDown className="text-lg text-white/80 " />
                </span>
              </div>

              <span className="p-2 rounded-full hover:bg-white/10">
                <TbReload className="text-base text-white/80 " />
              </span>

              <span className="p-2 rounded-full hover:bg-white/10">
                <BiDotsVerticalRounded className="text-base text-white/80 " />
              </span>

            </div>

            <div className="flex gap-3 items-center">
              <span className="p-2 rounded-md hover:bg-white/10">
                <p className="text-[13px] text-white/80 cursor-pointer">
                  1-50 of 241
                </p>
              </span>


              <span className="p-2 rounded-full hover:bg-white/10">
                <MdKeyboardArrowLeft className="text-lg text-white/70 " />
              </span>

              <span className="p-2 rounded-full hover:bg-white/10">
                <MdKeyboardArrowRight className="text-lg text-white/90 " />
              </span>

            </div>
          </header>

          <div className="w-full h-full absolute left-0 top-14 pb-14 overflow-y-auto ">
            <Tabs />
            <MessageList activeCheckBox={activeCheckBox} />
            <div className="w-full  flex justify-between items-start p-5 ">
              <div>
                <span className="storage relative h-2 w-60 block bg-white/70 rounded-xl overflow-hidden"></span>
                <p className="text-[12px] text-primary">8.73 GB of 15 GB used</p>
              </div>

              <p className="text-[12px] text-primary">Terms | Privacy | Programme Policies</p>

              <span className="text-[12px] text-right text-primary">
                <p>Last account activity: 57 minutes ago</p>
                <p>Details</p>

              </span>

            </div>



          </div>



        </div>




      </div>


    </div>
  )
}


// Tabs

const Tabs = () => {

  return (
    <>
      <ul className="flex ">
        <li className=" border-b-4 border-white/80 max-w-[250px] w-full flex gap-5 items-center px-6 py-3 hover:bg-white/20 cursor-pointer">
          <CgInbox className="text-lg text-white/80" />
          <p className="text-base text-white/90">Primary</p>
        </li>
        <li className="max-w-[250px] w-full flex gap-5 items-center px-6 py-3 hover:bg-white/20 cursor-pointer">
          <AiOutlineTag className="text-lg text-white/80 -scale-x-100" />
          <p className="text-base text-white/90">Promotions</p>
        </li>
        <li className="max-w-[250px] w-full flex gap-5 items-center px-6 py-3 hover:bg-white/20 cursor-pointer">
          <TbUsers className="text-lg text-white/80" />
          <p className="text-base text-white/90">Social</p>
        </li>
      </ul>
    </>
  )


}