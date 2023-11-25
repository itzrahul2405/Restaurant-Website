import React, {useContext} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';


const MealItemForm = props => {

    const cartCtx = useContext(CartContext)
    console.log('reinitialized cartCtx', cartCtx)
    const addItemToCart = (event) => {
        event.preventDefault();
        // update the cartCtx.items
        const quantity = document.getElementById('amount'+props.id).value
        // cartCtx.items.push(props.item)
        cartCtx.addItem({...props.item,  quantity: quantity})
        console.log('after addItemToCart', cartCtx)
    }

    return(
        <form  className={classes.form}>
            {console.log('inside render', cartCtx.items)}   
            <Input label="Amount" input={{id: 'amount' + props.id , type: 'number', min: '1', max: '5', step: '1', defaultValue: '1'}} />
            <button onClick={addItemToCart}>+ Add</button>
        </form>
    );
}

export default MealItemForm;