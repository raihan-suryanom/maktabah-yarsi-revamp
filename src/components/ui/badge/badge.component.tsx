import { cn } from '~/lib/utils';
import { badgeVariants } from './badge.style';

import type { VariantProps } from 'class-variance-authority';

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant }), className)} {...props} />
);

export { Badge };
