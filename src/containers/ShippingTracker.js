import React from "react"
import { Table } from "react-bootstrap"

const ShippingTracker = (props) => {

  return(
    <div className="shipping-table-scrollable-container">
          <Table striped bordered hover variant="light" id="shipping-table">
            <thead style={{ position: "sticky", top: "0" }}>
              <tr>
                <th>Sample Name</th>
                <th>Quantity</th>
                <th>Date Ordered</th>
              </tr>
            </thead>
            <tbody>
              {props.signedOrders.map((order) => (
                  <tr key={order.id} onClick={() => props.handleOrderClick(order)}>
                    <td>{order.sample_name}</td>
                    <td>{order.quantity} {order.quantity === 1 ? "dose" : "orders"}</td>
                    <td>{order.status_datetime}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
  )
}

export default ShippingTracker;