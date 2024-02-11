'use client';

import { useRef, useState } from 'react';
import { BookOpen, LayoutGrid } from 'lucide-react';

import { Form } from '~/components/atoms/form';
import { extractCategoryValueAndLabel } from '~/lib/utils/extract-category-paths';
import Select from '~/components/atoms/select';

import type { BibliographyProps, CategoryProps } from '~/lib/utils/index.type';

const AdvancedSearch = ({ categories }: { categories: CategoryProps[] }) => {
  const categoriesRef = useRef(null);
  const [bibliographiesZZZ, setBibliographies] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const handleCategoriesChange = async (selectedCategories: unknown) => {
    const values = (selectedCategories as { value: string }[]).map(
      ({ value }) =>
        fetch(
          'https://api.maktabah-yarsi.my.id/categories/' +
            value +
            '/bibliographies'
        ).then((response) => response.json())
    );
    const bibliographiesPromises = Promise.all(values).then(
      (responses: { bibliographies: ReadonlyArray<BibliographyProps> }[]) => {
        const formattedBibliographies = responses
          .map(({ bibliographies }) =>
            bibliographies.map((bibliography) => ({
              value: bibliography._id,
              label: bibliography.title,
            }))
          )
          .flat();
        return formattedBibliographies;
      }
    );

    const bibliographies = await bibliographiesPromises;
    setBibliographies(bibliographies);
  };

  return (
    <>
      <Form.Field name="category">
        <div className="relative flex items-center">
          <LayoutGrid
            className="absolute left-3 z-10"
            strokeWidth={3}
            size={20}
          />
          <Form.Control asChild>
            <Select
              ref={categoriesRef}
              aria-label="Pilih kategori buku"
              className="w-full pl-11 pr-3"
              dimension="small"
              placeholder="Pilih Kategori"
              options={extractCategoryValueAndLabel(categories)}
              onChange={handleCategoriesChange}
              isMulti
            />
          </Form.Control>
        </div>
        <small>
          Jika tidak ada yang dipilih, maka akan otomatis memilih semua
          kategori.
        </small>
      </Form.Field>
      <Form.Field name="bibliography">
        <div className="relative flex items-center">
          <BookOpen
            className="absolute left-3 z-10"
            strokeWidth={3}
            size={20}
          />
          <Form.Control asChild>
            <Select
              aria-label="Pilih buku"
              className="w-full pl-11 pr-3"
              placeholder="Pilih Buku"
              dimension="small"
              options={bibliographiesZZZ}
              isMulti
            />
          </Form.Control>
        </div>
        <small>
          Jika tidak ada yang dipilih, maka akan otomatis memilih semua buku.
        </small>
      </Form.Field>
    </>
  );
};

export default AdvancedSearch;
