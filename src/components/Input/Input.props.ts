import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: string;
  isValid?: boolean;
}
