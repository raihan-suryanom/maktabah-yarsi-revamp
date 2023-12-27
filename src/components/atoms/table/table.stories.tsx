import { Table } from '~/components/atoms/table';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Atoms/Table',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

const invoices = [
  {
    no: 1,
    page: 9,
    relevantQuery:
      'Karena sebagaimana yang disampaikan oleh sebagian ulama bahwa ...',
    title: 'Credit Card',
  },
  {
    no: 12,
    page: 19,
    relevantQuery: '$150.00',
    title: 'PayPal',
  },
  {
    no: 13,
    page: 19,
    relevantQuery: '$350.00',
    title: 'Bank Transfer',
  },
  {
    no: 14,
    page: 29,
    relevantQuery: '$450.00',
    title: 'Credit Card',
  },
  {
    no: 15,
    page: 39,
    relevantQuery: '$550.00',
    title: 'PayPal',
  },
  {
    no: 16,
    page: 49,
    relevantQuery: '$200.00',
    title: 'Bank Transfer',
  },
  {
    no: 41,
    page: 59,
    relevantQuery: '$300.00',
    title: 'Credit Card',
  },
];

export const DefaultTable = () => (
  <Table.Root>
    <Table.Caption>A list of your recent invoices.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>No</Table.Head>
        <Table.Head>Halaman</Table.Head>
        <Table.Head>Kueri Relevan</Table.Head>
        <Table.Head>Judul Buku</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {invoices.map((invoice) => (
        <Table.Row key={invoice.no}>
          <Table.Cell>{invoice.no}</Table.Cell>
          <Table.Cell>{invoice.page}</Table.Cell>
          <Table.Cell className="text-left">{invoice.relevantQuery}</Table.Cell>
          <Table.Cell className="text-left">{invoice.title}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table.Root>
);
