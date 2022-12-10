import React, { memo, useEffect, useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '@/stores/hooks';
import Container from '@com/Container';
import { counterSlice } from '@/features/actions';
const View: React.FC = (props) => {
  // The `state` arg is correctly typed as `RootState` already
  /***
   * 如果 使用 useAppSelector  无需 state: RootState
   */
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const { decrement, increment } = counterSlice.actions;
  return (
    <React.Fragment>
      <Container>
        <div>ProdS{count}ervice</div>
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