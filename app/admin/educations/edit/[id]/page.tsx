'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { EducationDataProvider } from '@/lib/dataProviders/education';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import moment from 'moment';

export default function TabMainEdit() {
  const router = useRouter();
  const param = useParams();
  const { id } = param;
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { toast } = useToast();

  async function fetchData() {
    if (!id) return;
    const res = await EducationDataProvider.getOne({
      id: id as string,
      meta: {},
      resource: 'educations',
    });
    let data = JSON.parse(JSON.stringify(res.data));

    // Format graduation years to YYYY-MM-DD format for date inputs
    ['dateOfAchievement'].forEach((field) => {
      if (data[field]) {
        data[field] = moment(data[field]).format('YYYY-MM-DD');
      }
    });
    setData(data);
    setLoading(false);
  }

  async function submitData(data) {
    if (!id) return;
    await EducationDataProvider.update({
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
    await EducationDataProvider.deleteOne({
      id: id as string,
      meta: {},
      resource: 'educations',
      variables: {},
    });
    toast({
      title: 'Education Deleted',
      description: 'Education record has been deleted successfully',
    });
    router.push(`/admin/members/edit/${userId}?tab=education`);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

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
      defaultValues={data}
    />
  );
}
