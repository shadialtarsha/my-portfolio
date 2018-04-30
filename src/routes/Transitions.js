import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const childFactoryCreator = props => child => React.cloneElement(child, props);

const Transitions = ({ transition = {}, duration = 1100, pageKey, children }) =>
  pageKey ? (
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
        {children}
      </CSSTransition>
    </TransitionGroup>
  ) : (
    <div>{children}</div>
  );

export default Transitions;
