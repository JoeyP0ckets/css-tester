import { React, useState } from 'react'
import { Table } from 'react-bootstrap'
import ShippingLabel from '../containers/ShippingLabel';
import ShippingTracker from '../containers/ShippingTracker';
import { getYourDoses } from '../DataGrabber'
import { Container, Row, Col } from 'react-bootstrap'


const YourDoses = () => {

  const [selectedOrder, setSelectedOrder] = useState(null);
  let yourDoses = getYourDoses();

  let signedOrders = yourDoses.filter(order => {
    return order.order_sent === true;
  });

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  }


  return (
    <div className="your-doses-page">
      <div className="yourdose-contract-frame">
        <div className="yourdose-explain-container">
          <div id="yourdose-explain-header">
            Check
          </div>
          <div id="yourdose-explain-firstline">
            the status of your contract.
          </div>
          <div id="yourdose-explain-body">
            First Dose Fulfillment uses Hellosign to easily send contracts right to your email.  Once you sign, your first dose is on the way.  Keep track with the table below.
          </div>
        </div>
        <div className='contracts-table-scrollable-container'>
          <Table striped bordered hover variant="light" id="contract-table">
            <thead style={{ position: "sticky", top: "0" }}>
              <tr>
                <th>Quantity</th>
                <th>Sample Name</th>
                <th>Status</th>
                <th>Date Ordered</th>
              </tr>
            </thead>
            <tbody>
              {
                yourDoses.map((dose) => (
                  <tr key={dose.id}>
                    <td>{dose.quantity} {dose.quantity === 1 ? "dose" : "orders"}</td>
                    <td>{dose.sample_name}</td>
                    <td>{dose.status}</td>
                    <td>{dose.status_datetime}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
        <br></br>
      </div>
      <div className="yourdose-shipping-frame">
        <Row id style={{ display: "flex", textAlign: "cen ter" }}>
          <Col className="column-shipping" id="shipping-col-left">
            <div className="shipping-explain-container">
              <div id="shipping-explain-header">
                Track
              </div>
              <div id="shipping-explain-firstline">
                your First Dose order.
              </div>
              <div id="shipping-explain-body">
                First Dose uses ShipStation to provide up-to-date information on your current orders. Click on an order below to see its status.
              </div>
            </div>
            <div className="shipping-info-data">
              <ShippingTracker signedOrders={signedOrders} handleOrderClick={handleOrderClick} />
            </div>
          </Col>
          <Col className="column-shipping" id="shipping-col-right">
            <div id="shipping-text-container">
              {selectedOrder ? <ShippingLabel selectedOrder={selectedOrder} /> : "Please Select a Shipping Order"}
            </div>
          </Col>
        </Row>
        <br></br>
      </div>
      <br></br>
      <Container className="contact-container">
        <div id="contact-text">
        </div>
      </Container>
    </div>
  )
}

export default YourDoses;