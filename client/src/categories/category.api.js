import * as requests from 'api-new/requests';
import { category } from 'api-new/urls';

export const fetchCategories = () => requests.get(category.list());
