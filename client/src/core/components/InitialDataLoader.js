import { connect } from 'react-redux';
import { mergeActionStatuses } from 'utils/actions.utils';
import { currencyActions } from 'currencies/currency.reducer';
import { getCurrenciesFetchStatus } from 'currencies/currency.selectors';
import { ApiDataLoader } from 'components/data-loader';
import { fetchProfile } from 'profile/profile.actions';
import { getProfileFetchStatus } from 'profile/profile.selectors';


const mapStateToProps = state => ({
  status: mergeActionStatuses([
    getProfileFetchStatus(state),
    getCurrenciesFetchStatus(state),
  ]),
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(currencyActions.fetchStart());
    dispatch(fetchProfile());
  },
});

export const InitialDataLoader = connect(mapStateToProps, mapDispatchToProps)(ApiDataLoader);
