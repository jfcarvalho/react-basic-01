import React, {Component} from 'react';
import About from './AboutComponent'
import { LEADERS } from '../shared/leaders';

class AboutUS extends Component {
    render() {
        return (
        <div>
            <About leaders={LEADERS}/>
        </div>
        );
    }
}

export default AboutUS;