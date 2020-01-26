import * as requests from 'api/requests';
import { category } from 'api/urls';

export const fetchCategories = () => requests.get(category.list());
