import Image from 'next/image';
import { BookOpen, Calendar, Layers, Pencil } from 'lucide-react';

import { Card } from '~/components/atoms/card';
import image from '../../../../public/book_cover_not_available.png';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Atoms/Card',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const OnlyContent = () => (
  <Card.Root className="w-[180px]">
    <Card.Content className="p-0">
      <Image src={image} alt="Image not available" />
    </Card.Content>
  </Card.Root>
);

export const WithoutHeader = () => (
  <Card.Root className="w-[180px]">
    <Card.Content className="p-0">
      <Image
        src="https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg"
        alt=""
        width={180}
        height={250}
        className="rounded-[10px]"
      />
    </Card.Content>
    <Card.Footer className="mt-1.5 flex-col items-start gap-0.5 p-0">
      <Card.Title className="text-base text-dark-100">
        Dalal al-Khairat
      </Card.Title>
      <span className="flex items-center gap-1.5">
        <Pencil size={12} name="Pencil" />
        <small className="text-xs text-dark-100">Abdul Somad Al Bukhari</small>
      </span>
      <div className="flex items-center gap-1.5">
        <Layers size={12} name="Layers" />
        <small className="text-xs text-dark-100">124 halaman</small>
      </div>
    </Card.Footer>
  </Card.Root>
);

export const WithoutContent = () => (
  <Card.Root className="w-[1000px] bg-primary-light px-[30px] py-5 text-light-100">
    <Card.Header className="mb-2 p-0">
      <Card.Title className="text-[40px] ">
        Adab Murid Terhadap Diri Sendiri
      </Card.Title>
    </Card.Header>
    <Card.Footer className="flex gap-10 p-0">
      <div className="flex items-center gap-1.5">
        <Pencil size={24} />
        <small className="text-xl">Abdul Somad Al Bukhari</small>
      </div>
      <div className="flex items-center gap-1.5">
        <Layers size={24} />
        <small className="text-xl">124 halaman</small>
      </div>
      <div className="flex items-center gap-1.5">
        <Calendar size={24} />
        <small className="text-xl">2020</small>
      </div>
    </Card.Footer>
  </Card.Root>
);

export const WithoutFooter = () => (
  <Card.Root className="w-[150px] rounded-[20px] bg-light-100 p-7">
    <Card.Header className="mb-2.5 items-center p-0">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-white">
        <BookOpen size={28} strokeWidth={3} />
      </span>
    </Card.Header>
    <Card.Content className="p-0">
      <Card.Title className="text-center">Fiqih</Card.Title>
    </Card.Content>
  </Card.Root>
);
