import { useState } from 'react';

export default function useToggle() {
  const [value, setValue] = useState(false);

  const toggle = () => {
    setValue(previousValue => !previousValue);
  };

  return { value, toggle };
}