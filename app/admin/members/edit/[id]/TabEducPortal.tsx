'use client';

import { QuickForm } from '@/components/custom/quick-form';
import { useParams } from 'next/navigation';
import moment from 'moment';
import { useFunction } from '@/components/hooks/useFunction';
import { apolloClient } from '@/lib/apollo/ApolloClient';
import { Api_Wpportaluser_GetDocument } from '@/graphql/generated/graphql';
import { useMemo } from 'react';

interface Course {
  course_id: number;
  title: string;
  enrollment_date: string;
  completion_date: string | null;
  progress_percentage: number;
  completed_steps: number;
  total_steps: number;
  status: string;
}

interface EducPortalProfile {
  user_id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  registered_date?: string;
  avatar_url?: string;
  roles?: string[];
  courses_count?: number;
  courses?: Course[];
}

export default function TabEducPortal() {
  const { id } = useParams();
  //   const [profile, setProfile] = useState<EducPortalProfile>({});

  const { data: profile, loading } = useFunction(
    async () => {
      const data = await apolloClient.mutate({
        mutation: Api_Wpportaluser_GetDocument,
        variables: {
          input: {
            data: {
              dbID: id as string,
            },
          },
        },
      });

      return data.data.api_wpportaluser_get.data;
    },
    {
      autoLoad: true,
      deps: [id],
      postProcess: (data) => {
        return data;
      },
    },
  );

  const courseFields = useMemo(() => {
    const _cf =
      profile?.courses
        ?.map((course, index) => [
          {
            type: 'title' as any,
            label: `Course ${index + 1}: ${course.title}`,
            row: (index + 1) * 4,
            cell: 3,
          },
          {
            type: 'display' as any,
            name: `courses.${index}.enrollment_date`,
            label: 'Enrollment Date',
            row: (index + 1) * 4 + 1,
            cell: 1,
            component: moment(course.enrollment_date).format('YYYY-MM-DD'),
          },
          {
            type: 'display' as any,
            name: `courses.${index}.status`,
            label: 'Status',
            row: (index + 1) * 4 + 1,
            cell: 1,
            component: course.status,
          },
          {
            type: 'display' as any,
            name: `courses.${index}.progress`,
            label: 'Progress',
            row: (index + 1) * 4 + 1,
            cell: 1,
            component: `${course.completed_steps}/${course.total_steps} (${course.progress_percentage}%)`,
          },
        ])
        ?.flat() ?? [];

    return _cf;
  }, [profile]);

  if (loading) return <div>Loading...</div>;

  if (!profile) return <div>Profile not found</div>;

  //   const courseFields = [];

  return (
    <QuickForm
      gridCols={3}
      onSubmit={() => {}}
      hideActions={true}
      fields={[
        {
          type: 'title',
          label: 'Education Portal Profile',
          row: 0,
          cell: 3,
        },
        {
          type: 'display',
          name: 'user_id',
          label: 'User ID',
          row: 1,
          cell: 1,
        },
        {
          type: 'display',
          name: 'email',
          label: 'Email',
          row: 1,
          cell: 2,
        },
        {
          type: 'display',
          name: 'registered_date',
          label: 'Registration Date',
          row: 2,
          cell: 1,
          component: moment(profile?.registered_date).format('YYYY-MM-DD'),
        },
        {
          type: 'display',
          name: 'roles',
          label: 'Roles',
          row: 2,
          cell: 2,
          component: profile?.roles?.join(', '),
        },
        {
          type: 'divider',
          row: 3,
          cell: 3,
        },
        ...courseFields,
      ]}
      defaultValues={profile}
    />
  );
}
