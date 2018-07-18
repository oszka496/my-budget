import PropTypes from 'prop-types';

const CategoryModel = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export default CategoryModel;
