import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('should display a button with the provided label', () => {
  const label = 'Button Text Value';
  render(
    <Button
      label={label}
      onClick={() => {
        /**/
      }}
    />
  );

  expect(screen.getByRole('button').textContent).toBe(label);
});

test('button should inherit provided class names', () => {
  const label = 'Button';
  const classNameList = 'button class-one class-two class-three';

  render(
    <Button
      className={classNameList}
      label={label}
      onClick={() => {
        /**/
      }}
    />
  );

  expect(screen.getByRole('button').classList.toString()).toBe(classNameList);
});

test('button should trigger callback on click', () => {
  let clicked = false;
  const callback = () => (clicked = !clicked);
  render(<Button label='Click to run callback' onClick={callback} />);

  const renderedButton = screen.getByRole('button');

  expect(clicked).toEqual(false);
  renderedButton.click();
  expect(clicked).toEqual(true);
});
