import axios, {AxiosResponse} from "axios";
import {IArray} from "../models/IArray";

export default class TableService {
    static async getUsers(): Promise<AxiosResponse<IArray[]>> {
        return axios.get<IArray[]>('https://technicsklevzhits.herokuapp.com/array')
    }
}