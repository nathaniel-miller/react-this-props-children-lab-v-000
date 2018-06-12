import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const decorations = React.Children.map(this.props.children, theme => {
      return (
        <div className={ this.props.theme }>{ theme }</div>
      );
    });

    return(
      <div>
        { decorations }
      </div>
    );
  }
}