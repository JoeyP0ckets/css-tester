import React from 'react' 
import {Table}  from 'react-bootstrap'
import { getYourDoses } from '../DataGrabber'


const YourDoses = () => {

    let yourDoses = getYourDoses();

  return(
  <div className="your-doses-page">
    <div className="yourdose-explain-container">
      I explain the contract table below
    </div>
    <Table striped bordered hover variant="dark">
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
      I explain the shipping data below
    </div>
    <div className="shipping-info-data">
          I'm however we decide to set up the data for shipping
      </div>
    </div>
  )
}

export default YourDoses;