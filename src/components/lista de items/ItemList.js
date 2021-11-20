import { useEffect, useState } from "react";
import { promises } from "../lista de items/promises";
import Item from "./Item";
import "../styles/styles.css";


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
        <div style={{ fontFamily: "Paytone One" }}>
            {isLoading && <h3>Loading...</h3>}
        <div class="itemList" style={{display:"flex", justifyContent:"center",marginBottom:"50px",marginTop:"10px", flexWrap:"wrap"}}>
                {currentItems.map((items) => (
                    <Item key={items.id} {...items} />
                ))}
            </div>
        </div>
    )
};

export default Promises;