'use client';

import { useRouter } from 'next/navigation';

// TODO: Component naming
const DetailsComponent = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter();

  return (
    <summary
      className="mx-auto flex items-center justify-center bg-red-500 py-1 text-center text-xs text-white transition-all hover:bg-red-600"
      onClick={() => {
        const url = new URL(window.location.href);

        if (url.searchParams.has('open')) {
          url.searchParams.delete('open');
        } else {
          url.searchParams.set('open', 'true');
        }
        push(url.pathname + url.search);

        // TODO: Exploring pushState vs push router
        // window.history.pushState({}, '', url);
      }}
    >
      {children}
    </summary>
  );
};

export default DetailsComponent;
