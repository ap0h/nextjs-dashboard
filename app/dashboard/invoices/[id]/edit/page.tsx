import { fetchCustomerById, fetchInvoiceById } from "@/app/lib/data";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: 'Edit Invoice',
  };

const EditInvoicePage = async ({params}: {params: {id: string}}) => {
    const invoice = await fetchInvoiceById(params.id)

    if (!invoice) {
        return notFound()
    }

    const customer = await fetchCustomerById(invoice?.customer_id!)

    return <EditInvoiceForm invoice={invoice!} customers={[customer]} />
};

export default EditInvoicePage;