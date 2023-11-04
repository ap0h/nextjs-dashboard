import { fetchCustomerById, fetchInvoiceById } from "@/app/lib/data";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";


const EditInvoicePage = async ({params}: {params: {id: string}}) => {
    const invoice = await fetchInvoiceById(params.id)
    const customer = await fetchCustomerById(invoice?.customer_id!)

    return <EditInvoiceForm invoice={invoice!} customers={[customer]} />
};

export default EditInvoicePage;