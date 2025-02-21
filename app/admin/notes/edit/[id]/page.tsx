'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { NotesDataProvider } from '@/lib/dataProviders/notes';
import { useSearchParams } from 'next/navigation';

export default function NotesEdit() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  return (
    <ResourceForm
      mode='edit'
      title='Edit Note'
      subtitle='Edit note details'
      dataProvider={NotesDataProvider}
      dontReturnOnSubmit
      // returnPath={`/admin/members/edit/${userId}?tab=notes`}
      fields={[
        {
          type: 'text',
          name: 'title',
          label: 'Title',
          required: true,
          row: 1,
          cell: 2,
        },
        {
          type: 'select',
          name: 'type',
          label: 'Type',
          required: true,
          allowCustom: true,
          options: [
            { label: 'Notes', value: 'Notes' },
            { label: 'Assignments', value: 'Assignments' },
            { label: 'Requests', value: 'Requests' },
            { label: 'Activities', value: 'Activities' },
            { label: 'Others', value: 'Others' },
          ],
          row: 2,
          cell: 2,
        },
        {
          type: 'textarea',
          name: 'content',
          label: 'Content',
          required: true,
          row: 3,
          cell: 2,
          rows: 4,
        },
      ]}
    />
  );
}
