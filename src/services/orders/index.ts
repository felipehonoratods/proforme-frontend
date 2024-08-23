import api from "../api";
import { Order, OrderCreated } from "./interface";

const url = "/orders";

const list = async (finished: boolean) => {
    try {
        const { data } = await api.get<Order[]>(url + '/list' + `?finished=${finished}`);
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

const deleteOrder = async (id: string) => {
    try {
        const { data } = await api.delete(`${url}/${id}`);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}


const ordersService = {
    list,
    create,
    update,
    deleteOrder
}

export default ordersService;