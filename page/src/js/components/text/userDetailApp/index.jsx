import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userAction from "../../../action/user/index"
import $ from "jquery"
class UserDetailApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "a":"a"
        }
    }
    componentWillMount(){
        const {actions} = this.props
        console.log(this.props)
        // actions.setUser({
        //     user:'1',
        //     userById: "a"
        // })
        this.setState({
            "a":""
        })
        console.log(this.props)
    }
    render(){
        return(
            <div>
                user{this.props.user}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>({
    actions:bindActionCreators(userAction,dispatch)
})
const mapStateToProps = state =>({

    user:state.user.user,
    userById:state.user.userById

})
export default connect(mapStateToProps,mapDispatchToProps)(UserDetailApp);