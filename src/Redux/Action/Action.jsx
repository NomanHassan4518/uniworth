
export const addToCart=(prodcutData)=>{    
    return {
        type:"addCartItem",
        payload:prodcutData
    }
}

export const removeProduct=(index)=>{
    return {
        type:"filterItem",
        payload:index
    }
}

export const increaseQuantity=(index)=>{
    return {
        type:"increase",
        payload:index
    }
}

export const decreaseQuantity=(index)=>{
    return{
        type:"decrease",
        payload:index
    }
}

export const emptyCartData=(index)=>{    
    return {
        type:"empty",
        payload:index
    }
}