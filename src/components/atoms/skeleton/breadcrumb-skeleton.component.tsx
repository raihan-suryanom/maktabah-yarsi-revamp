import { Separator } from '../separator';
import Skeleton from './skeleton.component';

const BreadcrumbSkeleton = () => (
  <nav className="overflow-x-auto capitalize">
    <ul className="flex items-center gap-2.5">
      <li className="flex h-6 items-center gap-2.5">
        <p className="whitespace-nowrap hover:underline hover:decoration-primary-light hover:decoration-2 hover:underline-offset-1 dark:hover:decoration-primary-dark">
          Halaman Utama
        </p>
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70 dark:bg-slate-500"
        />
      </li>
      <li className="flex h-6 items-center gap-2.5">
        <Skeleton className="h-6 w-20" />
      </li>
    </ul>
  </nav>
);

export default BreadcrumbSkeleton;
