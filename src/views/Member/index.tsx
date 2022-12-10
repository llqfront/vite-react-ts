import React, { memo, useEffect, useState, useRef } from 'react';
import Container from '@com/Container';
import { RootState, AppThunk } from '@/store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/features/counter/counterSlice'


const View: React.FC = (props) => {
 
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
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