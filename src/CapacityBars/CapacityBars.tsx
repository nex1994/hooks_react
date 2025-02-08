import React from "react";

type Props = {
  bars: { from: number, to: number, isFull: boolean }[]
}

export const CapacityBars = React.memo(({ bars }: Props) => {
  console.log('render');
  return (
    <div>
      {bars.map(bar => {
        return (
          <div
            key={bar.from}
            style={{
              border: '1px solid black',
              padding: 5,
              background: bar.isFull ? 'green' : 'lightgray',
            }}
          >
            {bar.from}
            {' '}
            -
            {' '}
            {bar.to}
          </div>
        );
      })}
    </div>
  )
}); 