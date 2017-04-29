import React from 'react';
import { Button, Form, Input, DateInput, Spinner, util } from 'react-lightning-design-system';

export default class App extends React.Component {
  // onClick(e) {
    // this.props.controller.greeting((result, event) => {
      // console.log('result:', result);
      // console.log('event:', event);
    // });
  // }

  render() {
    return (
      <div>
        <h2 className="slds-m-vertical--medium">Form Inline</h2>
        <Form type="inline">
          <Input label="Text Field #1" type="text" placeholder="Input text here" />
          <DateInput label="DateInput #1" defaultValue="2015-12-24" required />
          <Button type="brand" onClick={this.props.onClick}>Submit</Button>
          <Button type="destructive" onClick={this.props.onClickError}>Submit(Error)</Button>
        </Form>
        {this.props.loading ? <Spinner type="brand" container size="large" /> : null}
      </div>
    );
  }
}
