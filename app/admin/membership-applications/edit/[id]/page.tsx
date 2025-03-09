'use client';

import { FieldType } from '@/components/custom/quick-form.types';
import { ResourceForm } from '@/components/custom/resource-form';
import { MembershipApplicationsDataProvider } from '@/lib/dataProviders/membershipApplications';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';

interface ApplicationFormData {
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  society: string;
  applicationDate: string;
  status: string;
  memberType: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function MembershipApplicationsEdit({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { toast } = useToast();
  const [defaultValues, setDefaultValues] =
    useState<ApplicationFormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await MembershipApplicationsDataProvider.getOne({
          id: params.id,
        });
        const application = response.data;

        // Format date for date input
        const formatDate = (timestamp: number) => {
          const date = new Date(timestamp);
          return date.toISOString().split('T')[0];
        };

        setDefaultValues({
          name: application.name,
          email: application.email,
          phoneNumber: application.phoneNumber,
          country: application.country,
          society: application.society,
          applicationDate: formatDate(application.applicationDate),
          status: application.status,
          memberType: application.memberType,
          notes: application.notes,
          createdAt: application.createdAt,
          updatedAt: application.updatedAt,
        });
      } catch (error) {
        console.error('Error fetching membership application:', error);
        toast({
          title: 'Error',
          description: 'Failed to fetch membership application details',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplication();
  }, [params.id, toast]);

  const fields: FieldType[] = [
    {
      type: 'title',
      label: 'Applicant Information',
      row: 0,
      cell: 3,
    },
    {
      type: 'text',
      name: 'name',
      label: 'Full Name',
      required: true,
      row: 1,
      cell: 2,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      required: true,
      row: 1,
      cell: 1,
    },
    {
      type: 'text',
      name: 'phoneNumber',
      label: 'Phone Number',
      required: true,
      row: 2,
      cell: 1,
    },
    {
      type: 'text',
      name: 'country',
      label: 'Country',
      required: true,
      row: 2,
      cell: 1,
    },
    {
      type: 'text',
      name: 'society',
      label: 'Society',
      row: 2,
      cell: 1,
    },
    {
      type: 'divider',
      row: 3,
      cell: 3,
    },
    {
      type: 'title',
      label: 'Application Details',
      row: 4,
      cell: 3,
    },
    {
      type: 'select',
      options: [
        { label: 'Pending', value: 'Pending' },
        { label: 'Approved', value: 'Approved' },
        { label: 'Rejected', value: 'Rejected' },
      ],
      name: 'status',
      label: 'Status',
      required: true,
      row: 5,
      cell: 1,
    },
    {
      type: 'select',
      options: [
        { label: 'WFO Fellow', value: 'WFO Fellow' },
        { label: 'WFO Member', value: 'WFO Member' },
        { label: 'WFO Associate', value: 'WFO Associate' },
        { label: 'WFO Student', value: 'WFO Student' },
        { label: 'WFO Affiliate', value: 'WFO Affiliate' },
      ],
      allowCustom: true,
      name: 'memberType',
      label: 'Member Type',
      required: true,
      row: 5,
      cell: 1,
    },
  ];

  const handleSubmit = async (data: ApplicationFormData) => {
    try {
      // Convert date to timestamp
      const formattedData = {
        ...data,
        applicationDate: new Date(data.applicationDate).getTime(),
      };

      await MembershipApplicationsDataProvider.update({
        id: params.id,
        variables: formattedData,
      });

      toast({
        title: 'Application Updated',
        description: 'Membership application has been updated successfully',
      });
      router.push('/admin/membership-applications');
    } catch (error) {
      console.error('Error updating membership application:', error);
      toast({
        title: 'Error',
        description: 'Failed to update membership application',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className='container mx-auto py-6'>
        Loading application details...
      </div>
    );
  }

  return (
    <ResourceForm
      mode='edit'
      title='Edit Membership Application'
      subtitle='Update membership application details'
      dataProvider={MembershipApplicationsDataProvider}
      fields={fields}
      gridCols={3}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
    />
  );
}
