import React from 'react';
import './Table.css'; // Import CSS file for styling

const Table = () => {
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

  return (
    <div>
      <h2>Table</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Order Date/Expected Delivery</th>
            <th>Style/LPD PO No.</th>
            <th>PI No./Bill No.</th>
            <th>Company/Buyer</th>
            <th>Team</th>
            <th>Items</th>
            <th>Style/PO No.</th>
            <th>Spec.</th>
            <th>Measurement</th>
            <th>Ord. Qty</th>
            <th>SqrMt/Lbs/Pcs</th>
            {/* Add more headers for additional columns */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input className="small-input" type="text" defaultValue={tableData[0].sl} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].orderDate} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].style} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].piNo} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].company} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].team} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].items} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].stylePO} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].spec} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].measurement} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].ordQty} /></td>
            <td><input className="small-input" type="text" defaultValue={tableData[0].sqrMtLbsPcs} /></td>
            {/* Add more input fields for additional columns */}
          </tr>
          {/* Add more rows by mapping through tableData array */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
