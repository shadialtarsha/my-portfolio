import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const childFactoryCreator = props => child => React.cloneElement(child, props);

const Transitions = ({ transition = {}, duration = 2000, pageKey, children }) => (
  <TransitionGroup
    component={null}
    childFactory={childFactoryCreator({
      classNames: {
        appearActive: 'pageLoad-appear-active',
        ...transition,
      },
      timeout: duration,
    })}
  >
    <CSSTransition appear component={null} key={pageKey} timeout={duration}>
      <div>{children}</div>
    </CSSTransition>
  </TransitionGroup>
);

export default Transitions;
