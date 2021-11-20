import './index.css';

export function Waves({
  backgroundColor = '#000',
  waveColor = 'cyan',
  text = '',
  id = 'waves-wrapper',
  className = 'wrapper',
}) {
  const style = `
    #waves {
      background-color: ${backgroundColor}
    }
    .wave {
      background: linear-gradient(45deg, ${waveColor}, #fff)
    }`;
  // Setup array of wave elements
  const waves = new Array(10).fill('').map((e, index) => {
    return (
      <div
        key={index}
        className='wave'
        style={{ animationDelay: `0.${index}s` }}
      ></div>
    );
  });

  return (
    <div id={id} className={className}>
      <div id='waves'>{waves}</div>
      <div id='waves-text'>{text}</div>
      <style>{style}</style>
    </div>
  );
}
