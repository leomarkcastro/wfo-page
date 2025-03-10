'use client';

import { FieldType } from '@/components/custom/quick-form.types';
import { ResourceForm } from '@/components/custom/resource-form';
import { EventsDataProvider } from '@/lib/dataProviders/events';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { fMoment } from '@/lib/services/fMoment';

interface EventFormData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  isCancelled: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export default function EditEventPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [defaultValues, setDefaultValues] = useState<EventFormData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

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
          createdAt: event.createdAt,
          updatedAt: event.updatedAt,
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

  const fields: FieldType[] = [
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
      row: 3,
      cell: 1,
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description',
      row: 4,
      cell: 2,
    },
  ];

  const handleSubmit = async (data: EventFormData) => {
    try {
      // Convert dates to timestamps
      const formattedData = {
        ...data,
        startDate: new Date(data.startDate).getTime(),
        endDate: new Date(data.endDate).getTime(),
      };

      await EventsDataProvider.update({
        id: params.id,
        variables: formattedData,
      });

      toast({
        title: 'Event Updated',
        description: 'Event has been updated successfully',
      });
      router.push('/admin/events');
    } catch (error) {
      console.error('Error updating event:', error);
      toast({
        title: 'Error',
        description: 'Failed to update event',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className='container mx-auto py-6'>Loading event details...</div>
    );
  }

  return (
    <ResourceForm
      mode='edit'
      title='Edit Event'
      subtitle='Update event details'
      dataProvider={EventsDataProvider}
      preprocessData={(data) => {
        return {
          ...data,
          startDate: fMoment(data.startDate)?.format('YYYY-MM-DDTHH:mm'),
          endDate: fMoment(data.endDate)?.format('YYYY-MM-DDTHH:mm'),
        };
      }}
      transformSubmitData={(data) => {
        console.log(data);
        return {
          ...data,
          startDate: fMoment(data.startDate)?.toDate().toISOString(),
          endDate: fMoment(data.endDate)?.toDate().toISOString(),
        };
      }}
      fields={fields}
      gridCols={2}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    />
  );
}
