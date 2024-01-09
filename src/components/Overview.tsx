import "../css/overview.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";


export default function Overview (){
    return (
        <>
            <div className="overview">
                <div className="overview-header">
                    <p>Overview</p>
                    <div>
                        <select>
                            <IoIosArrowDown/>
                            <option value="This Month">This Month</option>
                            <option value="Last Month">Last Month</option>
                            <option value="Last 6 Month">Last 6 Month</option>
                        </select>
                    </div>
                </div>
                <div className="overview-tabs">
                    <div className="overview-payout">
                        <div className="overview-lightpayout">
                            <div>
                                <div><p>Next Payout</p><CiCircleQuestion/></div>
                                <div>
                                    <p>$2,312.23</p>
                                    <a href=""><p>23 order</p><FaAngleRight/></a>
                                </div>
                            </div>
                        </div>
                        <div className="overview-darkpayout">
                            <p>Next payout date:</p>
                            <p>Today, 4:00PM</p>
                        </div>
                    </div>
                    <div className="overview-pending">
                        <div className="overview-lightpending">
                            <div>
                                <div>
                                    <p>Amount pending</p>
                                    <CiCircleQuestion/>
                                </div>
                                <div>
                                    <p>$92,312.20</p>
                                    <a href=""><p>13 orders</p><FaAngleRight/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overview-processed">
                        <div className="overview-lightprocessed">
                            <div>
                                <div>
                                    <p>Amount processed</p>
                                    <CiCircleQuestion/>
                                </div>
                                <div>
                                    <p>$23,92,312.19</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}