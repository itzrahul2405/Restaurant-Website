import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = <ul>
        {[{id: 1, name: 'sushi', amount: 2 , price: '34.54'}].map((item) => 
        <li>{item.name}</li>)}
    </ul>
    

    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount: </span>
                <span>35.62</span>
            </div>
            <div>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;