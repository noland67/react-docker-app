import React, { useRef, useEffect, ReactNode, CSSProperties } from 'react';
import '../styles/debug.css';

type DebugBoxProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const DebugBox: React.FC<DebugBoxProps> = ({ children, className = '', style = {} }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const computed = window.getComputedStyle(el);
      const margin = computed.marginTop;
      const padding = computed.paddingTop;
      el.style.setProperty('--debug-margin', margin);
      el.style.setProperty('--debug-padding', padding);
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
