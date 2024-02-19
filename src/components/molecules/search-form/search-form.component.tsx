import { Search } from 'lucide-react';

import Button from '~/components/atoms/button';
import Checkbox from '~/components/atoms/checkbox';
import { Form } from '~/components/atoms/form';
import Input from '~/components/atoms/input';
import configServer from '~/lib/config.server';
import { getSearchResults } from '~/lib/search.server';
import AdvancedSearch from './_advanced-search.component';
import { filterLeafCategories } from '~/lib/utils/extract-category-paths';
import { strategy } from '~/lib/utils/helper';

import type { CategoryProps } from '~/lib/utils/index.type';

const { path } = configServer;

const SearchForm = async () => {
  async function create(formData: FormData) {
    'use server';
    const { redirect } = await import('next/navigation');

    if (!formData.getAll('bibliography').pop()) formData.delete('bibliography');
    if (!formData.getAll('category').pop()) formData.delete('category');

    const queryString = new URLSearchParams(
      formData as unknown as string
    ).toString();

    const test = await getSearchResults({
      keyword: formData.get('query')!.toString(),
      page: '1',
      bibliographies: formData.getAll('bibliography'),
      categories: formData.getAll('category'),
      strategy: strategy(
        formData.has('case_sensitive'),
        formData.has('exact_match')
      ),
    });

    const { totalResult, data, error } = test;

    if (error) {
      throw new Error('Terjadi suatu kesalahan.');
    }

    if (!totalResult) {
      redirect('/search-not-found');
    }

    redirect(
      `${path.bibliographies}/${data[0].bibliography}/${data[0].page}?${queryString}&page=1&open=true`
    );
  }

  const response = await fetch(`${path.baseUrl}${path.categories}`);
  const { categories }: { categories: CategoryProps[] } = await response.json();

  return (
    <Form.Root
      className='min-h-[30rem] [&_small]:before:text-primary-light [&_small]:before:content-["*"]'
      method="POST"
      action={create}
    >
      <Form.Field name="query">
        <div className="flex items-center justify-between">
          <Form.Message match="valueMissing">Topik wajib diisi</Form.Message>
          <Form.Message match="tooShort">
            Pajang topik minimal 4 huruf.
          </Form.Message>
        </div>
        <div className="relative flex items-center">
          <Search className="absolute left-3" strokeWidth={3} size={20} />
          <Form.Control asChild>
            <Input
              type="search"
              dimension="small"
              className="w-full pl-11 pr-3"
              placeholder="Masukkan kata kunci topik permasalahan seperti iman, ikhlas, jodoh dan lain-lain."
              minLength={4}
              autoFocus
              required
            />
          </Form.Control>
        </div>
        <small>Wajib diisi dan masukkan mimimal 4 huruf.</small>
      </Form.Field>
      <div className="flex items-center gap-5 [&>div]:gap-2 [&_label]:font-normal">
        <Form.Field name="exact_match" className="flex-row">
          <Form.Control asChild>
            <Checkbox value="true" />
          </Form.Control>
          <Form.Label>Kata Persis</Form.Label>
        </Form.Field>
        <Form.Field name="case_sensitive" className="flex-row">
          <Form.Control asChild>
            <Checkbox value="true" />
          </Form.Control>
          <Form.Label>Sensitif Huruf Besar/Kecil</Form.Label>
        </Form.Field>
      </div>
      <AdvancedSearch categories={filterLeafCategories(categories)} />
      <footer className="mt-auto flex w-full gap-5 [&>button]:flex-1">
        <Form.Submit asChild>
          <Button variant="primary" size="medium">
            Cari Kata
          </Button>
        </Form.Submit>
        <Form.Submit asChild>
          <Button variant="outline" size="medium" type="reset">
            Hapus Kata
          </Button>
        </Form.Submit>
      </footer>
    </Form.Root>
  );
};

export default SearchForm;
