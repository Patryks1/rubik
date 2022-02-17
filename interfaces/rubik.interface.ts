export type Color = 'red' | 'green' | 'blue' | 'yellow' | 'white' | 'orange';
export type FaceDirection = 'F' | 'L' | 'R' | 'U' | 'D' | 'B';

export interface IMoveInstruction {
  toFace: FaceDirection;
  toTileIndex: number;
  fromFace: FaceDirection;
  fromTileIndex: number;
}

export interface IMoves {
  [x: string]: IMoveInstruction[];
}

export interface IRubikFace {
  tiles: Color[];
  faceDirection: FaceDirection;
}
