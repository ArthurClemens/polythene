import { Component } from "react";
import { renderer as h, MaterialDesignProgressSpinner as Spinner, Button, Slider } from "polythene-react";

const STEP_DURATION = 2000;
const MAX_VALUE = 1000;

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
    this.step = this.step.bind(this);
    this.updatePercentage = this.updatePercentage.bind(this);
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  updatePercentage(percentage) {
    if (this._mounted) {
      this.setState({ percentage });
    }
  }

  step(timestamp) {
    if (!this._start) {
      this._start = timestamp;
    }
    const progress = timestamp - this._start;
    this.setState({
      percentage: Math.min(1, 1 / STEP_DURATION * progress)
    });
    if (progress <= STEP_DURATION) {
      window.requestAnimationFrame(this.step);
    }
  }

  render() {
    const percentage = this.state.percentage;
    return h("div", [
      h("div",
        {
          style: {
            display: "flex",
            width: "100%",
            margin: "0 0 20px 0"
          }
        },
        h(Slider, {
          min: 0,
          max: MAX_VALUE,
          step: 0,
          value: percentage * MAX_VALUE,
          permanent: true,
          onChange: ({ value }) => this.updatePercentage(value / MAX_VALUE),
          style: {
            display: "flex",
            alignItems: "center"
          },
          after: h(Spinner, Object.assign(
            {},
            {
              show: true,
              percentage,
              class: "self-center"
            }
          ))
        })
      ),
      h(Button, {
        raised: true,
        label: "Run",
        events: {
          onClick: () => (
            this._start = null,
            window.requestAnimationFrame(this.step)
          )
        }
      })
    ]);
  }
}
