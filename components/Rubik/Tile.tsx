import React, { FC } from 'react';
import { Color } from '../../interfaces';

type Props = {
  color: Color;
  index: number;
};

const Tile: FC<Props> = ({ color, index }) => (
  <div
    className='flex-[0_0_80px] h-[80px] w-[80px] border border-black'
    style={{ backgroundColor: color }}
    data-testid='tile-cell'>
    {index}
  </div>
);

export default Tile;
