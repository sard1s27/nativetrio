//  json-server -H 0.0.0.0 -watch db.json -p 3001 -d 2000  //
//          just for reference ^^^^^^^^^^^^^^ //


import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
import { GAMES } from '../shared/games';

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
}

export default Main;