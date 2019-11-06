import React from 'react';
import { isEmpty } from 'lodash';
import Data from './Data';
import ProgressLoader from './ProgressLoader';

class Home extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){
        fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-06&sortBy=publishedAt&apiKey=a2a391168f444629b011ab5607de01e7`)
        .then(response => response.json())
        .then(data=> !isEmpty(data) && this.setState({data:data.articles}))
        .catch(error => console.log(error))
        }

    render() {
        return (
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                {!this.state.data && <ProgressLoader  style={{height: '500px'}}/>}
                {this.state.data && <Data data={this.state.data}/>}
            </div>
        )
    }
}

export default Home
