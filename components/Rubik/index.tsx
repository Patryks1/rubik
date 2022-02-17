import React, { FC, useState } from 'react';
import { RUBIK_INITIAL_STATE } from '../../constants';
import { Color, FaceDirection, IRubikFace } from '../../interfaces';
import Face from './Face';
import Controls from './Controls';

const Rubik: FC = () => {
  const [cube, setCube] = useState<IRubikFace[]>(RUBIK_INITIAL_STATE);

  const getRubikTiles = (faceDirection: FaceDirection): Color[] => {
    const face = cube.find((x) => x.faceDirection === faceDirection);
    return face?.tiles ?? [];
  };

  return (
    <>
      <div data-testid='rubik-cube-container'>
        <div className='ml-[240px]'>
          <Face tiles={getRubikTiles('U')} />
        </div>
        <div className='flex'>
          <Face tiles={getRubikTiles('L')} />
          <Face tiles={getRubikTiles('F')} />
          <Face tiles={getRubikTiles('R')} />
          <Face tiles={getRubikTiles('B')} />
        </div>
        <div className='ml-[240px]'>
          <Face tiles={getRubikTiles('D')} />
        </div>
      </div>

      <Controls {...{ cube, setCube }} />
    </>
  );
};

export default Rubik;
