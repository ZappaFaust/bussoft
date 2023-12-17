import React, { useState } from 'react';
import './Table.css'; // Import CSS file for styling

const Table = () => {
  const [selectedOption, setSelectedOption] = useState(null);

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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="dropdown-menu">
        <select onChange={(e) => handleOptionChange(e.target.value)}>
          <option value="">Select Option</option>
          <option value="manageData">Manage Data</option>
          <option value="managePoly">Manage Poly</option>
        </select>
      </div>

      <h2>{selectedOption === 'manageData' ? 'Manage Data' : 'Manage Poly'}</h2>

      {selectedOption === 'manageData' && (
        <div>
          <h3>Manage Data</h3>
          <table className="custom-table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Order Date/Expected Delivery</th>
                <th>Style/LPD PO No.</th>
                {/* Add more table headers */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td><input className="small-input" type="text" defaultValue={row.sl} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.orderDate} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  {/* Add more input fields based on the tableData fields */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOption === 'managePoly' && (
        <div>
          <h3>Manage Poly</h3>
          <table className="custom-table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Order Date/Expected Delivery</th>
                <th>Style/LPD PO No.</th>
                {/* Add more table headers */}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td><input className="small-input" type="text" defaultValue={row.sl} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.orderDate} /></td>
                  <td><input className="small-input" type="text" defaultValue={row.style} /></td>
                  {/* Add more input fields based on the tableData fields */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
