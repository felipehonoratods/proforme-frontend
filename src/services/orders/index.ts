import api from "../api";
import { Order, OrderCreated } from "./interface";

const url = "/orders";

const list = async () => {
    try {
        const { data } = await api.get<Order[]>(url + '/list');
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const create = async (payload: OrderCreated) => {
    try {
        const { data } = await api.post(`${url}/create`, payload);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const update = async (payload: OrderCreated) => {
    try {
        const { data } = await api.put(`${url}/update/${payload._id}`, payload);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}


const ordersService = {
    list,
    create,
    update
}

export default ordersService;