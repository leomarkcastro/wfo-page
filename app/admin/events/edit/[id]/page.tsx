'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { EventsDataProvider } from '@/lib/dataProviders/events';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { createProvider } from '@/lib/services/createProvider';
import { useEffect, useState } from 'react';

interface EventFormData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  isCancelled: boolean;
}

export default function EditEventPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [defaultValues, setDefaultValues] = useState<EventFormData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  const dataHookProvider = createProvider({
    name: EventsDataProvider.name,
    dataProvider: EventsDataProvider,
  });

  const useUpdate = dataHookProvider.useUpdate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await EventsDataProvider.getOne({ id: params.id });
        const event = response.data;

        // Format dates for datetime-local input
        const formatDate = (timestamp: number) => {
          const date = new Date(timestamp);
          return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
            .toISOString()
            .slice(0, 16);
        };

        setDefaultValues({
          title: event.title,
          description: event.description,
          startDate: formatDate(event.startDate),
          endDate: formatDate(event.endDate),
          location: event.location,
          isCancelled: event.isCancelled || false,
        });
      } catch (error) {
        console.error('Error fetching event:', error);
        toast({
          title: 'Error',
          description: 'Failed to fetch event details',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [params.id, toast]);

  async function submitData(data: EventFormData) {
    // Convert dates to timestamps
    const startTimestamp = new Date(data.startDate).getTime();
    const endTimestamp = new Date(data.endDate).getTime();

    const eventData = {
      ...data,
      startDate: startTimestamp,
      endDate: endTimestamp,
    };

    await useUpdate.mutateAsync({
      id: params.id,
      variables: eventData,
      meta: {},
      resource: 'events',
    });

    toast({
      title: 'Event Updated',
      description: 'Event has been updated successfully',
    });
    router.push('/admin/events');
  }

  if (isLoading) {
    return (
      <div className='container mx-auto py-6'>Loading event details...</div>
    );
  }

  return (
    <QuickForm
      gridCols={2}
      onCancel={() => router.push('/admin/events')}
      onSubmit={submitData}
      title='Edit Event'
      subtitle='Update event details'
      defaultValues={defaultValues}
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
