'use client';

import { FieldType } from '@/components/custom/quick-form.types';
import { ResourceForm } from '@/components/custom/resource-form';
import { EventsDataProvider } from '@/lib/dataProviders/events';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

interface EventFormData {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  isCancelled: boolean;
}

export default function AddEventPage() {
  const router = useRouter();
  const { toast } = useToast();

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
        endDate: data.endDate ? new Date(data.endDate).getTime() : null,
      };

      await EventsDataProvider.create({
        variables: formattedData,
      });

      toast({
        title: 'Event Created',
        description: 'Event has been created successfully',
      });
      router.push('/admin/events');
    } catch (error) {
      console.error('Error creating event:', error);
      toast({
        title: 'Error',
        description: 'Failed to create event',
        variant: 'destructive',
      });
    }
  };

  return (
    <ResourceForm
      mode='create'
      title='New Event'
      subtitle='Add new event details'
      dataProvider={EventsDataProvider}
      fields={fields}
      gridCols={2}
      onSubmit={handleSubmit}
    />
  );
}
