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

const modalLogin = document.getElementById('myModalLogin');
const btnLogin = document.getElementById("login");
const spanLogin = document.getElementById('close_login');
const modalRegister = document.getElementById('myModalRegister');
const btnRegister = document.getElementById("register");
const btnLogout = document.getElementById("logout");
const btnLogout = document.getElementById("logout");
const spanRegister = document.getElementById('close_register');
const mainPage = document.getElementById('mainpage_body');
const mainPageContainer = document.getElementById('mainpage_container');

btnLogin.addEventListener('click', () => {
  modalLogin.style.display = "block";
  modalRegister.style.display = "none";
});

spanLogin.onclick = () => {
  modalLogin.style.display = "none";
};

btnRegister.addEventListener('click', function() {
  modalRegister.style.display = "block";
  modalLogin.style.display = "none";
});

spanRegister.onclick = function() {
  modalRegister.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalLogin || event.target == modalRegister) {
    modalLogin.style.display = "none";
    modalRegister.style.display = "none";
  }
}

const authCheckFunc = () => {
  console.log("authCheckFunc triggered")
  fetch("/authcheck")
  .then(res => res.json())
  .then(json => { if (json === false) {
    console.log("User is not logged in!");
    logoutUpdate();
  } else {
    console.log("User is logged in!");
    loginUpdate();
};
});
};

btnLogout.addEventListener('click', () => {
  console.log("logout clicked");
  fetch("/logout")
  .then(res => res.json())
  .then(json => {
    console.log('this is the json', json);
  })
    window.location.reload();
    authCheckFunc();
});

window.addEventListener("load", authCheckFunc);

const logoutUpdate = () => {
  console.log("logoutUpdate triggered");
  btnLogin.style.display = "inline-block";
  btnRegister.style.display = "inline-block";
  btnLogout.style.display = "none";
  mainPage.style.display = "none";
  mainPageContainer.style.display = "block";
};

const loginUpdate = () => {
  console.log("loginUpdate triggered");
  btnLogin.style.display = "none";
  btnRegister.style.display = "none";
  btnLogout.style.display = "inline-block";
  mainPage.style.display = "block";
  mainPageContainer.style.display = "none";
}
