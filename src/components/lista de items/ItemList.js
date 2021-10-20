import { useEffect, useState } from "react";
import { promises } from "../lista de items/promises";
import items from "./Item";

const Promises = ({ items }) => {
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
        <div>
            <h1>Promises</h1>
            <h3 className={isSuccess ? "successMessage" : "errorMessage"}>
                {message}
            </h3>
            {isLoading && <h3>Loading...</h3>}
            {isFinished && <h2>Se ha finalizado</h2>}
            {currentItems.map((items) => (
                <Item key={items.id} {...items} />
            ))}
        </div>
    )
};

export default Promises;