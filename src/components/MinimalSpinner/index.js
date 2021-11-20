import './index.css';

export function MinimalSpinner({
  text = '',
  color = 'blue',
  id = 'minimal-spinner-wrapper',
  className = 'wrapper',
}) {
  const style = `
    #minimal-spinner {
      border-color: transparent ${color} transparent ${color};
    }
    #minimal-spinner-text {
      color: ${color};
    }`;
  return (
    <div id={id} className={className}>
      <div id='minimal-spinner'>
        <div id='minimal-spinner-text'>{text}</div>
      </div>
      <style>{style}</style>
    </div>
  );
}
