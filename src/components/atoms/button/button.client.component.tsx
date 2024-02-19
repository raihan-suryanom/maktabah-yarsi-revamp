'use client';

import { useRouter } from 'next/navigation';
import Button, { type ButtonProps } from './button.component';

const ButtonClient = (props: ButtonProps & { location?: string }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const { search } = new URL(window.location.href);
    router.push(`${props.location}${search}`, { scroll: false });
  };

  return <Button {...props} onClick={props.onClick || handleNavigation} />;
};

export default ButtonClient;
