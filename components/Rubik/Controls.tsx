import React, { FC } from 'react';
import Button from '../ui/Button';
import { cloneDeep } from '../../helpers';
import { MOVES } from '../../constants';
import { FaceDirection, IMoveInstruction, IRubikFace } from '../../interfaces';

type Props = {
  cube: IRubikFace[];
  setCube: (cube: IRubikFace[]) => void;
};

const Controls: FC<Props> = ({ cube, setCube }) => {
  const swapTiles = (
    toFace: FaceDirection,
    toTileIndex: number,
    fromFace: FaceDirection,
    fromTileIndex: number,
    tempRubik: IRubikFace[]
  ): void => {
    const fFace = cube.find((x) => x.faceDirection === toFace);
    const tFace = tempRubik.find((x) => x.faceDirection === fromFace);

    if (!fFace || !tFace) {
      return;
    }

    fFace.tiles[toTileIndex] = tFace.tiles[fromTileIndex];
  };

  const performMove = (moveInstructions: IMoveInstruction[]): void => {
    const tempCube = cloneDeep(cube);

    moveInstructions.map((x) => {
      swapTiles(x.toFace, x.toTileIndex, x.fromFace, x.fromTileIndex, tempCube);
    });
    
    setCube([...cube]);
  };

  const onClickRightCounterClockwise = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    performMove(MOVES.rightCounterClockwise);
  };

  const onClickRotateFront = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    performMove(MOVES.frontClockwise);
  };

  const onClickRotateUpClockwise = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    performMove(MOVES.upClockwise);
  };

  const onClickRotateBackCounterClockwise = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    performMove(MOVES.backCounterClockwise);
  };

  const onClickRotateLeftClockwise = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    performMove(MOVES.leftClockwise);
  };

  const onClickRotateDownCounterClockwise = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    performMove(MOVES.downCounterClockwise);
  };

  return (
    <div className='flex space-x-2 m-5' data-testid="controls-container">
      <Button onClick={onClickRotateFront}>F</Button>
      <Button onClick={onClickRightCounterClockwise}>R&apos;</Button>
      <Button onClick={onClickRotateUpClockwise}>U</Button>
      <Button onClick={onClickRotateBackCounterClockwise}>B&apos;</Button>
      <Button onClick={onClickRotateLeftClockwise}>L</Button>
      <Button onClick={onClickRotateDownCounterClockwise}>D&apos;</Button>
    </div>
  );
};

export default Controls;
