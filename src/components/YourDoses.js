import React from 'react'
import { Table } from 'react-bootstrap'
import { getYourDoses } from '../DataGrabber'


const YourDoses = () => {

  let yourDoses = getYourDoses();

  return (
    <div className="your-doses-page">
      <div className="yourdose-explain-container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra. Venenatis tellus in metus vulputate eu scelerisque felis. Et tortor at risus viverra adipiscing at. Eget mi proin sed libero enim sed faucibus turpis. Tellus elementum sagittis vitae et leo duis. Nunc vel risus commodo viverra. Sapien eget mi proin sed libero. Ipsum nunc aliquet bibendum enim. Amet nisl purus in mollis nunc sed id semper risus. Morbi tristique senectus et netus. Sem viverra aliquet eget sit amet tellus cras adipiscing.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at varius vel pharetra. Venenatis tellus in metus vulputate eu scelerisque felis. Et tortor at risus viverra adipiscing at. Eget mi proin sed libero enim sed faucibus turpis. Tellus elementum sagittis vitae et leo duis. Nunc vel risus commodo viverra. Sapien eget mi proin sed libero. Ipsum nunc aliquet bibendum enim. Amet nisl purus in mollis nunc sed id semper risus. Morbi tristique senectus et netus. Sem viverra aliquet eget sit amet tellus cras adipiscing.
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