import React, { FC } from 'react';
import { Color } from '../../interfaces';
import Tile from './Tile';

type Props = {
  tiles: Color[];
};

const Face: FC<Props> = ({ tiles }) => (
  <div className='flex flex-wrap w-[240px] h-[240px]'>
    {tiles.map((color, index) => (
      <Tile key={index} color={color} index={index} />
    ))}
  </div>
);

export default Face;
