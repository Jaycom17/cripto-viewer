import { useParams } from "react-router-dom";

function Exchange() {

    const { exchangeId } = useParams();

    return (
        <div>
            <h1>Exchange: {exchangeId}</h1>
        </div>
    );
}

export default Exchange;