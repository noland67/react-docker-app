import React, { useEffect, useRef } from 'react';
import '../styles/debug.css';

const DebugBox = ({ children, className = '', style = {} }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const computed = window.getComputedStyle(ref.current);
      const margin = computed.marginTop;
      const padding = computed.paddingTop;
      ref.current.style.setProperty('--debug-margin', margin);
      ref.current.style.setProperty('--debug-padding', padding);
    }
  }, []);

  return (
    <div ref={ref} className={`debug-box ${className}`} style={style}>
      <div className="debug-padding-overlay" />
      <div className="debug-content">{children}</div>
    </div>
  );
};

export default DebugBox;
