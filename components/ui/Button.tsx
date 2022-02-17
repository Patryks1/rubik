import React, { FC } from 'react';

type Props = {
  [x: string]: string | Function
};

const Button: FC<Props> = ({ children, ...props }) => (
  <button {...props} className='px-3 py-2 rounded-md bg-slate-600 text-white'>
    {children}
  </button>
);

export default Button;
