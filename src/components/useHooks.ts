import { useState } from "react";
import { transaction } from "../transaction.js";


export default function useHooks () {
    const [ userName, setUserName] = useState('Nishyan');
    const [refunds, setRefunds] = useState(transaction);
    const [page, setPage] = useState('Payouts');
    const [ refundsNo, setRefundsNo ] = useState(transaction.length);
    const [ transactionNo, setTransactionNo ] = useState(22);

    return {
        userName, refunds, page, setPage, refundsNo, transactionNo
    }
}