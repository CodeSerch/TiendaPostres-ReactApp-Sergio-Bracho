export default CartProvider = (props) => {
    const [cart, setProductsInCart] = useState(0)
   
    return (
     <CartContext.Provider value={[cart, setProductsInCart]}>
      {props.children}
     </CartContext.Provider>
    )
   }