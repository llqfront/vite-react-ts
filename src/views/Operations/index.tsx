import React, { memo, useEffect, useState, useRef } from 'react';
import Container from '@com/Container';
import type { RootState } from '@/stores';
import { useSelector, useDispatch } from 'react-redux'

const View: React.FC = (props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <React.Fragment>
      <Container>
        <div>dsaf运{count}营sdfa</div>
      </Container>
    </React.Fragment>
    
  )
}
export default View;