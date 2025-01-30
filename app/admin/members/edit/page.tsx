'use client';

import { QuickForm } from '@/components/custom/quick-form';

export default function MemberEditPage() {
  return (
    <QuickForm
      gridCols={5}
      onCancel={() => {
        window.history.back();
      }}
      title='Edit Member'
      subtitle='Edit member details'
      fields={[
        {
          label: 'Name',
          name: 'name',
          type: 'text',
          required: true,
          cell: 2,
          row: 0,
        },
        {
          label: 'Email',
          name: 'email',
          type: 'text',
          required: true,
          cell: 3,
          row: 0,
        },
      ]}
      onSubmit={(data) => {
        console.log(data);
      }}
    />
  );
}
