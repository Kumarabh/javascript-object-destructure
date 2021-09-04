const productDetails = async () => {
    const product = {
        id: 'idc79383938',
        name: 'Matress',
        price: '33,8989',
        gst: '18%',
        expiryDate: 'NA',
        address: {
        city: 'New York',
        country: 'U.S.A'
        },
        description: 'This product is produced in USA, and has to be sold inside the country.'
    }
    const p = new Promise((resolve,reject) => {
        setTimeout(() => {

           resolve(product);

        }, 3000);
    })

    return await p;
}

export {productDetails}