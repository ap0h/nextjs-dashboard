import { fetchFilteredCustomers } from "@/app/lib/data";
import { CustomersPageProps } from "@/app/lib/types";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Customers',
  };

const Customers = async ({searchParams}: CustomersPageProps) => {
    const {page=1, query=''} = searchParams;
    const customers = await fetchFilteredCustomers(query)
    return <CustomersTable customers={customers} />
}

export default Customers;