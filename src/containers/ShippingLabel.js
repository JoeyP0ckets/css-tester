import React from "react"

const ShippingLabel = (props) => {
  const { sample_name, quantity, shipping_address_line1, shipping_address_line2, shipping_address_line3, status_datetime } = props.selectedOrder

  return (
    <div className="shipping-label-text fade-in-image">
      <b className="shipping-label-bold-text">Dose:</b> {sample_name}<br></br>
      <b className="shipping-label-bold-text">Quantity:</b> {quantity}<br></br>
      <hr></hr>
      <b className="shipping-label-bold-text">Address:</b>
      <div className="shipping-label-address-text">
        {shipping_address_line1}<br></br>
        {shipping_address_line2}<br></br>
        {shipping_address_line3}<br></br>
      </div>
      <hr></hr>
      <b className="shipping-label-bold-text">Signed on:</b> {status_datetime}<br></br>
      <b className="shipping-label-bold-text">Tracking No:</b> 123456 - 7653 < br ></br >
    </div >
  )
}

export default ShippingLabel;