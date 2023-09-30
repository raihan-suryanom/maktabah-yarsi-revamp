import { Button, Checkbox, Form, Icon, Input } from '~/components/atoms';

const SearchForm = () => {
  return (
    <Form.Root>
      <Form.Field name="query">
        <div className="flex items-center justify-between">
          <Form.Label>Topik</Form.Label>
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
      </Form.Field>
      <div className="flex items-center gap-5 [&_label]:font-normal">
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
      <footer className="flex w-full gap-5 [&>button]:flex-1">
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
