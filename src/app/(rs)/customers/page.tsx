import CustomerSearch from './CustomerSearch';
import { getCustomerSearchResults } from '@/lib/queries/getCustomerSearchResults';
import CustomerTable from '@/app/(rs)/customers/CustomerTable';
import * as Sentry from '@sentry/nextjs';

export const metadata = {
  title: 'Customer Search',
};

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) return <CustomerSearch />;

  const span = Sentry.startInactiveSpan({
    name: 'getCustomerSearchResults-2',
  });
  const results = await getCustomerSearchResults(searchText);
  span.end();

  return (
    <>
      <CustomerSearch />
      {results.length ? (
        <CustomerTable data={results} />
      ) : (
        <p className='mt-4'>No results found</p>
      )}
    </>
  );
}
