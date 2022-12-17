import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addToList, removeFromList} from "../../features/items/itemSlice";

function Items() {

    const items = useAppSelector(state => state.itemReducer.items)
    const cart = useAppSelector(state => state.itemReducer.cart)
    const dispatch = useAppDispatch()
    return (
        <div>
            ALL ITEMS
            {items.map((item : any) => (
                <div>
                    {item.id}
                    <button onClick={()=>dispatch(addToList(item))}>Add To İtems</button>
                </div>
            ))}

            ON CART
            {cart.map((item : any) => (
                <div>
                    {item.id}
                    <button onClick={()=>dispatch(removeFromList(item))}>Remove From Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Items;