import { useState } from "react";
function OrderStatus() {
    //To hold the user details 
    const [order, setOrder] = useState({
        id: 'ORD500',
        status: 'Processing',
        customer: 'Ganesh Nandyala',
        items: 10
    });

    //To hold the option values and store into value
    const [value, setValue] = useState();

    //Function to update the order status on click of update status
    function updateStatus() {
        setOrder({ ...order, status: value });
    }

    //Function to store the value from the options
    function setSelection(e) {
        setValue(e.target.value);
    }
    return (
        <div>
            <h1>id: {order.id}</h1>
            <h1>status: {order.status}</h1>
            <h1>customer: {order.customer}</h1>
            <h1>items: {order.items}</h1>
            <h1>Update the status :</h1>
            <select value={value} onChange={setSelection}>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
            </select>
            <button onClick={updateStatus}>Update Status</button>
        </div>
    );
}
export default OrderStatus;

//In this assignment we are using multiple use states
// 1. to read the option value and store into value variable
// 2. to update the order of the status by selection of options