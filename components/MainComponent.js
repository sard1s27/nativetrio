import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
import GameInfo from './GameInfoComponent';
import { View, Platform } from 'react-native';
import { GAMES } from '../shared/games';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='directory'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const GameInfoNavigator = createStackNavigator(
    {
        GameInfo: { screen: GameInfo }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='gameinfo'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }    
        }
    },
    {
        Directory: {
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
    },
    {
        GameInfo: {
            screen: GameInfoNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {

        constructor(props) {
            super(props);
            this.state = {
                games: GAMES
            };
        }

        render() {
            return <Directory games={this.state.games} />;
        }
        render() {
            return (
                <View
                    style={{
                        flex: 1, 
                        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                    }}>
                    <AppNavigator />
                </View>
            );
        }
    }
    const AppNavigator = createAppContainer(MainNavigator)


    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        drawerHeader: {
            backgroundColor: '#5637DD',
            height: 140,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row'
        },
        drawerHeaderText: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold'
        },
        drawerImage: {
            margin: 10,
            height: 60,
            width: 60
        },
        stackIcon: {
            marginLeft: 10,
            color: '#fff',
            fontSize: 24
        },
    });
        


export default Main;