import Link from 'next/link';

import { Button, Checkbox, Label, Accordion, Input } from '~/components/atoms';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-bold">src/app/page.js</code>
        </p>
        <div className="flex items-center gap-2">
          <Checkbox id="test" />
          <Label htmlFor="test">Tester atuh bang</Label>
        </div>
        <Input dimension="medium" />
        <Accordion.Root type="multiple">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content asChild>
              <Button
                variant="secondary"
                className="cursor-pointer rounded-l-none border-l-4 border-dark-200/50 py-1"
                asChild
              >
                <Link href="/test">Akhlakul karimah</Link>
              </Button>
            </Accordion.Content>
            <Accordion.Content>Akhlak Fiqih</Accordion.Content>
            <Accordion.Content>Akhlak Iman</Accordion.Content>
            <Accordion.Content>Akhlak Pribadi</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Is it styled?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        <Button size="medium">Test</Button>
      </div>
    </main>
  );
}
