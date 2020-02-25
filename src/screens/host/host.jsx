import React from 'react';
import { withRouter } from 'react-router-dom';

class HostPage extends React.Component {
  constructor(props){
    super(props);
    
    this.goToHome = this.goToHome.bind(this);
  }
  render() {
    return (
      <div className="host-page">
        Host Page is working
        <button onClick={this.goToHome} >Hola</button>
    </div>
    )
  }

  goToHome(){
    this.props.history.push('/');
  }
}

export default withRouter(HostPage);