import React from 'react';
import { shallow } from 'enzyme';
import { Header, PageLogo, PageNavBar } from 'core/components';

describe('Header component', () => {
  const signOff = () => {};

  it('should render only logo for an anonymous user', () => {
    const isUserLoggedIn = false;
    const wrapper = shallow(<Header signOff={signOff} isUserLoggedIn={isUserLoggedIn} />);
    expect(wrapper.find(PageLogo)).toHaveLength(1);
    expect(wrapper.find(PageNavBar)).toHaveLength(0);
  });

  it('should render logo navbar when user is logged in', () => {
    const isUserLoggedIn = true;
    const wrapper = shallow(<Header signOff={signOff} isUserLoggedIn={isUserLoggedIn} />);
    expect(wrapper.find(PageLogo)).toHaveLength(1);
    expect(wrapper.find(PageNavBar)).toHaveLength(1);
  });
});
