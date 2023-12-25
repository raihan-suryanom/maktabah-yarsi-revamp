'use client';

const DetailsComponent = ({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) => {
  return (
    <details
      className="fixed bottom-0 right-0 w-9/12 bg-light-100 [&[open]_summary_~_*]:animate-accordion-down"
      onClick={() => {
        const url = new URL(window.location.href);

        if (url.searchParams.has('open')) {
          url.searchParams.delete('open');
        } else {
          url.searchParams.set('open', 'true');
        }

        window.history.pushState({}, '', url);
      }}
      open={!!open}
    >
      {children}
    </details>
  );
};

export default DetailsComponent;
