import { fetchFilteredCustomers } from "@/app/lib/data";
import { CustomersPageProps } from "@/app/lib/types";
import CustomersTable from "@/app/ui/customers/table";

const Customers = async ({searchParams}: CustomersPageProps) => {
    const {page=1, query=''} = searchParams;
    const customers = await fetchFilteredCustomers(query)
    return <CustomersTable customers={customers} />
}

export default Customers;