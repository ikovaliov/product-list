import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './styles.scss';

export default function ScrollUp() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div
      className="scroll-up"
      style={{ display: showScroll ? 'flex' : 'none' }}
    >
      <IconButton aria-label="delete" size="medium" onClick={scrollTop}>
        <ArrowUpwardIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}
