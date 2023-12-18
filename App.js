import React, { useState } from 'react';
import './Table.css'; // Import CSS file for styling

const Table = () => {
  const [selectedOption, setSelectedOption] = useState('manageBuyer'); // Set the default option here

  const tableData = [
    {
      sl: '',
      orderDate: '',
      style: '',
      piNo: '',
      company: '',
      team: '',
      items: '',
      stylePO: '',
      spec: '',
      measurement: '',
      ordQty: '',
      sqrMtLbsPcs: '',
      // Add other fields as needed
    },
    // Add more objects as needed...
  ];

  // Remove handleOptionChange function if not needed

  return (
    <div className='container'>
    <div>
      {/* Table section */}
      {selectedOption === 'manageBuyer' && (
        <div className='tablez'> 
          <h3>Manage Buyer</h3>
          {/* Existing table content */}
          <table className="custom-table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact No.</th>
                {/* Add more table headers */}
              </tr>
              
              
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td><input className="small-input" type="text" defaultValue={row.sl} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.orderDate} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  
                  {/* Add more input fields based on the tableData fields */}
                </tr>

              ))}
            </tbody>

            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td><input className="small-input" type="text" defaultValue={row.sl} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.orderDate} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  
                  {/* Add more input fields based on the tableData fields */}
                </tr>

              ))}
            </tbody>

            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td><input className="small-input" type="text" defaultValue={row.sl} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.orderDate} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  
                  {/* Add more input fields based on the tableData fields */}
                </tr>

              ))}
            </tbody>

            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td><input className="small-input" type="text" defaultValue={row.sl} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.orderDate} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  
                  {/* Add more input fields based on the tableData fields */}
                </tr>

              ))}
            </tbody>

            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td><input className="small-input" type="text" defaultValue={row.sl} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.orderDate} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  
                  {/* Add more input fields based on the tableData fields */}
                </tr>

              ))}
            </tbody>

            
          </table>
        </div>
      )}

      {/* Form section */}
      <div className="form-section">
        <h3>Add New Buyer</h3>
        <form>
          {/* Input fields for the form */}
          <div>
            <label htmlFor="field1">Name:</label>
            <input type="text" id="field1" name="Name" />
          </div>

          <div>
            <label htmlFor="field2">Address:</label>
            <input type="text" id="field2" name="Address" />
          </div>

          <div>
            <label htmlFor="field3">Contact No.:</label>
            <input type="text" id="field3" name="ContactNo" />
          </div>

          {/* Add more input fields as needed */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Table;
