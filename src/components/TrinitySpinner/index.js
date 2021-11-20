import './index.css';

export function TrinitySpinner({
  color = 'cyan',
  text = '',
  id = 'trinity-spinner-wrapper',
  className = 'wrapper',
}) {
  const style = `#trinity-spinner-text { color: ${color} }`;
  return (
    <div id={id} className={className}>
      <div id='trinity-spinner'>
        <svg id='spinner' viewBox='0 0 100 100'>
          <defs>
            <filter id='shadow'>
              <feDropShadow
                dx='0'
                dy='0'
                stdDeviation='1.5'
                floodColor='#fc6767'
              />
            </filter>
          </defs>
          <circle
            id='circle'
            style={{
              fill: 'transparent',
              stroke: color,
              strokeWidth: '7px',
              strokeLinecap: 'round',
              filter: 'url(#shadow)',
            }}
            cx='50'
            cy='50'
            r='45'
          />
        </svg>
        <div id='trinity-spinner-text'>{text}</div>
      </div>
      <style>{style}</style>
    </div>
  );
}
