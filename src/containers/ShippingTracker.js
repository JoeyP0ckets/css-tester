import React from "react"

const ShippingTracker = (props) => {

  const renderYourOrders = () => {
    
   return props.signedOrders.map((order, index) =>
      <li>{order.sample_name}, {order.quantity} orders</li>
    )
  }

  return(
    <div>
      {renderYourOrders()}
    </div>
  )
}

export default ShippingTracker;