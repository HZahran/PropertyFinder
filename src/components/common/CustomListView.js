import React, { Component } from 'react';
import { ListView } from 'react-native';

class CustomListView extends Component {
    constructor(props) {
        super(props);

        // Initialize data source
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        // Add it to the initial state
        this.state = {
            dataSource: this.ds.cloneWithRows(props.data),
            data: props.data
        }
    }

    componentWillReceiveProps(newProps) {
        // Don't re-render if no change occured
        if (newProps.data === this.state.data) return

        this.setState({
            dataSource: this.ds.cloneWithRows(newProps.data),
            data: newProps.data
        })
    }

    renderRow = (data) => {
        const { listItemView } = this.props

        return React.createElement(listItemView, { ...data })
    }

    render() {
        const { dataSource } = this.state
        return (
            <ListView
                dataSource={dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

export { CustomListView };