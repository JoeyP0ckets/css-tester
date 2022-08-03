import React from 'react'
import { Table } from 'react-bootstrap'
import { getYourDoses } from '../DataGrabber'


const YourDoses = () => {

  let yourDoses = getYourDoses();

  return (
    <div className="your-doses-page">
      <div className="yourdose-explain-container">
        CHECK the status of your contract.  First Dose Fulfillment uses Hellosign to easily send contracts right to your email.  Once you sign, your first dose is on the way.  Keep track with the table below.
      </div>
      <Table striped bordered hover variant="dark" id="contract-table">
        <thead>
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
      <div className="shipping-explain-container">
        TRACK your First Dose order.  First Dose uses ShipStation to provide up-to-date information on your current orders. Click on an order below to see its status.
      </div>
      <Table striped bordered hover variant="dark" id="shipping-table">
        <thead>
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
      <div className="shipping-info-data">
        I'm however we decide to set up the data for shipping
      </div>
    </div>
  )
}

export default YourDoses;