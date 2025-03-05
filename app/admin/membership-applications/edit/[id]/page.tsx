'use client';

import { FieldType } from '@/components/custom/quick-form.types';
import { ResourceForm } from '@/components/custom/resource-form';
import { MembershipApplicationsDataProvider } from '@/lib/dataProviders/membershipApplications';
import moment from 'moment';

export default function MembershipApplicationsEdit({
  params,
}: {
  params: { id: string };
}) {
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
      type: 'date',
      name: 'applicationDate',
      label: 'Application Date',
      required: true,
      row: 5,
      cell: 1,
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
    {
      type: 'textarea',
      name: 'notes',
      label: 'Additional Notes',
      row: 6,
      cell: 3,
    },
    {
      type: 'divider',
      row: 7,
      cell: 3,
    },
    {
      type: 'title',
      label: 'System Information',
      row: 8,
      cell: 3,
    },
    {
      type: 'display',
      name: 'createdAt',
      label: 'Created At',
      row: 9,
      cell: 1,
      component: (form) =>
        moment(Number(form.watch('createdAt'))).format('MM/DD/YYYY hh:mm A'),
    },
    {
      type: 'display',
      name: 'updatedAt',
      label: 'Updated At',
      row: 9,
      cell: 1,
      component: (form) =>
        moment(Number(form.watch('updatedAt'))).format('MM/DD/YYYY hh:mm A'),
    },
    {
      type: 'display',
      name: 'id',
      label: 'ID',
      row: 9,
      cell: 1,
    },
  ];

  return (
    <ResourceForm
      mode='edit'
      title='Edit Membership Application'
      subtitle='Update membership application details'
      dataProvider={MembershipApplicationsDataProvider}
      getIDon={() => params.id}
      fields={fields}
      gridCols={3}
    />
  );
}
