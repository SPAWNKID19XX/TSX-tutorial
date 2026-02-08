class Product {

    getProducts(id?: number) {
        if (id) {
            console.log(`Product with id: ${id}`);
        } else {
            console.log(`Product list`);
        }
                
    }
}

const products = new Product();
products.getProducts();
products.getProducts(123);

