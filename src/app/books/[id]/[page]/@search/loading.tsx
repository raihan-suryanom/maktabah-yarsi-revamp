import { Skeleton, Table } from '~/components/atoms';
import { Pagination } from '~/components/molecules';

export default function Loading() {
  return (
    <div className="fixed bottom-0 right-0 w-9/12 bg-light-100 pb-3">
      <p className="mx-auto bg-red-500 py-1 text-center text-xs text-white">
        Tekan untuk menutup/membuka tabel pencarian
      </p>
      <Table.Root className="w-full table-fixed">
        <Table.Caption>
          <Pagination />
        </Table.Caption>
        <Table.Header className="w-full">
          <Table.Row>
            <Table.Head className="w-14">No.</Table.Head>
            <Table.Head className="w-14">Hlm.</Table.Head>
            <Table.Head className="w-2/3">Kueri Relevan</Table.Head>
            <Table.Head className="w-1/3">Judul Buku</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {[...Array(5)].map((_, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
