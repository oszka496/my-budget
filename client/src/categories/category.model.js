import PropTypes from 'prop-types';

const CategoryModel = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export default CategoryModel;
