import { ADDRESSES, CARD, DELIVERY } from "../user_data/user_data.js";
import { PRODUCTS } from "../product_data/products.js";

export const data = {
    productId: PRODUCTS.appleJuice.id,
    productQuantity: 1,
    address: ADDRESSES._1,
    paymentMethod: CARD.monoBank,
    deliveryMethod: DELIVERY.oneDayDelivery
}