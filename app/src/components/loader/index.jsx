import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './styles.scss';

export default function Loader() {
  return (
    <div className="page-loader">
      <CircularProgress size={60} />
    </div>
  );
}
