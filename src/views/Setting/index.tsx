import React, { memo, useEffect, useState, useRef } from 'react';
import Container from '@com/Container';
import { todoApi } from '@/services/todo'

const View: React.FC = (props) => {

  const { data, error, isLoading } = todoApi.useGetAdvertiseQuery('advertise')
  
  useEffect(()=>{
    console.log(data)
  },[isLoading])
  return (
    <React.Fragment>
      <Container>
        <div>dsaSettingasdfa</div>
        
      </Container>
    </React.Fragment>
    
  )
}
export default View;