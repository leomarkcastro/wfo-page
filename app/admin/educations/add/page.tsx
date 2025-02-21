'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { EducationDataProvider } from '@/lib/dataProviders/education';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { createProvider } from '@/lib/services/createProvider';

export default function TabMainEdit() {
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  const dataHookProvider = createProvider({
    name: EducationDataProvider.name,
    dataProvider: EducationDataProvider,
  });

  const useCreate = dataHookProvider.useCreate();

  async function submitData(data) {
    const res = await useCreate.mutateAsync({
      variables: {
        ...data,
        userId: userId || '',
      },
      meta: {},
      resource: 'educations',
    });

    toast({
      title: 'Education Created',
      description: 'Education record has been created successfully',
    });
    router.push(`/admin/members/edit/${userId}?tab=education`);
  }

  return (
    <QuickForm
      gridCols={2}
      onCancel={() => {
        window.history.back();
      }}
      onSubmit={submitData}
      title='New Education'
      subtitle='Add new education record'
      defaultValues={{
        userId: userId || '',
      }}
      fields={[
        {
          type: 'text',
          name: 'schoolName',
          label: 'School Name',
          required: true,
          row: 1,
          cell: 2,
        },
        {
          type: 'text',
          name: 'achievement',
          label: 'Achievement',
          required: true,
          row: 2,
          cell: 2,
        },
        {
          type: 'date',
          name: 'dateOfAchievement',
          label: 'Date of Achievement',
          required: true,
          row: 3,
          cell: 2,
        },
      ]}
    />
  );
}
