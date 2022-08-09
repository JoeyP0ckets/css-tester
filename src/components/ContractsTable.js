import React from "react"
import { Table} from 'react-bootstrap'

const ContractsTable = (props) => {
  
  let sortedOrders = props.yourDoses.sort((a, b) => b.status_datetime - a.status_datetime);
  
  return(
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
                sortedOrders.map((dose) => (
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

export default ContractsTable;