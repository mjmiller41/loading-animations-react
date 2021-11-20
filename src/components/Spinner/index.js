import { useEffect } from 'react/cjs/react.development';
import './index.css';

export function Spinner({
  id = 'spinner-wrapper',
  className = 'wrapper',
  color1 = 'green',
  color2 = 'lightGreen',
  text = '',
  textColor = '',
  noGradientText = false,
}) {
  useEffect(() => {
    const textElement = document.getElementById('spinner-text');
    if (!noGradientText) {
      textElement.classList.add('gradient-text');
    }
    if (textColor !== '') {
      textElement.classList.add('colored-text');
    }
  }, [noGradientText, textColor]);

  const style = `
    .gradient-text {
      background: linear-gradient(90deg, ${color1}, ${color2});
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
    .colored-text {
      color: ${textColor}
    }`;

  return (
    <div id={id} className={className}>
      <div id='spinner'>
        <svg id='viewBox' viewBox='0 0 50 50'>
          <circle
            id='circle'
            cx='25'
            cy='25'
            r='22.5'
            fill='none'
            strokeWidth='5'
            stroke='url(#myGradient)'
          ></circle>
          <defs>
            <linearGradient id='myGradient'>
              <stop offset='0%' stopColor={color1} />
              <stop offset='100%' stopColor={color2} />
            </linearGradient>
          </defs>
        </svg>
        <div id='spinner-text'>{text}</div>
      </div>
      <style>{style}</style>
    </div>
  );
}
