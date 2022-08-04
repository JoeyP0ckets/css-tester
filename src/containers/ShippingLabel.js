import React from "react"

const ShippingLabel = (props) => {
  const {sample_name, quantity, status_datetime} = props.selectedOrder
  return(
   <div className= "shipping-label-text">
     Dose: {sample_name}
            {quantity}
     Signed on: {status_datetime}
     Tracking No: 123456-7653
   </div>
  )
}

export default ShippingLabel;