import './index.css';

export function Dots({
  dotColors = ['blue', 'violet', 'red', 'orange', 'yellow', 'green'],
  text = '',
  id = 'dots-wrapper',
  className = 'wrapper',
}) {
  // Setup newColors array
  const newColors = [];
  let dotColorsIndex = 0;
  let newColorsIndex = 0;
  while (newColorsIndex <= 5) {
    if (dotColors[dotColorsIndex]) {
      newColors.push(dotColors[dotColorsIndex]);
      newColorsIndex += 1;
      dotColorsIndex += 1;
    } else {
      dotColorsIndex = 0;
    }
  } // Setup array of dot elements

  let dots = new Array(6).fill('').map((e, index) => {
    return (
      <div
        key={index}
        className='dot'
        style={{
          backgroundColor: newColors[index],
          animationDelay: `0.${index}s`,
        }}
      ></div>
    );
  });

  return (
    <div id={id} className={className}>
      <div id='dots'>{dots}</div>
      <div id='dots-text'>{text}</div>
    </div>
  );
}
