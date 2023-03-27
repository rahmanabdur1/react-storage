const addToDb= id=>{
     

      let shoppingCart={};

    const storeCart=localStorage.getItem('shopping-cart');
      if(storeCart){
        shoppingCart=JSON.parse(storeCart)
   
      }else{
        shoppingCart={}
      }
    const quantity=shoppingCart[id]
       if(quantity){
       const newQuantity=parseInt(quantity)+1;
       shoppingCart[id]=newQuantity
    
       }else{
        shoppingCart[id]=1;
       }
       localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
     

       
}

  const removeFrom =id=>{
    const storeCart=localStorage.getItem('shopping-cart')
    if(storeCart){
        const shoppingCart=JSON.parse(storeCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
        }
    };
  
  }
  const deleteShoppingCart= ()=>{
    localStorage.removeItem('shopping-cart')
}
 export {addToDb,
    removeFrom,
    
    deleteShoppingCart
}