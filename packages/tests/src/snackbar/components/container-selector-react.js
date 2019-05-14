import React, { Component } from "react"; // eslint-disable-line no-unused-vars
import { Snackbar, FAB } from "polythene-react";

const pattern = (foreground, background) => ({
  backgroundImage: `radial-gradient(circle at 100% 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, ${foreground} 24%, ${background} 25%, ${background} 28%, ${foreground} 29%, ${foreground} 36%, ${background} 36%, ${background} 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, ${background} 10%, ${foreground} 11%, ${foreground} 23%, ${background} 24%, ${background} 30%, ${foreground} 31%, ${foreground} 43%, ${background} 44%, ${background} 50%, ${foreground} 51%, ${foreground} 63%, ${background} 64%, ${background} 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, ${background} 5%, ${foreground} 6%, ${foreground} 15%, ${background} 16%, ${background} 20%, ${foreground} 21%, ${foreground} 30%, ${background} 31%, ${background} 35%, ${foreground} 36%, ${foreground} 45%, ${background} 46%, ${background} 49%, transparent 50%, transparent)`,
  backgroundSize: "100px 50px"
});

const iconPlus = <svg width="24" height="24" viewBox="0 0 24.00 24.00" enableBackground="new 0 0 24.00 24.00"><path fill="#000000" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 18.9994,12.998L 12.9994,12.998L 12.9994,18.998L 10.9994,18.998L 10.9994,12.998L 4.99936,12.998L 4.99936,10.998L 10.9994,10.998L 10.9994,4.99805L 12.9994,4.99805L 12.9994,10.998L 18.9994,10.998L 18.9994,12.998 Z "/></svg>;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needsDisplay: 0,
    };
    this.updateNeedsDisplay = this.updateNeedsDisplay.bind(this);
  }

  updateNeedsDisplay(count) {
    this.setState({ needsDisplay: count });
  }

  render() {
    const { id, buttonGroup: ButtonGroup, variations, spawn, position, foreground, background, tone } = this.props;
    const backgroundStyle = Object.assign({}, pattern(foreground, background), {
      height: "220px",
      overflow: "hidden",
      position: "relative",
      marginTop: "15px"
    });
    const containerSelectorId = `bottom_container_${spawn}`;
    return (<div>
      <ButtonGroup
        id={id}
        variations={variations.map(opts =>
          Object.assign(
            {},
            opts,
            {
              tone,
              containerSelector: `#${containerSelectorId}`,
            }
          ))}
        spawn={spawn}
        position={position}
        needsDisplay={() => this.updateNeedsDisplay(this.state.needsDisplay + 1)}
      />
      <div
        style={backgroundStyle}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
          id={containerSelectorId}
        >
          <FAB
            className="self-end"
            icon={{ svg: { content: iconPlus } }}
            shadowDepth={1}
            style={{
              margin: "0 16px 16px 0"
            }}
          />
          <Snackbar
            spawn={spawn}
            position={position}
          />
        </div>
      </div>
    </div>);
  }
}
