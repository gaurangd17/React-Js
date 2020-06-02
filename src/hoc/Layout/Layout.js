import React, {Component} from 'react'
import {connect} from 'react-redux'

import Aux from '../Auxx/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SIdeDrawer'

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    SideDrawerCloseHandler = () =>{
        this.setState({
            showSideDrawer : false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    }

  render(){
    return(
        <Aux>
        <Toolbar
            authenticated={this.props.isAuthenticated} 
            drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
            authenticated={this.props.isAuthenticated} 
            open={this.state.showSideDrawer}
            closed={this.SideDrawerCloseHandler}/>
        <main className = {classes.Content}>
            {this.props.children}
        </main>
    </Aux>
    )
  }   
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);