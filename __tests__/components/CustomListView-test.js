import React from 'react'
import { shallow, render } from 'enzyme';
import { expect } from 'chai'
import { CustomListView } from '../../src/components/common/CustomListView';
import mockData from '../../__mocks__/property-list.json'
import { Text, View } from 'react-native';

const SimpleListItem = ({ title }) => (
    <View>
        <Text>
            {title}
        </Text>
    </View>
)

describe('CustomListView', () => {
    it('renders the same number of rows as a given list of data', () => {
        const list = shallow(<CustomListView data={mockData} listItemView={SimpleListItem} />)
        expect(list.props().dataSource.rowIdentities[0].length).equals(mockData.length);
    })
    it('renders each row with the expected list item view', () => {
        const list = shallow(<CustomListView data={mockData} listItemView={SimpleListItem} />)
        expect(list.exists(SimpleListItem)).equals(true);
    })
})