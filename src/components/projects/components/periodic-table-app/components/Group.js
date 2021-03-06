import React from 'react';
import { Element } from './Element';

export const Group = ({ elements, setModalElement }) => {

  const group = elements.map(({
    mass,
    number,
    group,
    name,
    state,
    symbol,
    yearDiscovered,
    wiki
  }, index) => {

    return <Element key={`${name}-${index}`} mass={mass} number={number} group={group} name={name} state={state} symbol={symbol} yearDiscovered={yearDiscovered} wiki={wiki} setModalElement={setModalElement} />

  })

  return (
    <div className="group">{group}</div>
  )
}