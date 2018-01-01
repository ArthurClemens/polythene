import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class OnMatch extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname === "/") {
      this.scrollTop = document.scrollingElement.scrollTop;
    }
    if (this.props.location.pathname === "/") {
      document.scrollingElement.scrollTop = this.scrollTop;
    } else {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(OnMatch);
