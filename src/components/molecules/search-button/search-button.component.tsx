import { FC } from 'react';

import { Icon, Button, Dialog } from '~/components/atoms';
import { cn } from '~/lib/utils';

import type { DialogProps, DialogTriggerProps } from '@radix-ui/react-dialog';

type SearchButtonProps = DialogProps &
  DialogTriggerProps & {
    placeholder: string;
  };

const SearchButton: FC<SearchButtonProps> = ({
  placeholder,
  className,
  ...props
}) => (
  <Dialog.Root {...props}>
    <Dialog.Trigger className={cn(className)} asChild>
      <Button
        size="small"
        className="flex items-center justify-between gap-2 rounded-lg p-3 font-semibold"
        variant="secondary"
      >
        {placeholder}
        <Icon
          name="search"
          className="text-primary-light dark:text-primary-dark"
          strokeWidth={3}
        />
      </Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
        <Dialog.Description>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </Dialog.Description>
      </Dialog.Header>
    </Dialog.Content>
  </Dialog.Root>
);

SearchButton.displayName = 'SearchButton';

export default SearchButton;
