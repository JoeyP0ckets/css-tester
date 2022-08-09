import { React, useState } from 'react'
import ShippingLabel from '../containers/ShippingLabel';
import ShippingTracker from '../containers/ShippingTracker';
import { getYourDoses } from '../DataGrabber'
import { Container, Row, Col } from 'react-bootstrap'
import ContractsTable from './ContractsTable';


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
          <div id="yourdose-explain-header" className="grow-text aura-pulse">
            Check
          </div>
          <div id="yourdose-explain-firstline">
            the status of your contract.
          </div>
          <div id="yourdose-explain-body">
            First Dose Fulfillment uses HelloSign to easily send contracts right to your email.  Once you sign, your first dose is on the way.  Keep track with the table below.
          </div>
        </div>
        <div className="contracts-table-scrollable-container">
          <ContractsTable yourDoses={yourDoses} />
        </div>
        <br></br>
      </div>
      <div className="yourdose-shipping-frame">
        <Row id style={{ display: "flex", textAlign: "center" }}>
          <Col className="column-shipping" id="shipping-col-left">
            <div className="shipping-explain-container">
              <div id="shipping-explain-header" className="grow-text aura-pulse">
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
              {selectedOrder ? <ShippingLabel selectedOrder={selectedOrder} /> : <div id="please-select-shipping-order" className="grow-text">Please Select a Shipping Order</div>}
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