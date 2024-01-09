import '../css/sidebar.css';
import Logo from "../assets/logo.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { IoHomeOutline, IoColorPaletteOutline, IoWalletOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsFileBarGraph, BsPeople } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
import { MdOutlinePayments, MdElectricBolt } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import useHooks from './useHooks';


export default function Sidebar() {
    const { userName, setPage } = useHooks();

    const updatePage = (pageName: string) => {
        setPage(pageName);
    }

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div className="sidebar-header">
                    <span className='sidebar-img'>
                        <img src={Logo} alt="Dukaan" width={40} height={40} />
                    </span>
                    <span className='sidebar-title'>
                        <p>{userName}</p>
                        <a href="">Visit Store</a>
                    </span>
                    <span className='sidebar-dropdown'>
                        <button><IoIosArrowDown /></button>
                    </span>
                </div>
                <div className="sidebar-anchors">
                    <ul>
                        <li><a href="" onClick={() => updatePage('Payouts')}><IoHomeOutline />Home</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><FaClipboardList />Orders</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><FiGrid/>Products</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><CiDeliveryTruck />Delivery</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><TbSpeakerphone />Marketing</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><BsFileBarGraph />Analytics</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><MdOutlinePayments />Payouts</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><CiDiscount1 />Discount</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><BsPeople />Audience</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><IoColorPaletteOutline/>Apperance</a></li>
                        <li><a href="" onClick={() => updatePage('Payouts')}><MdElectricBolt/>Plugins</a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div>
                    <span><IoWalletOutline/></span>
                    <span>
                        <p>Available credits</p>
                        <p>222.10</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
