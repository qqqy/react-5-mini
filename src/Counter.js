import React, { Component } from 'react';

import {increment, undo} from './ducks/countertest';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    const {increment, currentValue, undo} = this.props;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => increment(-1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => increment(-5)}
            >
              -5
            </button>


            <br />
            <button
              className="counter__button undo"
              onClick={() => undo()}
            >
              Undo
            </button>

            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

function filterProps(state){
  return state;
}

const actionsToDispatch = {
  increment: increment,
  undo,
}

const connectedCounter = connect(filterProps, actionsToDispatch)

console.log(connectedCounter)

export default connectedCounter(Counter);
