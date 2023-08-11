import styles from '@/styles/LoginButton.module.css';
import { useState } from 'react';

function LoginButton(props) {
  const [status, setStatus] = useState('ready');

  const handleClick = () => {
    setStatus('clicked');
  };

  const handleMouseOver = () => {
    setStatus('hover');
  };

  const handleMouseOut = () => {
    setStatus('ready');
  };

  return (
    <button
      className={`${styles.loginbutton} ${styles[status]}`}
      type="submit"
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.label}
    </button>
  );
}

export default LoginButton;
