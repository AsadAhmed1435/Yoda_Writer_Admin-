// Combining all the repositories together

import AuthRepository from "./AuthRepository";
import CountryRepository from "./CountryRepository";
import DashboardRepository from "./DashboardRepository";
import AllOrdersRepository from "./AllOrdersRepository";
import CategoryRepository from "./CategoryRepository";
const repositories = {
    auth: AuthRepository,
    country: CountryRepository,
    dashboardRepo: DashboardRepository,
    category: CategoryRepository,
    allOrders: AllOrdersRepository,
};
export const RepositoryFactory = {
    get: (name) => repositories[name],
};
