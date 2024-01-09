import { useState } from "react";
import { transaction } from "../transaction.js";


export default function useHooks () {
    const [ userName, setUserName] = useState('Nishyan');
    const [refunds, setRefunds] = useState(transaction);
    const [page, setPage] = useState('Payouts')

    return {
        userName, refunds, page, setPage
    }
}