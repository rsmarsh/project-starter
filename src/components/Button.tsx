import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div className='button-wrapper'>
      <button className={props.className} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
