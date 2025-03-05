'use client';

import { ResourceForm } from '@/components/custom/resource-form';
import { NotesDataProvider } from '@/lib/dataProviders/notes';
import { useSearchParams } from 'next/navigation';

export default function NotesAdd() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');
  const type = searchParams.get('type');
  const returnTo = searchParams.get('returnTo');

  let returnPath = '/admin/notes';
  if (userId) {
    returnPath = `/admin/members/edit/${userId}?tab=notes`;
  } else if (returnTo === 'educations') {
    returnPath = '/admin/educations';
  }

  return (
    <ResourceForm
      mode='create'
      title='New Note'
      subtitle='Add new note'
      dataProvider={NotesDataProvider}
      returnPath={returnPath}
      defaultValues={{
        userId: userId || '',
        type: type || 'Notes',
      }}
      transformSubmitData={(data) => ({
        ...data,
        userId: userId ? userId : undefined,
      })}
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
            { label: 'Education', value: 'Education' },
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
