import './index.css';

export function ProgressBar({
  text = '',
  borderColor = '#f4a261',
  sliderColor = '#fff',
  sliderBackground = '#000',
  id = 'progress-bar-wrapper',
  className = 'wrapper',
}) {
  const style = `
    #progress-bar {
      background-color: ${borderColor};
    }
    #slider-background {
      background-color: ${sliderBackground};
    }
    #slider {
      background-color: ${sliderColor};
    }`;
  return (
    <div id={id} className={className}>
      <div id='progress-bar'>
        <div id='slider-background'>
          <div id='slider'></div>
        </div>
      </div>
      <div id='progress-bar-text'>{text}</div>
      <style>{style}</style>
    </div>
  );
}
