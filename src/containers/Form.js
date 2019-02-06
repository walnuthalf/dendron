import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from '../components/Button';
import { sendMessage, bootstrapMessage } from '../actions';

const Wrapper = styled.div`
  padding: 1px;
  height: 30vh;
  padding-right: 32px;
  box-sizing: border-box;
  background-image: url('/img/bitmap.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 99%;
`;

const Head = styled.h2`
  font-size: 30px;
  color: #333333;
  font-weight: 400;
  margin-bottom: 15px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px #dedede;
  min-height: 80px;
  padding: 14px 17px;
  box-sizing: border-box;
  font-size: 14px;
  resize: none;
  outline: none;
`;


class Form extends Component {

  componentDidMount() {
    const { bootstrapMessage } = this.props;
    bootstrapMessage();
  }

  state = {
    textValue: '',
  }

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  }

  handleSendMessage = () => {
    const { sendMessage } = this.props;
    const { textValue } = this.state;

    if (!textValue.length) return null;

    sendMessage(textValue);
    this.setState({ textValue: '' });
  }

  handleKeyDown = (e) => {
    if ((e.keyCode === 13 || e.keyCode === 10) && (e.ctrlKey || e.metaKey)) {
      this.handleSendMessage();
    }
  }

  render() {
    const { textValue } = this.state;

    return (
      <Wrapper>
        <Head>Чат</Head>
        <Textarea
          onKeyDown={ this.handleKeyDown }
          value={ textValue }
          onChange={ this.handleChange }
          placeholder="Сообщение"
        />
        <Button
          onClick={ this.handleSendMessage }
          disabled={ !textValue.length }
        >
          Отправить
        </Button>
      </Wrapper>
    );
  }
}

export default connect(null, { sendMessage, bootstrapMessage })(Form);
