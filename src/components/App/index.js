import React, { Component } from 'react';
import App from './App';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.handleCommentsButtonClick = this.handleCommentsButtonClick.bind(this);
    this.handleOverviewButtonClick = this.handleOverviewButtonClick.bind(this);

    this.state = {
      isOverviewPanelExpanded: false,
      isCommentsPanelExpanded: false,
    };
  }

  handleOverviewButtonClick() {
    this.setState(state => ({
      isOverviewPanelExpanded: !state.isOverviewPanelExpanded
    }));
  }

  handleCommentsButtonClick() {
    this.setState(state => ({
      isCommentsPanelExpanded: !state.isCommentsPanelExpanded
    }));
  }

  render() {
    const {
      isCommentsPanelExpanded,
      isOverviewPanelExpanded,
    } = this.state;

    return (
      <App
        isCommentsPanelExpanded={isCommentsPanelExpanded}
        isOverviewPanelExpanded={isOverviewPanelExpanded}
        onCommentsButtonClick={this.handleCommentsButtonClick}
        onOverviewButtonClick={this.handleOverviewButtonClick}
      />
    );
  }
}

export default AppContainer;
