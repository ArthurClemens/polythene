import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import routes from "./routes";

class OnMatch extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname === "/") {
      this.scrollTop = document.scrollingElement.scrollTop;
    }
    if (this.props.location.pathname === "/") {
      document.scrollingElement.scrollTop = this.scrollTop;
      document.title = "Polythene Components for React";
    } else {
      window.scrollTo(0, 0);
      const routeData = routes.find(o => o.path === this.props.location.pathname);
      document.title = `Polythene: ${routeData.name}`;
    }
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(OnMatch);
