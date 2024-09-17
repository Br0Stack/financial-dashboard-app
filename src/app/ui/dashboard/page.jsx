import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../../lib/data'; // Import fetchCardData

export default async function Page() {
  const revenue = await fetchRevenue(); // Fetch revenue data
  const latestInvoices = await fetchLatestInvoices(); // Fetch latest invoices data

  // Fetch card data
  const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = await fetchCardData();

  return (
    <div>
      {/* Render RevenueChart component with the fetched revenue data */}
      <RevenueChart revenue={revenue} />

      {/* Render LatestInvoices component with the fetched latest invoices data */}
      <LatestInvoices latestInvoices={latestInvoices} />

      {/* Uncomment and Render Card components with the fetched data */}
      <Card title="Collected" value={totalPaidInvoices} />
      <Card title="Pending" value={totalPendingInvoices} />
      <Card title="Total Invoices" value={numberOfInvoices} />
      <Card title="Total Customers" value={numberOfCustomers} />
    </div>
  );
}
