import React, {Component} from 'react';
import Header from './header/header';
import View from './view/view';

class App extends Component {
    render () {
        return (
            <div>
                <Header title="Brickwall" />
                <View />
            </div>
        );
    }
}

export default App;