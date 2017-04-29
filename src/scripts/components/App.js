import React from 'react';
import { Button, Form, Spinner, Toast } from 'react-lightning-design-system';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.errorMessage ?
          <Toast
            icon="warning"
            level="error"
            onClose={this.props.onCloseToast}
            alertTexture={false}
          >
            {this.props.errorMessage}
          </Toast> : null}
        <div className="slds-text-heading--large">JavaScript Remoting using Promise Example.</div>
        <Form type="inline">
          <Button type="brand" onClick={this.props.onClick}>Submit</Button>
          <Button type="destructive" onClick={this.props.onClickError}>Submit(Error)</Button>
        </Form>
        {this.props.loading ? <Spinner type="brand" container size="large" /> : null}
      </div>
    );
  }
}
