import { Search } from 'lucide-react';

import { SearchForm } from '../search-form';
import { cn } from '~/lib/utils/cn';
import { Dialog } from '~/components/atoms/dialog';
import Button from '~/components/atoms/button';

import type { FC } from 'react';
import type { DialogProps, DialogTriggerProps } from '@radix-ui/react-dialog';
import type { ButtonProps } from '~/components/atoms/button';

type SearchButtonProps = DialogProps &
  DialogTriggerProps &
  ButtonProps & {
    placeholder: string;
    _key?: string;
  };

const SearchButton: FC<SearchButtonProps> = ({
  placeholder,
  className,
  size,
  children,
  ...props
}) => (
  <Dialog.Root key={props._key} {...props}>
    <Dialog.Trigger className={cn(className)} asChild>
      <Button
        size={size}
        className="justify-between font-normal"
        variant="secondary"
      >
        <span className="opacity-50">{placeholder}</span>
        <Search
          className="text-primary-light dark:text-primary-dark"
          strokeWidth={3}
        />
      </Button>
    </Dialog.Trigger>
    <Dialog.Content className="gap-1.5 dark:bg-dark-200">
      <Dialog.Header>
        <Dialog.Title className="text-center lg:text-3xl">
          Fitur Pencarian Topik
        </Dialog.Title>
      </Dialog.Header>
      <SearchForm />
    </Dialog.Content>
  </Dialog.Root>
);

SearchButton.displayName = 'SearchButton';

export default SearchButton;
