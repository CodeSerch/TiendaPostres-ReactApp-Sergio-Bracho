import { useEffect, useState } from "react";
import { promises } from "../lista de items/promises";
import ItemDetail from "../lista de items/itemDetail";


const ItemDetailPromises = ({ items }) => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSucces] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        if (items) {
            promises(
                items,
                setMessage,
                setIsSucces,
                setIsLoading,
                setIsFinished,
                setCurrentItems
            );
        }
    }, [items]);
    return (
        <div style={{ backgroundColor: "#E5B299" }}>

            {isLoading && <h3>Loading...</h3>}
            {isFinished && <div class="card-group">
                <ItemDetail items={items} />
            </div>}
        </div>
    )
};

export default ItemDetailPromises;