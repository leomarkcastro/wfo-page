'use client';

import { FieldType } from '@/components/custom/quick-form.types';
import { ResourceForm } from '@/components/custom/resource-form';
import { SocietiesDataProvider } from '@/lib/dataProviders/societies';

export default function EditSocietyPage({
  params,
}: {
  params: { id: string };
}) {
  const fields: FieldType[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Society Name',
      required: true,
      row: 1,
      cell: 2,
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description',
      required: true,
      row: 2,
      cell: 2,
    },
    {
      type: 'textarea',
      name: 'address',
      label: 'Address',
      required: true,
      row: 3,
      cell: 2,
    },
  ];

  return (
    <ResourceForm
      mode='edit'
      title='Edit Society'
      subtitle='Update society details'
      dataProvider={SocietiesDataProvider}
      getIDon={() => params.id}
      fields={fields}
      gridCols={2}
    />
  );
}
