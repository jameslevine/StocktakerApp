const getSalesFunc = () => {
  fetch("/getsales")
  .then(res => res.json())
  .then(json => {
    console.log('this is the json', json);
    updateSales(json);
  });
};

  const updateSales = json => {
    json.map(obj => {
      const tableRow = document.createElement("tr");
      const tableDataButton = document.createElement("td");
      const deleteButton = document.createElement("button");
      const buttonForm = document.createElement("form");
      deleteButton.textContent = "X";
      deleteButton.setAttribute("id", `sales${obj.id}`);
      deleteButton.setAttribute("name", obj.id);
      buttonForm.setAttribute("method", "post");
      buttonForm.setAttribute("action", `/deletesalesq=${obj.id}`);
      buttonForm.appendChild(deleteButton);
      tableDataButton.appendChild(buttonForm);
      for (let i=0; i<6; i++) {
        const tableData = document.createElement("td");
        const tableValues = (JSON.stringify(Object.values(obj)[i+1])).replace(/"/g,"");
        tableData.textContent = tableValues.replace(/\\/g, '');
        // console.log('these are table values', tableValues.replace(/"/g,""));
        tableRow.appendChild(tableData);
      }
      tableRow.appendChild(tableDataButton);
      document.getElementById('sales-table').appendChild(tableRow);
    });
  };

window.addEventListener("load", getSalesFunc);

const getProductsFunc = () => {
  fetch("/getproducts")
  .then(res => res.json())
  .then(json => {
    updateProducts(json);
    updateProductList(json);
    updateStockTake(json);
  });
};

const updateProducts = json => {
  json.map(obj => {
    const tableRow = document.createElement("tr");
    const tableDataButton = document.createElement("td");
    const deleteButton = document.createElement("button");
    const buttonForm = document.createElement("form");
    deleteButton.textContent = "X";
    deleteButton.setAttribute("id", `products${obj.id}`);
    deleteButton.setAttribute("name", obj.id);
    buttonForm.setAttribute("method", "post");
    buttonForm.setAttribute("action", `/deleteproductq=${obj.id}`);
    buttonForm.appendChild(deleteButton);
    tableDataButton.appendChild(buttonForm);
    for (let i=0; i<4; i++) {
      const tableData = document.createElement("td");
      const tableValues = JSON.stringify(Object.values(obj)[i+1]);
      tableData.textContent = tableValues.replace(/"/g,"");
      tableRow.appendChild(tableData);
    }
    tableRow.appendChild(tableDataButton);
    document.getElementById('product-table').appendChild(tableRow);
  });
};

const updateStockTake = json => {
  json.map(obj => {
    console.log(obj.id);
    const tableRow = document.createElement("tr");
    const tableDataButton = document.createElement("td");
    const stockInput = document.createElement("input");
    stockInput.setAttribute("name", obj.id);
    tableDataButton.appendChild(stockInput);
    for (let i=0; i<4; i++) {
      const tableData = document.createElement("td");
      const tableValues = JSON.stringify(Object.values(obj)[i+1]);
      tableData.textContent = tableValues.replace(/"/g,"");
      tableRow.appendChild(tableData);
    }
    tableRow.appendChild(tableDataButton);
    document.getElementById('product-stocktake-table').appendChild(tableRow);
  });
};

const updateProductList = json => {
  json.map(obj => {
  const option = document.createElement("option");
  const optionValues = JSON.stringify(obj.product_name);
  console.log('these are the optionvalues', optionValues);
  option.textContent = optionValues.replace(/"/g,"");
  document.getElementById('product-list').appendChild(option);
});
};

window.addEventListener("load", getProductsFunc);
