import "../css/transaction.css";
import { CiSearch } from "react-icons/ci";
import { RiArrowUpDownFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import useHooks from "./useHooks";

export default function Transactions() {
    const { refunds } = useHooks();

    return (
        <>
            <div className="transaction">
                <div className="transaction-header">
                    <p>Transactions | This Month</p>
                    <div className="transaction-header-tabs">
                        <button>Payouts</button>
                        <button>Refunds</button>
                    </div>
                </div>
                <div className="transaction-details">
                    <div className="transaction-details-header">
                        <div className="input-form">
                            <CiSearch />
                            <input type="text" placeholder="Order ID or Transaction ID" />
                        </div>
                        <div>
                            <button>Sort<RiArrowUpDownFill/></button>
                            <button><FaDownload/></button>
                        </div>
                    </div>
                    <div className="transaction-details-table-head">
                        <span>Order ID</span>
                        <span>Status</span>
                        <span>Transaction ID</span>
                        <span>Refund date</span>
                        <span>Order amount</span>
                    </div>
                    {refunds.map(ele => {
                        return (<div className="transaction-table-details">
                            <span>{ele.id}</span>
                            <span className={ele.status === 'Successfull' ? 'green' : 'grey'}><GoDotFill/>{ele.status}</span>
                            <span>{ele.transactionId}</span>
                            <span>{ele.refundDate}</span>
                            <span>{ele.OrderAmount}</span>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}