'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { ProductsDataProvider } from '@/lib/dataProviders/products';
import { MultiFileInput } from '@/components/ui/MultiFileInput';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { env } from 'next-runtime-env';

export default function ProductsAdd() {
  return (
    <ResourceForm
      mode='create'
      title='New Product'
      subtitle='Add new product to the catalog'
      dataProvider={ProductsDataProvider}
      returnPath='/admin/products/products'
      gridCols={3}
      fields={[
        {
          type: 'text',
          name: 'name',
          label: 'Product Name',
          required: true,
          row: 1,
          cell: 2,
        },
        {
          type: 'number',
          name: 'price',
          label: 'Price',
          required: true,
          before: <span className='text-sm text-gray-500'>$</span>,
          row: 1,
          cell: 1,
        },
        {
          type: 'custom',
          name: 'photo',
          label: 'Photo URL',
          required: true,
          row: 2,
          cell: 3,
          component: (form) => (
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <input
                  type='text'
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  value={form.watch('photo') || ''}
                  onChange={(e) => form.setValue('photo', e.target.value)}
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant='outline' size='icon'>
                      <Upload className='h-4 w-4' />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Upload Product Image</DialogTitle>
                    </DialogHeader>
                    <MultiFileInput
                      maxFiles={1}
                      initialFiles={
                        form.watch('photo')
                          ? [{ name: form.watch('photo'), id: '1' }]
                          : []
                      }
                      allowedTypes={['image/*']}
                      showExistingFiles={true}
                      onUploadComplete={async (files) => {
                        if (files && files.length > 0) {
                          const fileObj = files[0];
                          const url =
                            env('NEXT_PUBLIC_SERVER_URL') +
                            '/api/files/name/' +
                            fileObj.name;
                          if (url) {
                            form.setValue('photo', url);
                          }
                        }
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </div>
              {form.watch('photo') && (
                <div className='h-40 w-40 overflow-hidden rounded-md'>
                  <img
                    src={form.watch('photo')}
                    alt='Product'
                    className='h-full w-full object-cover'
                  />
                </div>
              )}
            </div>
          ),
        },
        {
          type: 'textarea',
          name: 'description',
          label: 'Description',
          //   required: true,
          row: 3,
          cell: 3,
          rows: 3,
        },
        {
          type: 'textarea',
          name: 'note',
          label: 'Note',
          row: 4,
          cell: 3,
          rows: 2,
        },
      ]}
    />
  );
}
