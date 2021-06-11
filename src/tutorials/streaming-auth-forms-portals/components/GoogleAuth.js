import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from "../actions";

class GoogleAuth extends React.Component {
    // was removed when redux was added
    // state = {isSignedIn: null};

    // we want to load google api only once - that's why we put it in componentDidMount() f()
    componentDidMount() {
        // cb() will be called only when "client:auth2" part will be loaded
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ // async f()
                clientId: '110629735077-amn2i8ms5a04ml6qa9fud8rpn705a86g.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get()) // initial auth status while opening Page

                this.setState({isSignedIn: this.auth.isSignedIn.get()}); // initial auth status while opening Page
                this.auth.isSignedIn.listen(this.onAuthChange); // listens to further auth status changes and calls onAuthChange() f() when status changes
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            // dispatching events, that were passed in connect() f()
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
        // before redux was added: this.setState({isSignedIn: this.auth.isSignedIn.get()})
        // because before we were managing state via componentState, but not redux one
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        // isSignedIn - is from mapStateToProps() f()
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick}
                        className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        }
        return (
            <button onClick={this.onSignInClick}
                    className="ui red google button">
                <i className="google icon"/>
                Sign In
            </button>
        )
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
}

// 1-st argument to connect() f() - is mapStateToProps(). If we don't have it yet - put 'null' as 1-st arg
// 2-nd argument - action creators Object
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);

// to signin from UI console:
// gapi.auth2.getAuthInstance().signIn();
