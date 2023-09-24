import { cn } from '~/lib/utils';

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('h-5 w-full animate-pulse bg-slate-300', className)}
    {...props}
  />
);

export default Skeleton;
