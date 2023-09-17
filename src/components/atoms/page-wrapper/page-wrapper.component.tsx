import { cn } from '~/lib/utils';

type PageWrapperProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const PageWrapper = ({ className, children, ...props }: PageWrapperProps) => (
  <main
    className={cn('w-full text-slate-700 dark:text-slate-400', className)}
    {...props}
  >
    {children}
  </main>
);

export default PageWrapper;
