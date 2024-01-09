import "../css/header.css";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import useHooks from "./useHooks";

export default function Header() {
    const { page } = useHooks();
    return (
        <>
            <div className="header">
                <div className="header-page">
                    <p>{page}</p>
                    <p><CiCircleQuestion/> How to use</p>
                </div>
                <div className="header-search">
                    <CiSearch/><input type="text" placeholder="Search features, tutorials, etc." />
                </div>
                <div className="header-misc">
                    <div>
                        <button><MdOutlineMessage/></button>
                        <button><FaCaretDown/></button>
                    </div>
                </div>
            </div>
        </>
    )
}