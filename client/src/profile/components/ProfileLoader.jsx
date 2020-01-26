import { connect } from 'react-redux';
import { ApiDataLoader } from 'components/data-loader/ApiDataLoader';
import { fetchProfile } from '../profile.actions';
import { getProfileFetchStatus } from '../profile.selectors';

const mapStateToProps = state => ({ status: getProfileFetchStatus(state) });
const mapDispatchToProps = { fetchData: fetchProfile };

export const ProfileLoader = connect(mapStateToProps, mapDispatchToProps)(ApiDataLoader);
