import React from 'react'

import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()})

describe('<NavigationItems/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems/>)
    })

    it('Should render two <NavigatinItem /> elements if not Authenticated', () => {
        // const wrapper = shallow(<NavigationItems/>)
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    it('Should render three <NavigatinItem /> elements if Authenticated', () => {
        // const wrapper = shallow(<NavigationItems isAuthenticated/>)
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it('SHould have an exact logout button', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true)
    })
})