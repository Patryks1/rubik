import { IMoves, IRubikFace } from '../interfaces';

export const MOVES: IMoves = {
  upClockwise: [
    // Rotate the top face clockwise
    {
      toFace: 'U',
      toTileIndex: 0,
      fromFace: 'U',
      fromTileIndex: 6,
    },
    {
      toFace: 'U',
      toTileIndex: 1,
      fromFace: 'U',
      fromTileIndex: 3,
    },
    {
      toFace: 'U',
      toTileIndex: 2,
      fromFace: 'U',
      fromTileIndex: 0,
    },
    {
      toFace: 'U',
      toTileIndex: 3,
      fromFace: 'U',
      fromTileIndex: 7,
    },
    {
      toFace: 'U',
      toTileIndex: 5,
      fromFace: 'U',
      fromTileIndex: 1,
    },
    {
      toFace: 'U',
      toTileIndex: 6,
      fromFace: 'U',
      fromTileIndex: 8,
    },
    {
      toFace: 'U',
      toTileIndex: 7,
      fromFace: 'U',
      fromTileIndex: 5,
    },
    {
      toFace: 'U',
      toTileIndex: 8,
      fromFace: 'U',
      fromTileIndex: 2,
    },

    // Right to front
    {
      toFace: 'F',
      toTileIndex: 0,
      fromFace: 'R',
      fromTileIndex: 0,
    },
    {
      toFace: 'F',
      toTileIndex: 1,
      fromFace: 'R',
      fromTileIndex: 1,
    },
    {
      toFace: 'F',
      toTileIndex: 2,
      fromFace: 'R',
      fromTileIndex: 2,
    },

    // Back to right
    {
      toFace: 'R',
      toTileIndex: 0,
      fromFace: 'B',
      fromTileIndex: 0,
    },
    {
      toFace: 'R',
      toTileIndex: 1,
      fromFace: 'B',
      fromTileIndex: 1,
    },
    {
      toFace: 'R',
      toTileIndex: 2,
      fromFace: 'B',
      fromTileIndex: 2,
    },

    // Left to back
    {
      toFace: 'B',
      toTileIndex: 0,
      fromFace: 'L',
      fromTileIndex: 0,
    },
    {
      toFace: 'B',
      toTileIndex: 1,
      fromFace: 'L',
      fromTileIndex: 1,
    },
    {
      toFace: 'B',
      toTileIndex: 2,
      fromFace: 'L',
      fromTileIndex: 2,
    },

    // Front to left
    {
      toFace: 'L',
      toTileIndex: 0,
      fromFace: 'F',
      fromTileIndex: 0,
    },
    {
      toFace: 'L',
      toTileIndex: 1,
      fromFace: 'F',
      fromTileIndex: 1,
    },
    {
      toFace: 'L',
      toTileIndex: 2,
      fromFace: 'F',
      fromTileIndex: 2,
    },
  ],
  frontClockwise: [
    // Rotate front face
    {
      toFace: 'F',
      toTileIndex: 0,
      fromFace: 'F',
      fromTileIndex: 6,
    },
    {
      toFace: 'F',
      toTileIndex: 1,
      fromFace: 'F',
      fromTileIndex: 3,
    },
    {
      toFace: 'F',
      toTileIndex: 2,
      fromFace: 'F',
      fromTileIndex: 0,
    },
    {
      toFace: 'F',
      toTileIndex: 3,
      fromFace: 'F',
      fromTileIndex: 7,
    },
    {
      toFace: 'F',
      toTileIndex: 5,
      fromFace: 'F',
      fromTileIndex: 2,
    },
    {
      toFace: 'F',
      toTileIndex: 6,
      fromFace: 'F',
      fromTileIndex: 8,
    },
    {
      toFace: 'F',
      toTileIndex: 7,
      fromFace: 'F',
      fromTileIndex: 5,
    },
    {
      toFace: 'F',
      toTileIndex: 8,
      fromFace: 'F',
      fromTileIndex: 2,
    },

    // Left to Up
    {
      toFace: 'U',
      toTileIndex: 6,
      fromFace: 'L',
      fromTileIndex: 8,
    },
    {
      toFace: 'U',
      toTileIndex: 7,
      fromFace: 'L',
      fromTileIndex: 5,
    },
    {
      toFace: 'U',
      toTileIndex: 8,
      fromFace: 'L',
      fromTileIndex: 2,
    },

    // Left to Up
    {
      toFace: 'R',
      toTileIndex: 0,
      fromFace: 'U',
      fromTileIndex: 6,
    },
    {
      toFace: 'R',
      toTileIndex: 3,
      fromFace: 'U',
      fromTileIndex: 7,
    },
    {
      toFace: 'R',
      toTileIndex: 6,
      fromFace: 'U',
      fromTileIndex: 8,
    },

    // Right to Down
    {
      toFace: 'D',
      toTileIndex: 2,
      fromFace: 'R',
      fromTileIndex: 0,
    },
    {
      toFace: 'D',
      toTileIndex: 1,
      fromFace: 'R',
      fromTileIndex: 3,
    },
    {
      toFace: 'D',
      toTileIndex: 0,
      fromFace: 'R',
      fromTileIndex: 6,
    },

    // Down to Left
    {
      toFace: 'L',
      toTileIndex: 8,
      fromFace: 'D',
      fromTileIndex: 2,
    },
    {
      toFace: 'L',
      toTileIndex: 5,
      fromFace: 'D',
      fromTileIndex: 1,
    },
    {
      toFace: 'L',
      toTileIndex: 2,
      fromFace: 'D',
      fromTileIndex: 0,
    },
  ],
  leftClockwise: [
    // Back to Up
    {
      toFace: 'U',
      toTileIndex: 6,
      fromFace: 'B',
      fromTileIndex: 2,
    },
    {
      toFace: 'U',
      toTileIndex: 3,
      fromFace: 'B',
      fromTileIndex: 5,
    },
    {
      toFace: 'U',
      toTileIndex: 0,
      fromFace: 'B',
      fromTileIndex: 8,
    },

    // Up to Front
    {
      toFace: 'F',
      toTileIndex: 0,
      fromFace: 'U',
      fromTileIndex: 0,
    },
    {
      toFace: 'F',
      toTileIndex: 3,
      fromFace: 'U',
      fromTileIndex: 3,
    },
    {
      toFace: 'F',
      toTileIndex: 6,
      fromFace: 'U',
      fromTileIndex: 6,
    },

    // Front to Down
    {
      toFace: 'D',
      toTileIndex: 0,
      fromFace: 'F',
      fromTileIndex: 0,
    },
    {
      toFace: 'D',
      toTileIndex: 3,
      fromFace: 'F',
      fromTileIndex: 3,
    },
    {
      toFace: 'D',
      toTileIndex: 6,
      fromFace: 'F',
      fromTileIndex: 6,
    },

    // Front to Down
    {
      toFace: 'D',
      toTileIndex: 0,
      fromFace: 'F',
      fromTileIndex: 0,
    },
    {
      toFace: 'D',
      toTileIndex: 3,
      fromFace: 'F',
      fromTileIndex: 3,
    },
    {
      toFace: 'D',
      toTileIndex: 6,
      fromFace: 'F',
      fromTileIndex: 6,
    },

    // Up to Front
    {
      toFace: 'B',
      toTileIndex: 8,
      fromFace: 'D',
      fromTileIndex: 0,
    },
    {
      toFace: 'B',
      toTileIndex: 5,
      fromFace: 'D',
      fromTileIndex: 3,
    },
    {
      toFace: 'B',
      toTileIndex: 2,
      fromFace: 'D',
      fromTileIndex: 6,
    },

    // Rotate Face
    {
      toFace: 'L',
      toTileIndex: 0,
      fromFace: 'L',
      fromTileIndex: 6,
    },
    {
      toFace: 'L',
      toTileIndex: 1,
      fromFace: 'L',
      fromTileIndex: 3,
    },
    {
      toFace: 'L',
      toTileIndex: 2,
      fromFace: 'L',
      fromTileIndex: 0,
    },

    {
      toFace: 'L',
      toTileIndex: 3,
      fromFace: 'L',
      fromTileIndex: 7,
    },
    {
      toFace: 'L',
      toTileIndex: 5,
      fromFace: 'L',
      fromTileIndex: 1,
    },
    {
      toFace: 'L',
      toTileIndex: 6,
      fromFace: 'L',
      fromTileIndex: 8,
    },
    {
      toFace: 'L',
      toTileIndex: 7,
      fromFace: 'L',
      fromTileIndex: 5,
    },
    {
      toFace: 'L',
      toTileIndex: 8,
      fromFace: 'L',
      fromTileIndex: 2,
    },
  ],
  rightCounterClockwise: [
    // Down to Back
    {
      toFace: 'B',
      toTileIndex: 6,
      fromFace: 'D',
      fromTileIndex: 2,
    },
    {
      toFace: 'B',
      toTileIndex: 3,
      fromFace: 'D',
      fromTileIndex: 5,
    },
    {
      toFace: 'B',
      toTileIndex: 0,
      fromFace: 'D',
      fromTileIndex: 8,
    },

    // Front to Down
    {
      toFace: 'D',
      toTileIndex: 2,
      fromFace: 'F',
      fromTileIndex: 2,
    },
    {
      toFace: 'D',
      toTileIndex: 5,
      fromFace: 'F',
      fromTileIndex: 5,
    },
    {
      toFace: 'D',
      toTileIndex: 8,
      fromFace: 'F',
      fromTileIndex: 8,
    },

    // Up to Front
    {
      toFace: 'F',
      toTileIndex: 2,
      fromFace: 'U',
      fromTileIndex: 2,
    },
    {
      toFace: 'F',
      toTileIndex: 5,
      fromFace: 'U',
      fromTileIndex: 5,
    },
    {
      toFace: 'F',
      toTileIndex: 8,
      fromFace: 'U',
      fromTileIndex: 8,
    },

    // Up to Back
    {
      toFace: 'U',
      toTileIndex: 8,
      fromFace: 'B',
      fromTileIndex: 0,
    },
    {
      toFace: 'U',
      toTileIndex: 5,
      fromFace: 'B',
      fromTileIndex: 3,
    },
    {
      toFace: 'U',
      toTileIndex: 2,
      fromFace: 'B',
      fromTileIndex: 6,
    },

    // Rotate right face
    {
      toFace: 'R',
      toTileIndex: 0,
      fromFace: 'R',
      fromTileIndex: 2,
    },
    {
      toFace: 'R',
      toTileIndex: 1,
      fromFace: 'R',
      fromTileIndex: 5,
    },
    {
      toFace: 'R',
      toTileIndex: 2,
      fromFace: 'R',
      fromTileIndex: 8,
    },
    {
      toFace: 'R',
      toTileIndex: 3,
      fromFace: 'R',
      fromTileIndex: 1,
    },
    {
      toFace: 'R',
      toTileIndex: 5,
      fromFace: 'R',
      fromTileIndex: 7,
    },
    {
      toFace: 'R',
      toTileIndex: 6,
      fromFace: 'R',
      fromTileIndex: 0,
    },
    {
      toFace: 'R',
      toTileIndex: 7,
      fromFace: 'R',
      fromTileIndex: 3,
    },
    {
      toFace: 'R',
      toTileIndex: 8,
      fromFace: 'R',
      fromTileIndex: 6,
    },
  ],
  backCounterClockwise: [
    // Rotate Face
    {
      toFace: 'B',
      toTileIndex: 0,
      fromFace: 'B',
      fromTileIndex: 2,
    },
    {
      toFace: 'B',
      toTileIndex: 1,
      fromFace: 'B',
      fromTileIndex: 5,
    },
    {
      toFace: 'B',
      toTileIndex: 2,
      fromFace: 'B',
      fromTileIndex: 8,
    },
    {
      toFace: 'B',
      toTileIndex: 3,
      fromFace: 'B',
      fromTileIndex: 1,
    },

    {
      toFace: 'B',
      toTileIndex: 5,
      fromFace: 'B',
      fromTileIndex: 7,
    },
    {
      toFace: 'B',
      toTileIndex: 6,
      fromFace: 'B',
      fromTileIndex: 0,
    },
    {
      toFace: 'B',
      toTileIndex: 7,
      fromFace: 'B',
      fromTileIndex: 3,
    },
    {
      toFace: 'B',
      toTileIndex: 8,
      fromFace: 'B',
      fromTileIndex: 6,
    },

    // Left to UP
    {
      toFace: 'U',
      toTileIndex: 0,
      fromFace: 'L',
      fromTileIndex: 6,
    },
    {
      toFace: 'U',
      toTileIndex: 1,
      fromFace: 'L',
      fromTileIndex: 3,
    },
    {
      toFace: 'U',
      toTileIndex: 2,
      fromFace: 'L',
      fromTileIndex: 0,
    },

    // UP to Right
    {
      toFace: 'R',
      toTileIndex: 2,
      fromFace: 'U',
      fromTileIndex: 0,
    },
    {
      toFace: 'R',
      toTileIndex: 5,
      fromFace: 'U',
      fromTileIndex: 1,
    },
    {
      toFace: 'R',
      toTileIndex: 8,
      fromFace: 'U',
      fromTileIndex: 2,
    },

    // Left to UP
    {
      toFace: 'D',
      toTileIndex: 8,
      fromFace: 'R',
      fromTileIndex: 2,
    },
    {
      toFace: 'D',
      toTileIndex: 7,
      fromFace: 'R',
      fromTileIndex: 5,
    },
    {
      toFace: 'D',
      toTileIndex: 6,
      fromFace: 'R',
      fromTileIndex: 8,
    },

    // Left to UP
    {
      toFace: 'L',
      toTileIndex: 6,
      fromFace: 'D',
      fromTileIndex: 8,
    },
    {
      toFace: 'L',
      toTileIndex: 3,
      fromFace: 'D',
      fromTileIndex: 7,
    },
    {
      toFace: 'L',
      toTileIndex: 0,
      fromFace: 'D',
      fromTileIndex: 6,
    },
  ],
  downCounterClockwise: [
    // Rotate Face
    {
      toFace: 'D',
      toTileIndex: 0,
      fromFace: 'D',
      fromTileIndex: 2,
    },
    {
      toFace: 'D',
      toTileIndex: 1,
      fromFace: 'D',
      fromTileIndex: 5,
    },
    {
      toFace: 'D',
      toTileIndex: 2,
      fromFace: 'D',
      fromTileIndex: 8,
    },
    {
      toFace: 'D',
      toTileIndex: 3,
      fromFace: 'D',
      fromTileIndex: 1,
    },
    {
      toFace: 'D',
      toTileIndex: 5,
      fromFace: 'D',
      fromTileIndex: 7,
    },
    {
      toFace: 'D',
      toTileIndex: 6,
      fromFace: 'D',
      fromTileIndex: 0,
    },
    {
      toFace: 'D',
      toTileIndex: 7,
      fromFace: 'D',
      fromTileIndex: 3,
    },
    {
      toFace: 'D',
      toTileIndex: 8,
      fromFace: 'D',
      fromTileIndex: 6,
    },

    // 
    {
      toFace: 'F',
      toTileIndex: 6,
      fromFace: 'R',
      fromTileIndex: 6,
    },
    {
      toFace: 'F',
      toTileIndex: 7,
      fromFace: 'R',
      fromTileIndex: 7,
    },
    {
      toFace: 'F',
      toTileIndex: 8,
      fromFace: 'R',
      fromTileIndex: 8,
    },

    // 
    {
      toFace: 'R',
      toTileIndex: 6,
      fromFace: 'B',
      fromTileIndex: 6,
    },
    {
      toFace: 'R',
      toTileIndex: 7,
      fromFace: 'B',
      fromTileIndex: 7,
    },
    {
      toFace: 'R',
      toTileIndex: 8,
      fromFace: 'B',
      fromTileIndex: 8,
    },

    // 
    {
      toFace: 'B',
      toTileIndex: 6,
      fromFace: 'L',
      fromTileIndex: 6,
    },
    {
      toFace: 'B',
      toTileIndex: 7,
      fromFace: 'L',
      fromTileIndex: 7,
    },
    {
      toFace: 'B',
      toTileIndex: 8,
      fromFace: 'L',
      fromTileIndex: 8,
    },

    // 
    {
      toFace: 'L',
      toTileIndex: 6,
      fromFace: 'F',
      fromTileIndex: 6,
    },
    {
      toFace: 'L',
      toTileIndex: 7,
      fromFace: 'F',
      fromTileIndex: 7,
    },
    {
      toFace: 'L',
      toTileIndex: 8,
      fromFace: 'F',
      fromTileIndex: 8,
    },
  ],
};

export const RUBIK_INITIAL_STATE: IRubikFace[] = [
  {
    faceDirection: 'F',
    tiles: Array(9).fill('green'),
  },
  {
    faceDirection: 'D',
    tiles: Array(9).fill('yellow'),
  },
  {
    faceDirection: 'B',
    tiles: Array(9).fill('blue'),
  },
  {
    faceDirection: 'L',
    tiles: Array(9).fill('orange'),
  },
  {
    faceDirection: 'R',
    tiles: Array(9).fill('red'),
  },
  {
    faceDirection: 'U',
    tiles: Array(9).fill('white'),
  },
];
