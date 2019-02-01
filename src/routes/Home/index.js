import React, {Component} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Body from './Body';

class Home extends Component{
    render(){
        return(
            <section>
                <Header history={this.props.history}/>
                <Body/>
                <Footer/>                                
            </section>
        );
    }
}

export default Home;