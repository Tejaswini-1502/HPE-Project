import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL } from '../constants/cartConstants'
// import winston from "winston";

// const logConfiguration = {
//     transports: [
//         new winston.transports.File({
//             level: 'info',
//             filename: 'orders.js'
//         })
//     ]
// };

// const logger = winston.createLogger(logConfiguration);

export const orderCreateReducer = (state = {}, action) => {
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }
        case ORDER_CREATE_SUCCESS:
            // logger.info(action.payload)
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}