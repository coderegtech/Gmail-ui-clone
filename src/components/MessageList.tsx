import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { messages } from "../components/Messages";
interface Message {
    id: Number,
    senderName: String,
    msgSubject: String,
    message: String,
    date: String,
    seen: Boolean,
    isChecked: Boolean
}

interface PropsType {
    activeCheckBox: Boolean
}


const MessageList = ({ activeCheckBox }: PropsType) => {

    const [activeStar, setActiveStar] = useState<boolean>(false)
    const [msgs, setMsgs] = useState<Message[]>(messages)


    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id } = event.target;
        const isChecked = event.target.checked

        setMsgs((prev) => prev?.map((msg) => {
            if (msg.id === parseInt(id)) {
                return { ...msg, isChecked }
            }
            return msg
        }))

    };


    return (
        <>
            {msgs?.map(({ id, senderName, msgSubject, message, date, seen, isChecked }) => {
                return (
                    <div key={id.toString()} className={`${isChecked ? "bg-blue-800" : seen ? "bg-secondary-dark" : "bg-secondar"} w-full px-5 py-2  flex  items-center outline outline-1 outline-white/10 cursor-pointer hover:shadow-primary-light `}>
                        <div className="max-w-[250px] w-full  flex gap-1 items-center ">
                            <div className='px-2 py-1 rounded-full hover:bg-primary/20 focus:bg-primary/20 hover:outline outline-1 outline-primary focus:outline'>
                                <input className="opacity-50" type="checkbox" id={id.toString()} onChange={handleCheckboxChange} checked={Boolean(isChecked)} />
                            </div>

                            <div onClick={() => setActiveStar(!activeStar)} className='flex items-center'>
                                {!activeStar ? (
                                    <span className="p-1 rounded-lg hover:bg-white/10">
                                        <AiOutlineStar className="text-lg text-white/80 " />
                                    </span>
                                ) : (
                                    <span className="p-1 rounded-lg hover:bg-white/10">
                                        <AiFillStar className="text-lg text-yellow-500 " />
                                    </span>
                                )}
                            </div>

                            {/* Sender */}
                            <h2 className="text-sm text-white/90 font-bold">{senderName}</h2>
                        </div>

                        {/* message */}
                        <div className="flex-grow flex gap-1 items-center">
                            {/* subject */}
                            <h1 className="text-sm text-white/90 font-bold whitespace-nowrap">{msgSubject}</h1>
                            <p className="text-[13px] text-white/80">- {message.substring(0, 80)}...</p>
                        </div>

                        {/* datetime */}
                        <div className="">
                            <span className="text-[12px] text-white font-bold">{date}</span>
                        </div>



                    </div>
                )
            })

            }

        </>
    )
}

export default MessageList