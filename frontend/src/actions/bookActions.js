import axios from 'axios'
import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAIL, BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS, BOOK_DETAILS_FAIL } from "../constants/bookConstants"

export const listBooks = () => async (dispatch) => {
    try {
        dispatch({ type: BOOK_LIST_REQUEST })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: BOOK_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
       dispatch({
        type: BOOK_LIST_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
       }) 
    }
}

export const listBookDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BOOK_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type: BOOK_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
       dispatch({
        type: BOOK_DETAILS_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
       }) 
    }
}