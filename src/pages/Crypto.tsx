import CryptoGeneral from "../components/CryptoGeneral";
import CryptoChart from "../components/CryptoChart";
import MarketsListByCrypto from "../components/MarketsListByCrypto";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Crypto } from "../interfaces/Crypto";

import { getCoin } from "../services/coins.service";

function crypto() {
    const [crypto, setCrypto] = useState<Crypto | null>(null);

    const { coinId } = useParams();

    useEffect(() => {
        getCoin(coinId!)
            .then((data) => setCrypto(data.data))
            .catch(() => setCrypto(null));
    }, [coinId]);


    return (
        <main>
            <CryptoGeneral crypto={crypto}/>
            <CryptoChart cryptoId={crypto?.id}/>
            <MarketsListByCrypto cryptoId={crypto?.id}/>
        </main>
    )
}

export default crypto;