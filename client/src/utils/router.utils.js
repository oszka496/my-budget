import { useLocation } from 'react-router-dom';

export function useURLSearchParams() {
  return new URLSearchParams(useLocation().search);
}

export function useCategoryFromUrl() {
  const query = useURLSearchParams();
  return query.get('category');
}
