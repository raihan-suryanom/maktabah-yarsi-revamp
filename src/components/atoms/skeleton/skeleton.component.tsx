import { cn } from '~/lib/utils/cn';

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-label="skeleton"
    className={cn(
      'h-5 w-full animate-pulse rounded-sm bg-slate-300 dark:bg-slate-600',
      className
    )}
    {...props}
  />
);

export default Skeleton;
