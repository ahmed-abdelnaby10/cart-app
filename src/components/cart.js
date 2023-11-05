import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../rtk/slices/cart-slice";

function Cart() {
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, product)=>{
        acc += product.price * product.quantity;
        return acc;
    },0)
    return(
        <Container>
            <h1 className="py-5">Welcome To Cart</h1>
            <Button className="mb-3" variant="primary" onClick={()=>{dispatch(clearCart())}}>Clear Cart</Button>
            <h5>Total Price: {totalPrice.toFixed(2)} $</h5>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>TotalPrice</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((product)=>(
                            <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><Image src={product.image} alt={product.title} style={{width:"100px", height:"100px"}}/></td>
                            <td>{product.price}$</td>
                            <td>{product.quantity}</td>
                            <td>{product.quantity * product.price}$</td>
                            <td><Button variant="danger" onClick={()=>{dispatch(removeFromCart(product))}}>Delete</Button></td> 
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}
export default Cart;