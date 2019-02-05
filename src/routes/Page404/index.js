import React, {Component} from 'react';
import Header from '../../components/Header';
import './page404.css';

class Page404 extends Component{

    componentWillMount(){
        document.title = "404 | Paris";
    }

    render(){
        return(
            <section>
                <Header history={this.props.history} />
                <section className="text-not-found">
                    <h3>Lo sentimos, esta página no está disponible.</h3>
                </section>
            </section>
        );
    }

}

export default Page404;
