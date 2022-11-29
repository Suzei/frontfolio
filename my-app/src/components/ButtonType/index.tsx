import { Button } from './styles';

interface ButtonProps {
  title: string;
}

export function ButtonType({ title }: ButtonProps) {
  return <Button typeButton="secondary">{title}</Button>;
}
