import {
  Button,
  Checkbox,
  Form,
  Icon,
  Input,
  Select,
} from '~/components/atoms';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SearchForm = () => {
  return (
    <Form.Root className='min-h-[30rem] [&_small]:before:text-primary-light [&_small]:before:content-["*"]'>
      <Form.Field name="query">
        <div className="flex items-center justify-between">
          <Form.Message match="valueMissing">Topik wajib diisi</Form.Message>
          <Form.Message match="tooShort">
            Huruf topik harus dari 2 karakter
          </Form.Message>
        </div>
        <div className="relative flex items-center">
          <Icon
            name="search"
            className="absolute left-3"
            strokeWidth={3}
            size={20}
          />
          <Form.Control asChild>
            <Input
              type="search"
              dimension="small"
              className="w-full pl-11 pr-3"
              placeholder="Masukkan kata kunci topik permasalahan seperti iman, ikhlas, jodoh dan lain-lain."
              minLength={3}
              required
            />
          </Form.Control>
        </div>
        <small>Wajib diisi dan masukkan mimimal 3 huruf.</small>
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
      <Form.Field name="category">
        <div className="relative flex items-center">
          <Icon
            name="layout-grid"
            className="absolute left-3 z-10"
            strokeWidth={3}
            size={20}
          />
          <Form.Control asChild>
            <Select
              aria-label="Pilih kategori buku"
              className="w-full pl-11 pr-3"
              placeholder="Pilih Kategori"
              dimension="small"
              options={options}
              isMulti
            />
          </Form.Control>
        </div>
        <small>
          Jika tidak ada yang dipilih, maka akan otomatis memilih semua
          kategori.
        </small>
      </Form.Field>
      <Form.Field name="book">
        <div className="relative flex items-center">
          <Icon
            name="book-open"
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
              options={options}
              isMulti
            />
          </Form.Control>
        </div>
        <small>
          Jika tidak ada yang dipilih, maka akan otomatis memilih semua buku.
        </small>
      </Form.Field>
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
