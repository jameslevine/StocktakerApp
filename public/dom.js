// const inputField = document.getElementById("select-barber");
// const button = document.getElementById("barber-button");
// const gotContent = document.getElementById("gotContent");

const getSalesFunc = () => {
  console.log('dom function running');
  fetch("/getsales")
  .then(res => res.json())
  .then(json => updateSales(json));
};

  const updateSales = json => {
    json.map(obj => {
      console.log('these are all the sales in the database', obj);
      const paragraph = document.createElement("p");
      paragraph.textContent = JSON.stringify(obj);
      document.getElementById('all-sales').appendChild(paragraph);
      // option.textContent = obj.name;
      // option.value = obj.name;
      // option2.textContent = obj.name;
      // option2.value = obj.name;
      // inputField.appendChild(option);
      // businessName.appendChild(option2);
    });
  };

window.addEventListener("load", getSalesFunc);

const getProductsFunc = () => {
  console.log('products function running');
  fetch("/getproducts")
  .then(res => res.json())
  .then(json => updateProducts(json));
};

const updateProducts = json => {
  json.map(obj => {
    console.log('these are all the products in the database', obj);
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = JSON.stringify(obj);
    document.getElementById('all-products').appendChild(paragraph2);
    // const option = document.createElement("option");
    // const option2 = document.createElement("option");
    // option.textContent = obj.name;
    // option.value = obj.name;
    // option2.textContent = obj.name;
    // option2.value = obj.name;
    // inputField.appendChild(option);
    // businessName.appendChild(option2);
  });
};

window.addEventListener("load", getProductsFunc);
