const initialState = {
  cartData: [],
  totalPrice: 0,
  totalDiscountedPrice: 0,
  totalItem: 0,
};
const cartItem = (state = initialState, action) => {
  switch (action.type) {
    case "addCartItem": {
      const item = addItemToCart(state, action);
      return generateFinalState(state, item);
    }

    case "filterItem": {
      const item = removeItem(state, action);
      return generateFinalState(state, item);
    }
    case "increase": {
      const item = increaseQuantity(state, action);
      return generateFinalState(state, item);
    }
    case "decrease": {
      const item = decreseQuantity(state, action);
      return generateFinalState(state, item);
    }
    case "empty": {
      const item = emptyCartData(state, action);
      return generateFinalState(state, item);
    }

    default:
      return state;
  }
};

const addItemToCart = (state, action) => {
  const cartIndex = state.cartData?.findIndex(
    (item) => item.product.id === action.payload.product.id
  );

  let newItem = [];

  if (cartIndex > -1) {
    if (state.cartData[cartIndex]?.size === action.payload.size) {
      state.cartData[cartIndex].quantity += action.payload.quantity;
      const updateData = state.cartData?.map((item, index) => {
        return cartIndex === index ? { ...item } : item;
      });
      newItem = updateData;
      return newItem;
    } else {
      const tempProduct = [...state.cartData];
      newItem = [...tempProduct, action.payload];
      return newItem;
    }
  } else {
    const tempProduct = [...state.cartData];
    newItem = [...tempProduct, action.payload];
    return newItem;
  }
};

const removeItem = (state, action) => {
  const filterItems = state.cartData?.filter(
    (item, index) => index !== action.payload
  );
  return filterItems;
};

const increaseQuantity = (state, action) => {
  const cartIndex = state.cartData?.findIndex(
    (item, index) => index === action.payload
  );

  let newItem = [];

  state.cartData[cartIndex].quantity += 1;
  const updateData = state.cartData.map((item, index) => {
    return cartIndex === index ? { ...item } : item;
  });
  newItem = updateData;
  return newItem;
};

const decreseQuantity = (state, action) => {
  const cartIndex = state.cartData.findIndex(
    (item, index) => index === action.payload
  );

  let newItem = [];

  const quantity = state.cartData[cartIndex].quantity;
  if (quantity > 1) {
    const updateQuantity = (state.cartData[cartIndex].quantity -= 1);
    const updateData = state.cartData.map((item, index) => {
      return cartIndex === index ? { ...item, ...updateQuantity } : item;
    });
    newItem = updateData;
    return newItem;
  } else{
    let filterItem=state.cartData.filter((item,index)=>(index!==cartIndex))
    newItem=filterItem;
    return newItem
  }
};

const emptyCartData = (state, action) => {
  return (state.cartData = []);
};

const calculateTotalPrice = (item) => {
  let price = 0;
  item.map(
    (product) => (price += product.product.totalPrice * product.quantity)
  );

  return price;
};

const calculateDiscountedPrice = (item) => {
  let price = 0;
  item.map(
    (product) => (price += product.product.discountedPrice * product.quantity)
  );

  return price;
};

const totalItems = (item) => {
  let items = 0;
  item.map((product) => {
    return (items += product.quantity);
  });
  return items
};

const generateFinalState = (state, item) => {
  return {
    ...state,
    cartData: item,
    totalPrice: calculateTotalPrice(item),
    totalDiscountedPrice: calculateDiscountedPrice(item),
    totalItem:totalItems(item)
  };
};

export default cartItem;
