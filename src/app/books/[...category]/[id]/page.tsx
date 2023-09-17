import React from 'react';
import { Card, Icon, PageWrapper } from '~/components/atoms';
import { Breadcrumb, SearchInput } from '~/components/molecules';
import { MainContent } from '~/components/organisms';

const DetailBookPage = () => {
  return (
    <PageWrapper className="flex">
      <aside className="h-screen w-3/12 border-r">f</aside>
      <div className="flex w-9/12 flex-col gap-5 p-5">
        <Breadcrumb paths={[]} />
        <SearchInput className="bg-light-300" />
        <Card.Root className="w-[1000px] bg-primary-light px-[30px] py-5 text-light-100">
          <Card.Header className="mb-2 p-0">
            <Card.Title className="text-[40px] ">
              Adab Murid Terhadap Diri Sendiri
            </Card.Title>
          </Card.Header>
          <Card.Footer className="flex gap-10 p-0">
            <div className="flex items-center gap-1.5">
              <Icon size={24} name="pencil" />
              <small className="text-xl">Abdul Somad Al Bukhari</small>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon size={24} name="layers" />
              <small className="text-xl">124 halaman</small>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon size={24} name="calendar" />
              <small className="text-xl">2020</small>
            </div>
          </Card.Footer>
        </Card.Root>
        <MainContent />
      </div>
    </PageWrapper>
  );
};

export default DetailBookPage;
