import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.scss';
import AppBar from 'material-ui/AppBar';

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <AppBar
                    title="React Bootstrap"
                />
            </div>
        );
    }
}

export default CSSModules(Dashboard, style);
