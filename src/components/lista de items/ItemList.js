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
        <div style={{backgroundColor: "#FCDEC0", fontFamily:"Paytone One"}}>
          <h2 class="bestSellers">Mas Vendidos</h2>
            {isLoading && <h3>Loading...</h3>}
            
            <div  style={{marginLeft:"auto",marginRight:"auto",display:"inline-flex"}}>
            {currentItems.map((items) => (
                <Item key={items.id} {...items} />
            ))}
            </div>
            
        </div>
    )
};

export default Promises;