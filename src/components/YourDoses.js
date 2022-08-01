import React from 'react' 
import {Table}  from 'react-bootstrap'
import { getYourDoses } from '../DataGrabber'


const YourDoses = () => {

    let yourDoses = getYourDoses();

  return(
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
  )
}

export default (YourDoses)