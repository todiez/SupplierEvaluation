import React from "react";

const SupplierDetail = ({ suppliers }) => {
  console.log(suppliers[0].supplierName);

  return (
    <div>
      {suppliers.map((supplier) => (
        <div className="supplier-score-card" key={supplier.id}>
          <h1>SupplierName: {supplier.supplierName}</h1>
        </div>
      ))}
    </div>
  );
};

export default SupplierDetail;
