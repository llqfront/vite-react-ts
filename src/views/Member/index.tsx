import React, { memo, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/stores';
import { counterSlice } from '@/features/actions';
import Container from '@com/Container';

const View: React.FC = (props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const { decrement, increment } = counterSlice.actions;
  return (
    <React.Fragment>
      <Container>
        <div>dsafMemberasdfa</div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </Container>
    </React.Fragment>
  )
}
export default View;