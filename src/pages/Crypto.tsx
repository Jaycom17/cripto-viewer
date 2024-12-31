import { useParams } from "react-router-dom";

function crypto() {

    const { coinId } = useParams();

    return (
        <div>
            <h1>Crypto: {coinId}</h1>
        </div>
    )
}

export default crypto;