import React, { Component } from 'react';
import { ListView } from 'react-native';

class CustomListView extends Component {
    constructor(props) {
        super(props);

        // Initialize data source
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // Add it to the initial state
        this.state.dataSource = ds.cloneWithRows(props.data);
    }

    render() {
        const { listItemView } = this.props
        const { dataSource } = this.state
        return (
            <ListView
                dataSource={dataSource}
                renderRow={listItemView}
            />
        );
    }
}

export default CustomListView;