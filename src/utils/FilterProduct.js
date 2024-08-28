export const FilterProduct = (search, products) => {
    if(search.length === 0){
        return products;
    }
    return products.filter(product => product.title.includes(search));
}