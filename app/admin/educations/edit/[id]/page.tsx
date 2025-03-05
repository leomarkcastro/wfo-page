'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { EducationDataProvider } from '@/lib/dataProviders/education';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import moment from 'moment';
import { createProvider } from '@/lib/services/createProvider';

export default function TabMainEdit() {
  const router = useRouter();
  const param = useParams();
  const { id } = param;
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  const dataHookProvider = createProvider({
    name: EducationDataProvider.name,
    dataProvider: EducationDataProvider,
  });

  const [data, setData] = useState({});
  const useDelete = dataHookProvider.useDelete();
  const useUpdate = dataHookProvider.useUpdate();
  const { data: lData, isLoading: loading } = dataHookProvider.useOne(id);

  const { toast } = useToast();

  useEffect(() => {
    if (!id) return;
    if (!lData) return;
    const data = JSON.parse(JSON.stringify(lData.data));

    ['dateOfAchievement'].forEach((field) => {
      if (data[field]) {
        let timeData = data[field];
        if (typeof timeData === 'string' && !isNaN(Number(timeData))) {
          timeData = parseInt(timeData);
        }
        data[field] = moment(timeData).format('YYYY-MM-DD');
      }
    });

    setData(data);
  }, [lData, loading]);

  async function submitData(data) {
    if (!id) return;
    data.dateOfAchievement = moment(data.dateOfAchievement).toISOString();

    await useUpdate.mutateAsync({
      id: id as string,
      variables: data,
      meta: {},
      resource: 'educations',
    });

    toast({
      title: 'Education Updated',
      description: 'Education record has been updated successfully',
    });
    router.push(`/admin/members/edit/${userId}?tab=education`);
  }

  async function deleteData() {
    if (!id) return;
    await useDelete.mutateAsync({
      id: id as string,
    });

    toast({
      title: 'Education Deleted',
      description: 'Education record has been deleted successfully',
    });
    router.push(`/admin/members/edit/${userId}?tab=education`);
  }

  if (loading) return <div>Loading...</div>;
  return (
    <QuickForm
      gridCols={2}
      onCancel={() => {
        window.history.back();
      }}
      onSubmit={submitData}
      onDelete={deleteData}
      title='Edit Education'
      subtitle='Edit education details'
      fields={[
        {
          type: 'text',
          name: 'userName',
          label: 'User Name',
          readonly: true,
          row: 1,
          cell: 1,
        },
        {
          type: 'display',
          name: 'userId',
          label: 'User ID',
          component: (form) => {
            const value = form.getValues('userId');
            return (
              <div className='text-sm text-muted-foreground'>
                {value || '--'}
              </div>
            );
          },
          row: 1,
          cell: 1,
        },
        {
          type: 'text',
          name: 'schoolName',
          label: 'School Name',
          required: true,
          row: 2,
          cell: 2,
        },
        {
          type: 'text',
          name: 'achievement',
          label: 'Achievement',
          required: true,
          row: 3,
          cell: 2,
        },
        {
          type: 'date',
          name: 'dateOfAchievement',
          label: 'Date of Achievement',
          required: true,
          row: 4,
          cell: 2,
        },
      ]}
      defaultValues={data}
    />
  );
}
