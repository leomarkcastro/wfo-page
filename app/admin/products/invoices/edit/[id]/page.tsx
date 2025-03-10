'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { InvoiceDataProvider } from '@/lib/dataProviders/invoice';
import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Plus, Trash2 } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useParams } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { fMoment } from '@/lib/services/fMoment';

// Define invoice status options
const INVOICE_STATUSES = [
  { value: 'draft', label: 'Draft' },
  { value: 'pending', label: 'Pending' },
  { value: 'paid', label: 'Paid' },
  { value: 'cancelled', label: 'Cancelled' },
];

const mockServicePurchases = [
  { id: '1', name: 'Service 1', price: 100 },
  { id: '2', name: 'Service 2', price: 200 },
  { id: '3', name: 'Service 3', price: 300 },
];

interface InvoiceItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Invoice {
  id: string;
  customerName: string;
  items: InvoiceItem[];
  total: number;
  status: string;
  paymentLink?: string;
  createdAt: string;
  paidAt?: string | null;
}

interface InvoiceFormData {
  customerName: string;
  items: InvoiceItem[];
  total: number;
  status: string;
  paidAt?: string | null;
}

export default function InvoiceEdit() {
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [form, setForm] = useState<UseFormReturn<InvoiceFormData> | null>(null);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        setLoading(true);
        const response = await InvoiceDataProvider.getOne({ id });
        if (response.data) {
          setInvoice(response.data as Invoice);
          setItems(response.data.items || []);
        }
      } catch (error) {
        console.error('Error fetching invoice:', error);
        toast({
          title: 'Error',
          description: 'Failed to load invoice data',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchInvoice();
    }
  }, [id, toast]);

  // Use useCallback to memoize the function
  const calculateTotal = useCallback(() => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return total;
  }, [items]);

  // Update form total when items change
  useEffect(() => {
    if (form) {
      const total = calculateTotal();
      form.setValue('total', total);
    }
  }, [items, form, calculateTotal]);

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { id: '', name: '', price: 0, quantity: 1 }]);
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updateItem = (index: number, field: string, value: number | string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };

    // If setting a custom name, clear the service ID
    if (field === 'name' && value !== '') {
      newItems[index].id = '';
    }

    setItems(newItems);
  };

  const handleServiceSelection = (index: number, serviceId: string) => {
    if (serviceId) {
      const service = mockServicePurchases.find((s) => s.id === serviceId);
      if (service) {
        const newItems = [...items];
        newItems[index] = {
          ...newItems[index],
          id: serviceId,
          name: service.name,
          price: service.price,
        };
        setItems(newItems);
      }
    }
  };

  const copyPaymentLink = () => {
    if (invoice && invoice.paymentLink) {
      navigator.clipboard.writeText(invoice.paymentLink);
      toast({
        title: 'Payment Link Copied',
        description: 'The payment link has been copied to your clipboard.',
      });
    }
  };

  const renderItemsSection = () => (
    <div className='mt-2 space-y-4'>
      <div className='grid grid-cols-12 gap-2 text-sm font-medium'>
        <div className='col-span-5'>Product</div>
        <div className='col-span-2'>Price</div>
        <div className='col-span-2'>Quantity</div>
        <div className='col-span-2'>Total</div>
        <div className='col-span-1'></div>
      </div>

      {items.map((item, index) => (
        <div key={index} className='grid grid-cols-12 items-center gap-2'>
          <div className='col-span-5'>
            <div className='flex flex-col space-y-2'>
              {!item.name ? (
                <select
                  className='w-full rounded border p-2'
                  value={item.id}
                  onChange={(e) => {
                    updateItem(index, 'id', e.target.value);
                    handleServiceSelection(index, e.target.value);
                  }}
                >
                  <option value=''>Select a service or add custom</option>
                  {mockServicePurchases.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              ) : null}

              {(!item.id || item.name) && (
                <input
                  type='text'
                  className='w-full rounded border p-2'
                  placeholder='Custom item name'
                  value={item.name}
                  onChange={(e) => updateItem(index, 'name', e.target.value)}
                />
              )}
            </div>
          </div>
          <div className='col-span-2'>
            <input
              type='number'
              className='w-full rounded border p-2'
              value={item.price}
              onChange={(e) =>
                updateItem(index, 'price', parseFloat(e.target.value) || 0)
              }
            />
          </div>
          <div className='col-span-2'>
            <input
              type='number'
              className='w-full rounded border p-2'
              value={item.quantity}
              min='1'
              onChange={(e) =>
                updateItem(index, 'quantity', parseInt(e.target.value) || 1)
              }
            />
          </div>
          <div className='col-span-2 font-medium'>
            ${(item.price * item.quantity).toFixed(2)}
          </div>
          <div className='col-span-1'>
            {items.length > 1 && (
              <Button
                variant='ghost'
                size='icon'
                onClick={() => removeItem(index)}
              >
                <Trash2 className='h-4 w-4' />
              </Button>
            )}
          </div>
        </div>
      ))}

      <Button variant='outline' size='sm' onClick={addItem} className='mt-2'>
        <Plus className='mr-2 h-4 w-4' /> Add Item
      </Button>

      <div className='mt-4 flex justify-end font-medium'>
        <div className='text-right'>
          <div className='text-sm text-gray-500'>Total</div>
          <div className='text-lg'>${calculateTotal().toFixed(2)}</div>
        </div>
      </div>
    </div>
  );

  const handleSubmit = async (data: InvoiceFormData) => {
    try {
      // on items, remove the __typename field
      const itemsWithoutTypename = items.map((item) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { __typename, ...rest } = item;
        return rest;
      });
      console.log(data);
      await InvoiceDataProvider.update({
        id,
        variables: {
          ...data,
          items: itemsWithoutTypename,
          paidAt: fMoment(data.paidAt)?.toDate().toISOString(),
          total: calculateTotal(),
        },
      });
      toast({
        title: 'Invoice Updated',
        description: 'The invoice has been updated successfully.',
      });
      router.push('/admin/products/invoices');
    } catch (error) {
      console.error('Error updating invoice:', error);
      toast({
        title: 'Error',
        description: 'Failed to update invoice',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async () => {
    try {
      await InvoiceDataProvider.deleteOne({ id });
      toast({
        title: 'Invoice Deleted',
        description: 'The invoice has been deleted successfully.',
      });
      router.push('/admin/products/invoices');
    } catch (error) {
      console.error('Error deleting invoice:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete invoice',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invoice) {
    return <div>Invoice not found</div>;
  }

  return (
    <>
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              invoice.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <QuickForm
        title='Edit Invoice'
        subtitle='Update invoice details'
        onSubmit={handleSubmit}
        gridCols={3}
        defaultValues={{
          customerName: invoice.customerName,
          total: invoice.total,
          status: invoice.status,
          createdAt: fMoment(invoice.createdAt).toDate().toLocaleDateString(),
          paidAt: fMoment(invoice.paidAt)?.toDate().toLocaleDateString(),
        }}
        onForm={(formInstance) => {
          setForm(formInstance);
          // Set initial values only once when the form is initialized
          if (!form) {
            formInstance.setValue('items', items);
            formInstance.setValue('total', calculateTotal());
          }
        }}
        onCancel={() => router.push('/admin/products/invoices')}
        onDelete={() => setShowDeleteDialog(true)}
        fields={[
          {
            type: 'text',
            name: 'customerName',
            label: 'Customer Name',
            required: true,
            row: 1,
            cell: 3,
          },
          {
            type: 'custom',
            name: 'items',
            label: 'Invoice Items',
            row: 2,
            cell: 3,
            component: renderItemsSection,
          },
          {
            type: 'number',
            name: 'total',
            label: 'Total',
            row: 3,
            cell: 1,
            readonly: true,
          },
          {
            type: 'select',
            name: 'status',
            label: 'Status',
            row: 3,
            cell: 1,
            options: INVOICE_STATUSES,
          },
          {
            type: 'date',
            name: 'paidAt',
            label: 'Paid At',
            row: 3,
            cell: 1,
          },
          {
            type: 'custom',
            name: 'paymentLink',
            label: 'Payment Link',
            row: 4,
            cell: 3,
            component: () => (
              <div className='flex items-center gap-2'>
                <input
                  type='text'
                  className='w-full rounded border p-2'
                  value={invoice.paymentLink || ''}
                  readOnly
                />
                <Button
                  variant='outline'
                  size='icon'
                  onClick={copyPaymentLink}
                  title='Copy payment link'
                >
                  <Copy className='h-4 w-4' />
                </Button>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
