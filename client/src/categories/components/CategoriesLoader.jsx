import { connect } from 'react-redux';
import { ApiDataLoader } from 'components/data-loader';
import { categoryActions } from '../category.slice';
import { getCategoriesFetchStatus } from '../category.selectors';

const mapStateToProps = state => ({
  status: getCategoriesFetchStatus(state),
});

const mapDispatchToProps = {
  fetchData: categoryActions.fetchStart,
};

export const CategoriesLoader = connect(mapStateToProps, mapDispatchToProps)(ApiDataLoader);
