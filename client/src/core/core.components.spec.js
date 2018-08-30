import React from 'react';
import { shallow } from 'enzyme';
import { Header, PageLogo, PageNavBar } from './components';

describe('Header component', () => {
  it('should render only logo for an anonymous user', () => {
    const isUserLoggedIn = false;
    const onUserLoggedOut = () => {};
    const wrapper = shallow(<Header onUserLoggedOut={onUserLoggedOut} isUserLoggedIn={isUserLoggedIn} />);
    expect(wrapper.find(PageLogo)).toHaveLength(1);
    expect(wrapper.find(PageNavBar)).toHaveLength(0);
  });

  it('should render logo navbar when user is logged in', () => {
    const isUserLoggedIn = true;
    const onUserLoggedOut = () => {};
    const wrapper = shallow(<Header onUserLoggedOut={onUserLoggedOut} isUserLoggedIn={isUserLoggedIn} />);
    expect(wrapper.find(PageLogo)).toHaveLength(1);
    expect(wrapper.find(PageNavBar)).toHaveLength(1);
  });
});
