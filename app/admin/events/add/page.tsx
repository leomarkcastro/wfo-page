'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { EventsDataProvider } from '@/lib/dataProviders/events';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { createProvider } from '@/lib/services/createProvider';

interface EventFormData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  isCancelled: boolean;
}

export default function AddEventPage() {
  const router = useRouter();
  const { toast } = useToast();

  const dataHookProvider = createProvider({
    name: EventsDataProvider.name,
    dataProvider: EventsDataProvider,
  });

  const useCreate = dataHookProvider.useCreate();

  async function submitData(data: EventFormData) {
    // Convert dates to timestamps
    const startTimestamp = new Date(data.startDate).getTime();
    const endTimestamp = new Date(data.endDate).getTime();

    const eventData = {
      ...data,
      startDate: startTimestamp,
      endDate: endTimestamp,
    };

    await useCreate.mutateAsync({
      variables: eventData,
      meta: {},
      resource: 'events',
    });

    toast({
      title: 'Event Created',
      description: 'Event has been created successfully',
    });
    router.push('/admin/events');
  }

  return (
    <QuickForm
      gridCols={2}
      onCancel={() => router.push('/admin/events')}
      onSubmit={submitData}
      title='New Event'
      subtitle='Add new event details'
      defaultValues={{ isCancelled: false }}
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
          type: 'text',
          name: 'location',
          label: 'Location',
          required: true,
          row: 2,
          cell: 1,
        },
        {
          type: 'checkbox',
          name: 'isCancelled',
          label: 'Cancelled',
          row: 2,
          cell: 1,
        },
        {
          type: 'datetime',
          name: 'startDate',
          label: 'Start Date',
          required: true,
          row: 3,
          cell: 1,
        },
        {
          type: 'datetime',
          name: 'endDate',
          label: 'End Date',
          required: true,
          row: 3,
          cell: 1,
        },
        {
          type: 'textarea',
          name: 'description',
          label: 'Description',
          required: true,
          row: 4,
          cell: 2,
        },
      ]}
    />
  );
}
