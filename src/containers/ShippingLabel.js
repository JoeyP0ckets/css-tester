import React from "react"

const ShippingLabel = (props) => {
  const {sample_name, quantity, status_datetime} = props.selectedOrder
  return(
   <div className= "shipping-label-text">
     <b>Dose:</b> {sample_name}
            {quantity}<br></br>
    <b>Signed on:</b> {status_datetime}<br></br>
     <b>Tracking No:</b> 123456-7653<br></br>
   </div>
  )
}

export default ShippingLabel;