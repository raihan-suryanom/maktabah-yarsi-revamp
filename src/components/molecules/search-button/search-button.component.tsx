import { Search } from 'lucide-react';

import { SearchForm } from '../search-form';
import { Button, Dialog, Separator } from '~/components/atoms';
import { cn } from '~/lib/utils';

import type { FC } from 'react';
import type { DialogProps, DialogTriggerProps } from '@radix-ui/react-dialog';
import type { ButtonProps } from '~/components/atoms/button';

type SearchButtonProps = DialogProps &
  DialogTriggerProps &
  ButtonProps & {
    placeholder: string;
  };

const SearchButton: FC<SearchButtonProps> = ({
  placeholder,
  className,
  size,
  children,
  ...props
}) => (
  <Dialog.Root {...props}>
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
      <Separator className="m-0 h-0.5 p-0 opacity-5" />
      <SearchForm />
    </Dialog.Content>
  </Dialog.Root>
);

SearchButton.displayName = 'SearchButton';

export default SearchButton;
