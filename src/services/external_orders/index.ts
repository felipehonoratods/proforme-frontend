import api from "../api";
import { ExternalOrder } from "./interface";

const url = "external_orders";

const list = async () => {
  try {
    const { data } = await api.get<ExternalOrder[]>(url + "/list");
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const create = async (payload: ExternalOrder) => {
    try {
        const { data } = await api.post(`${url}/create`, payload);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const update = async (payload: ExternalOrder) => {
    try {
        const { data } = await api.put(`${url}/update/${payload.id}`, payload);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const deleteExternalOrder = async (id: string) => {
    try {
        const { data } = await api.delete(`${url}/${id}`);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

const externalOrdersService = {
  list,
  create,
  update,
  deleteExternalOrder
};

export default externalOrdersService;
