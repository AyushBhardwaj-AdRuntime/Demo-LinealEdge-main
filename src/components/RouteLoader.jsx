import React from 'react';
import { BrandLogo } from './ui/brand-logo';

export default function RouteLoader({ visible, theme = 'default' }) {
  return (
    <div className={`route-loader route-loader--${theme} ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <div className="route-loader-core">
        <BrandLogo markOnly className="route-loader-logo" />
      </div>
    </div>
  );
}