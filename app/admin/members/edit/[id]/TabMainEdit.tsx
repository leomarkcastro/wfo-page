'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { MembersDataProvider } from '@/lib/dataProviders/members';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useToast } from '@/hooks/use-toast';

export default function TabMainEdit() {
  const router = useRouter();
  const param = useParams();
  const { id } = param;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { toast } = useToast();

  async function fetchData() {
    if (!id) return;
    const res = await MembersDataProvider.getOne({
      id: id as string,
      meta: {},
      resource: 'members',
    });
    let data = JSON.parse(JSON.stringify(res.data));

    // Format graduation years to YYYY-MM-DD format for date inputs
    [
      'dental_graduationYear',
      'ortho_graduationYear',
      'postgraduate_graduationYear',
    ].forEach((field) => {
      if (data[field]) {
        data[field] = moment(data[field]).format('YYYY-MM-DD');
      }
    });

    setData(data);
    setLoading(false);
  }

  async function submitData(data) {
    if (!id) return;
    const res = await MembersDataProvider.update({
      id: id as string,
      variables: data,
      meta: {},
      resource: 'members',
    });
    toast({
      title: 'Member Updated',
      description: 'Member has been updated successfully',
    });
  }

  async function deleteData() {
    if (!id) return;
    await MembersDataProvider.deleteOne({
      id: id as string,
      meta: {},
      resource: 'members',
      variables: {},
    });
    toast({
      title: 'Member Deleted',
      description: 'Member has been deleted successfully',
    });
    router.push('/admin/members');
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  return (
    <QuickForm
      gridCols={3}
      onCancel={() => {
        window.history.back();
      }}
      onSubmit={(data) => {
        console.log(data);
        submitData(data);
      }}
      onDelete={deleteData}
      title='Edit Member'
      subtitle='Edit member details'
      fields={[
        {
          type: 'title',
          label: 'Personal Information',
          row: 0,
          cell: 3,
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
          type: 'divider',
          row: 4,
          cell: 3,
        },

        {
          type: 'title',
          label: 'Contact Information',
          row: 5,
          cell: 3,
        },
        {
          type: 'text',
          name: 'home_phoneNumber',
          label: 'Home Phone',
          row: 6,
          cell: 1,
        },
        {
          type: 'text',
          name: 'business_phoneNumber',
          label: 'Business Phone',
          row: 6,
          cell: 1,
        },
        {
          type: 'text',
          name: 'cell_phoneNumber',
          label: 'Cell Phone',
          row: 6,
          cell: 1,
        },
        {
          type: 'divider',
          row: 7,
          cell: 3,
        },

        {
          type: 'title',
          label: 'Home Address',
          row: 8,
          cell: 3,
        },
        {
          type: 'text',
          name: 'home_addressLine1',
          label: 'Home Address Line 1',
          row: 9,
          cell: 2,
        },
        {
          type: 'text',
          name: 'home_addressLine2',
          label: 'Home Address Line 2',
          row: 9,
          cell: 1,
        },
        {
          type: 'text',
          name: 'home_city',
          label: 'Home City',
          row: 10,
          cell: 1,
        },
        {
          type: 'text',
          name: 'home_state',
          label: 'Home State',
          row: 10,
          cell: 1,
        },
        {
          type: 'text',
          name: 'home_postalCode',
          label: 'Home Postal Code',
          row: 10,
          cell: 1,
        },
        {
          type: 'text',
          name: 'home_country',
          label: 'Home Country',
          row: 11,
          cell: 3,
        },
        {
          type: 'divider',
          row: 12,
          cell: 3,
        },

        {
          type: 'title',
          label: 'Business Address',
          row: 13,
          cell: 3,
        },
        {
          type: 'text',
          name: 'business_addressLine1',
          label: 'Business Address Line 1',
          row: 14,
          cell: 2,
        },
        {
          type: 'text',
          name: 'business_addressLine2',
          label: 'Business Address Line 2',
          row: 14,
          cell: 1,
        },
        {
          type: 'text',
          name: 'business_city',
          label: 'Business City',
          row: 15,
          cell: 1,
        },
        {
          type: 'text',
          name: 'business_state',
          label: 'Business State',
          row: 15,
          cell: 1,
        },
        {
          type: 'text',
          name: 'business_postalCode',
          label: 'Business Postal Code',
          row: 15,
          cell: 1,
        },
        {
          type: 'text',
          name: 'business_country',
          label: 'Business Country',
          row: 16,
          cell: 3,
        },
        {
          type: 'divider',
          row: 17,
          cell: 3,
        },

        {
          type: 'title',
          label: 'Education',
          row: 18,
          cell: 3,
        },
        {
          type: 'text',
          name: 'dental_degree',
          label: 'Dental Degree',
          row: 19,
          cell: 1,
        },
        {
          type: 'text',
          name: 'dental_school',
          label: 'Dental School',
          row: 19,
          cell: 1,
        },
        {
          type: 'date',
          name: 'dental_graduationYear',
          label: 'Dental Graduation Year',
          row: 19,
          cell: 1,
        },
        {
          type: 'text',
          name: 'ortho_degree',
          label: 'Ortho Degree',
          row: 20,
          cell: 1,
        },
        {
          type: 'text',
          name: 'ortho_school',
          label: 'Ortho School',
          row: 20,
          cell: 1,
        },
        {
          type: 'date',
          name: 'ortho_graduationYear',
          label: 'Ortho Graduation Year',
          row: 20,
          cell: 1,
        },
        {
          type: 'text',
          name: 'postgraduate_degree',
          label: 'Postgraduate Degree',
          row: 21,
          cell: 1,
        },
        {
          type: 'text',
          name: 'postgraduate_school',
          label: 'Postgraduate School',
          row: 21,
          cell: 1,
        },
        {
          type: 'date',
          name: 'postgraduate_graduationYear',
          label: 'Postgraduate Graduation Year',
          row: 21,
          cell: 1,
        },
        {
          type: 'divider',
          row: 22,
          cell: 3,
        },

        {
          type: 'title',
          label: 'Membership Details',
          row: 23,
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
          required: true,
          row: 24,
          cell: 1,
        },
        {
          type: 'text',
          name: 'memberPackage',
          label: 'Member Package',
          required: true,
          row: 24,
          cell: 1,
        },
        {
          type: 'checkbox',
          name: 'isBlacklisted',
          label: 'Blacklisted',
          row: 24,
          cell: 1,
        },
        {
          type: 'divider',
          row: 25,
          cell: 3,
        },
      ]}
      defaultValues={data}
    />
  );
}
