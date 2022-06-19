import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAIL, BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS, BOOK_DETAILS_FAIL } from "../constants/bookConstants"

// change books to booksdata 
export const bookListReducer = (state = { products: [] }, action) => {
    switch(action.type){
        case BOOK_LIST_REQUEST:
            return { loading: true, products: [] }
        case BOOK_LIST_SUCCESS:
            return { loading: false, products: action.payload }
            case BOOK_LIST_FAIL:
                return { loading: false, error: action.payload }
            default:
                return state
    }
}

export const bookDetailsReducer = (state = { product: { genre: [], awards: [] } }, action) => {
    switch(action.type){
        case BOOK_DETAILS_REQUEST:
            return { loading: true, ...state }
        case BOOK_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
            case BOOK_DETAILS_FAIL:
                return { loading: false, error: action.payload }
            default:
                return state
    }
}