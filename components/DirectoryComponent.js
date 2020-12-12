import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { GAMES } from '../shared/games';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: GAMES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: { uri: baseUrl + item.image }}}
                    onPress={() => navigate('GameInfo', { gameId: item.id })}
                />
            );
        };

        return (
            <FlatList
                data={this.state.games}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;
