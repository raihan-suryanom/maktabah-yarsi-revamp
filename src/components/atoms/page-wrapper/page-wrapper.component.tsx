import { cn } from '~/lib/utils';

type PageWrapperProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const PageWrapper = ({ className, children, ...props }: PageWrapperProps) => (
  <main className={cn('mt-[65px] w-full', className)} {...props}>
    {children}
  </main>
);

export default PageWrapper;
