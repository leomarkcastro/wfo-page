'use client';

import { FieldType } from '@/components/custom/quick-form.types';
import { ResourceForm } from '@/components/custom/resource-form';
import { MembershipApplicationsDataProvider } from '@/lib/dataProviders/membershipApplications';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

interface ApplicationFormData {
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  society: string;
  status: string;
  memberType: string;
}

export default function MembershipApplicationsAdd() {
  const router = useRouter();
  const { toast } = useToast();

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
    // {
    //   type: 'textarea',
    //   name: 'notes',
    //   label: 'Additional Notes',
    //   row: 6,
    //   cell: 3,
    // },
  ];

  const handleSubmit = async (data: ApplicationFormData) => {
    try {
      // Convert date to timestamp
      const formattedData = {
        ...data,
      };

      await MembershipApplicationsDataProvider.create({
        variables: formattedData,
      });

      toast({
        title: 'Application Created',
        description: 'Membership application has been created successfully',
      });
      router.push('/admin/membership-applications');
    } catch (error) {
      console.error('Error creating membership application:', error);
      toast({
        title: 'Error',
        description: 'Failed to create membership application',
        variant: 'destructive',
      });
    }
  };

  return (
    <ResourceForm
      mode='create'
      title='New Membership Application'
      subtitle='Add new membership application details'
      dataProvider={MembershipApplicationsDataProvider}
      fields={fields}
      gridCols={3}
      onSubmit={handleSubmit}
    />
  );
}
