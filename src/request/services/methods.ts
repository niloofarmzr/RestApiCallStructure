import Request from "../index.ts";
import {serviceUrls} from "./urls.ts";
import {Services, Users} from "../types";

const requestController = new Request();
export const fetchUsersService = async () => {
    return await requestController.get<Array<Users>>({url: serviceUrls[Services.GetUsers]});
}