import React, { memo, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/stores';
import { counterSlice } from '@/features/actions';
import Container from '@com/Container';
import { pokemonApi } from '@/services/pokemon'
const View: React.FC = (props) => {
  // const { data, error, isLoading } = pokemonApi.useGetPokemonByNameQuery('bulbasaur')
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()
  // const { decrement, increment } = counterSlice.actions;
  return (
    <React.Fragment>
      <Container>
        {/* <div>dsafMemberasdfa</div>
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
        </button>*/} 
        {/*error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data?.species.name}</h3>
          <img src={data?.sprites.front_shiny} alt={data?.species.name} />
        </>
      ) : null*/}
      </Container>
    </React.Fragment>
  )
}
export default View;