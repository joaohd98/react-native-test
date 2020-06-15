import React from 'react';
import {connect} from 'react-redux';
import {Store} from 'redux';

class Input extends React.Component<{store: Store}> {
  render() {
    return <></>;
  }
}


const mapStateToProps = (state: any) => {
  return {};
}


export const GuessWordScreenInput = connect(mapStateToProps)(Input);

