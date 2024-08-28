### boostrap => style : https://getbootstrap.com/
#### import 'bootstrap/dist/css/bootstrap.min.css'; import 'bootstrap/dist/js/bootstrap.bundle.min.js';
### boostrap-icon => boostrap-icon : https://icons.getbootstrap.com/
#### import 'bootstrap-icons/font/bootstrap-icons.min.css';
### skleton loader => loading pages (before showing data to the users)
#### https://www.npmjs.com/package/react-loading-skeleton
### axios => manage request : https://axios-http.com/docs/intro
### react-router-dom => navigation between pages
### best practice
#### env => metadata (api_url, api_key)
#### folder structure // react 


#### method
    - GET
    - POST
    - PUT
    - PATCH
    - OPTION
    - DELETE

##### env variable
###### prefix : REACT_APP_(ENV_VAR_NAME)

##### Routage
    - configuration ...
    - layout => global component -> display child components (pages) : ✅
    - get variables from URL:
        - Path variable : [products/{id_product}] =>  /products/1, /products/2,
        - Query params : [products?var1=...&var2=...]   => products?search=dit&size=10
    - display 404 page. : ✅



---------------------------- redux | ... | ... 
1 - install redux ()
2 - configuration 
3 - test

--------------------------- : 
# store : [ .. , ... , ... ,... , ... ] :  package
# action : 
# reducers : 

cart : ====> cart  => (store)
action : (action type)
    - add product to cart => ADD_PRODUCT_TO_CART
    - delete product from cart => DEL_PRODUCT_FROM_CART
    - increment product quantity => INCREMENT_PRO_QTY
    - decrement product quantity => DECREMENT_PRO_QTY
reducers : 
    functions => type d'action
switch => action type => function (reducers)

- redux , react-redux, react toolkits

addTodo("value")
# ...
[
    .....
    ...
    ..
    .
]

[
    [....]
    [.....]
    ..
    ..
    ..
]