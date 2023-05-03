const initialStore = {
    product: [],
    basket: []
}
export const Reducer = (state = initialStore, action) => {
    switch (action.type) {
        case "GET_PRODUCT" :
            return {...state, product: action.payload}

        case "ADD_TO_BASKET":
            let bas = state.basket.find(el => el.id === action.payload.id)
            if (bas) {
                return {...state, basket: state.basket.map((el) => el.id === bas.id ? {...el, count: el.count + 1} : 1)}
            } else {
                return {...state, basket: [...state.basket,{...action.payload ,count: 1}]}
            }
        default:
            return state

    }
}