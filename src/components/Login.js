import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import client from "../simpleClient"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state
    return (
      <Mutation
        client={client}
        mutation={LOGIN_MUTATION}
        variables={{ email, password }}
        onCompleted={data => this._confirm(data)}
      >
        {(mutation, { error }) => (
          <div>
            <h4>Login</h4>
            {error && <Alert variant={"danger"}>Login failed</Alert>}
            <div>
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                onKeyPress={event => this.handleKeyPress(event, mutation)}
                type="text"
                placeholder="Your email address"
              />
              <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                onKeyPress={event => this.handleKeyPress(event, mutation)}
                type="password"
                placeholder="Password"
              />
            </div>
            <Button onClick={mutation}>
              {'login'}
            </Button>
          </div>
        )}
      </Mutation>
    )
  }
  handleKeyPress = (event, mutation) => {
    if (event.key === 'Enter') {
      mutation()
    }
  }
  _confirm = data => {
    const { token } = data.login
    localStorage.setItem(AUTH_TOKEN, token)
    window.location.href = "/"
    // this.props.history.push('/')
  }
}

export default Login
