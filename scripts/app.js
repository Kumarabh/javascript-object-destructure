import { productDetails } from "./test.js";
let product;
productDetails().then(data => {
    product = data;
    console.log('product fetch type -1')
    let {id, name, price} = product;
    console.log(id, name, price);
})

productDetails().then(data => {
    product = data;
    console.log('product fetch type p-2')
    let {id, name, address: {city, country}} = product;
    console.log(id, name, city, country);
})

productDetails().then(data => {
    product = data;
    console.log('product fetch type p-3')
    let {id, name, address} = product;
    console.log(id, name, address);
})
