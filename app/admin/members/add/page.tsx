'use client';

import { FieldType } from '@/components/custom/quick-form.types';
import { ResourceForm } from '@/components/custom/resource-form';
import { MembersDataProvider } from '@/lib/dataProviders/members';

export default function MembersAdd() {
  const fields: FieldType[] = [
    {
      type: 'title',
      label: 'Personal Information',
      row: 0,
      cell: 3,
    },
    {
      type: 'select',
      options: [
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Prof.', value: 'Prof.' },
      ],
      allowCustom: true,
      name: 'prefix',
      label: 'Prefix',
      row: 1,
      cell: 1,
    },
    {
      type: 'text',
      name: 'suffix',
      label: 'Suffix',
      row: 1,
      cell: 1,
    },
    {
      type: 'text',
      name: 'society',
      label: 'Society',
      row: 1,
      cell: 1,
    },
    {
      type: 'text',
      name: 'name',
      label: 'First Name',
      required: true,
      row: 2,
      cell: 1,
    },
    {
      type: 'text',
      name: 'middleName',
      label: 'Middle Name',
      row: 2,
      cell: 1,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      required: true,
      row: 2,
      cell: 1,
    },
    {
      type: 'display',
      name: 'displayName',
      label: 'Display Name',
      row: 3,
      cell: 1,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      required: true,
      row: 3,
      cell: 2,
    },
    {
      type: 'textarea',
      name: 'about',
      label: 'About',
      row: 4,
      cell: 3,
    },
    {
      type: 'divider',
      row: 5,
      cell: 3,
    },

    {
      type: 'title',
      label: 'Contact Information',
      row: 6,
      cell: 3,
    },
    {
      type: 'text',
      name: 'home_phoneNumber',
      label: 'Home Phone',
      row: 7,
      cell: 1,
    },
    {
      type: 'text',
      name: 'business_phoneNumber',
      label: 'Business Phone',
      row: 7,
      cell: 1,
    },
    {
      type: 'text',
      name: 'cell_phoneNumber',
      label: 'Cell Phone',
      row: 7,
      cell: 1,
    },
    {
      type: 'divider',
      row: 8,
      cell: 3,
    },

    {
      type: 'title',
      label: 'Primary Address',
      row: 9,
      cell: 3,
    },
    {
      type: 'text',
      name: 'home_addressLine1',
      label: 'Primary Address Line 1',
      row: 10,
      cell: 2,
    },
    {
      type: 'text',
      name: 'home_addressLine2',
      label: 'Primary Address Line 2',
      row: 10,
      cell: 1,
    },
    {
      type: 'text',
      name: 'home_city',
      label: 'Primary City',
      row: 11,
      cell: 1,
    },
    {
      type: 'text',
      name: 'home_state',
      label: 'Primary State',
      row: 11,
      cell: 1,
    },
    {
      type: 'text',
      name: 'home_postalCode',
      label: 'Primary Postal Code',
      row: 11,
      cell: 1,
    },
    {
      type: 'text',
      name: 'home_country',
      label: 'Primary Country',
      row: 12,
      cell: 3,
    },
    {
      type: 'divider',
      row: 13,
      cell: 3,
    },

    {
      type: 'title',
      label: 'Secondary Address',
      row: 14,
      cell: 3,
    },
    {
      type: 'text',
      name: 'business_addressLine1',
      label: 'Secondary Address Line 1',
      row: 15,
      cell: 2,
    },
    {
      type: 'text',
      name: 'business_addressLine2',
      label: 'Secondary Address Line 2',
      row: 15,
      cell: 1,
    },
    {
      type: 'text',
      name: 'business_city',
      label: 'Secondary City',
      row: 16,
      cell: 1,
    },
    {
      type: 'text',
      name: 'business_state',
      label: 'Secondary State',
      row: 16,
      cell: 1,
    },
    {
      type: 'text',
      name: 'business_postalCode',
      label: 'Secondary Postal Code',
      row: 16,
      cell: 1,
    },
    {
      type: 'text',
      name: 'business_country',
      label: 'Secondary Country',
      row: 17,
      cell: 3,
    },
    {
      type: 'divider',
      row: 18,
      cell: 3,
    },

    {
      type: 'title',
      label: 'Education',
      row: 19,
      cell: 3,
    },
    {
      type: 'text',
      name: 'dental_degree',
      label: 'Dental Degree',
      row: 20,
      cell: 1,
    },
    {
      type: 'text',
      name: 'dental_school',
      label: 'Dental School',
      row: 20,
      cell: 1,
    },
    {
      type: 'date',
      name: 'dental_graduationYear',
      label: 'Dental Graduation Year',
      row: 20,
      cell: 1,
    },
    {
      type: 'text',
      name: 'ortho_degree',
      label: 'Ortho Degree',
      row: 21,
      cell: 1,
    },
    {
      type: 'text',
      name: 'ortho_school',
      label: 'Ortho School',
      row: 21,
      cell: 1,
    },
    {
      type: 'date',
      name: 'ortho_graduationYear',
      label: 'Ortho Graduation Year',
      row: 21,
      cell: 1,
    },
    {
      type: 'text',
      name: 'postgraduate_degree',
      label: 'Postgraduate Degree',
      row: 22,
      cell: 1,
    },
    {
      type: 'text',
      name: 'postgraduate_school',
      label: 'Postgraduate School',
      row: 22,
      cell: 1,
    },
    {
      type: 'date',
      name: 'postgraduate_graduationYear',
      label: 'Postgraduate Graduation Year',
      row: 22,
      cell: 1,
    },
    {
      type: 'divider',
      row: 23,
      cell: 3,
    },

    {
      type: 'title',
      label: 'Membership Details',
      row: 24,
      cell: 3,
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
      // required: true,
      row: 25,
      cell: 1,
    },
    {
      type: 'text',
      name: 'memberPackage',
      label: 'Member Package',
      // required: true,
      row: 25,
      cell: 1,
    },
    {
      type: 'checkbox',
      name: 'isBlacklisted',
      label: 'Blacklisted',
      row: 25,
      cell: 1,
    },
  ];

  return (
    <ResourceForm
      mode='create'
      title='New Member'
      subtitle='Add new member details'
      dataProvider={MembersDataProvider}
      fields={fields}
      // returnPath='/admin/members'
      gridCols={3}
    />
  );
}
