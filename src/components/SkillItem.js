import React from 'react';
import { withRouter } from 'react-router-dom';

const createBackgroundColor = (percent, barColor) => {
  const increment = 360 / 100;
  const half = Math.round(100 / 2);
  let backgroundImage;
  if (percent < half) {
    const nextDeg = 90 + increment * percent;
    backgroundImage = `linear-gradient(90deg, #E0E0E0 50%, transparent 50%, transparent),
    linear-gradient(${nextDeg}deg, ${barColor} 50%, #E0E0E0 50%, #E0E0E0)`;
  } else {
    const nextDeg = -90 + increment * (percent - half);
    backgroundImage = `linear-gradient(${nextDeg}deg, ${barColor} 50%, transparent 50%, transparent),
      linear-gradient(270deg, ${barColor} 50%, #E0E0E0 50%, #E0E0E0)`;
  }
  return backgroundImage;
};

class SkillItem extends React.Component {
  componentDidMount() {
    console.log(this.props.history);
    const percentage = this.props.skill.percentage.split('%')[0];
    this.animateCircle(percentage);
  }

  animateCircle(percentage) {
    const duration = this.props.history.action === 'PUSH' ? 2800 : 1500;
    const circle = this.circleRef.current;
    circle.setAttribute('data-content', '0%');
    setTimeout(() => {
      let counter = 0;
      const intervalId = setInterval(() => {
        if (counter <= percentage) {
          circle.style.backgroundImage = createBackgroundColor(counter, '#61afef');
          circle.setAttribute('data-content', `${counter}%`);
          counter++;
        }
      }, percentage / 1000);
      setTimeout(() => {
        clearInterval(intervalId);
      }, 2000);
    }, duration);
  }

  circleRef = React.createRef();

  render() {
    return (
      <div className="content">
        <div className="group">
          <div ref={this.circleRef} className="circle" />
          <div className="circular-text">{this.props.skill.name}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(SkillItem);
