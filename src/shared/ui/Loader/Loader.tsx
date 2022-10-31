import { memo } from 'react';

import './Loader.scss';

interface LoaderProps {
  size?: string;
}

export const Loader = memo(({ size }: LoaderProps) => (
  <div style={{ height: size, width: size }} className='lds-ring'>
    <div style={{ height: size, width: size }} />
    <div style={{ height: size, width: size }} />
    <div style={{ height: size, width: size }} />
    <div style={{ height: size, width: size }} />
  </div>
));
