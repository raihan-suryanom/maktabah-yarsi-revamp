import Image from 'next/image';
import Link from 'next/link';

import {
  Accordion,
  Badge,
  Button,
  Card,
  Icon,
  PageWrapper,
} from '~/components/atoms';
import { Breadcrumb } from '~/components/molecules';

export default function Home() {
  return (
    <PageWrapper className="flex min-h-screen pt-20">
      <aside className="w-3/12">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Trigger
              variant="categories"
              className="[&[data-state=open]>svg[id=book-marked]]:rotate-0"
            >
              <Icon
                id="book-marked"
                name="book-marked"
                className="mr-2.5"
                size={30}
                strokeWidth={3}
              />
              <span className="mr-2.5 text-2xl">Akhlak</span>
              <Badge className="font-bold">34</Badge>
              <Icon
                name="chevron-down"
                className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
                size={24}
                strokeWidth={3}
              />
            </Accordion.Trigger>
            <Accordion.Content asChild>
              <Button
                className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
                asChild
              >
                <Link href="/test">Akhlakul Karimah</Link>
              </Button>
            </Accordion.Content>
            <Accordion.Content asChild>
              <Button
                className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
                asChild
              >
                <Link href="/test">Akhlakul Fiqih</Link>
              </Button>
            </Accordion.Content>
            <Accordion.Content asChild>
              <Button
                className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
                asChild
              >
                <Link href="/test">Akhlakul Iman</Link>
              </Button>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger
              variant="categories"
              className="[&[data-state=open]>svg[id=book-marked]]:rotate-0"
            >
              <Icon
                id="book-marked"
                name="book-marked"
                className="mr-2.5"
                size={30}
                strokeWidth={3}
              />
              <span className="mr-2.5 text-2xl">Fiqih</span>
              <Badge>34</Badge>
              <Icon
                name="chevron-down"
                className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
                size={24}
                strokeWidth={3}
              />
            </Accordion.Trigger>
            <Accordion.Content asChild>
              <Button
                className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
                asChild
              >
                <Link href="/test">Fiqih Ibadah</Link>
              </Button>
            </Accordion.Content>
            <Accordion.Content asChild>
              <Button
                className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
                asChild
              >
                <Link href="/test">Fiqih Wanita</Link>
              </Button>
            </Accordion.Content>
            <Accordion.Content asChild>
              <Button
                className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
                asChild
              >
                <Link href="/test">Fiqih Muamalat</Link>
              </Button>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </aside>
      <div className="min-h-screen w-9/12 bg-light-200">
        <Breadcrumb routes={[]} className="pt-0" />
        <h1 className="text-center text-4xl font-bold">Daftar Buku Akhlak</h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
          {Array(10)
            .fill('')
            .map((_, index) => (
              <Card.Root key={index}>
                <Card.Content className="relative aspect-[1/1.5] w-full bg-gray-100">
                  <Image
                    src="https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg"
                    alt=""
                    fill
                    className="rounded-[10px] object-cover"
                  />
                </Card.Content>
                <Card.Footer className="mt-1.5 flex-col items-start gap-0.5 p-0">
                  <Card.Title className="text-base text-dark-100">
                    Dalal al-Khairat
                  </Card.Title>
                  <span className="flex items-center gap-1.5">
                    <Icon size={12} name="pencil" />
                    <small className="text-xs text-dark-100">
                      Abdul Somad Al Bukhari
                    </small>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Icon size={12} name="layers" />
                    <small className="text-xs text-dark-100">124 halaman</small>
                  </div>
                </Card.Footer>
              </Card.Root>
            ))}
        </section>
      </div>
    </PageWrapper>
  );
}
