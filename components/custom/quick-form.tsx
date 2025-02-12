'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Card, CardHeader } from './card';
import { CardFooter } from '../ui/card';
import { Combobox } from '../ui/combobox';
import { DeleteModal } from './delete-modal';

export type FieldType =
  | {
      type: 'title';
      name?: string;
      label: string;
      row?: number;
      cell?: number;
    }
  | {
      type: 'divider';
      name?: string;
      label?: string;
      row?: number;
      cell?: number;
    }
  | {
      type: 'text';
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'number';
      name: string;
      label: string;
      min?: number;
      max?: number;
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'select';
      name: string;
      label: string;
      options: { label: string; value: string }[];
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
      allowCustom?: boolean;
    }
  | {
      type: 'checkbox';
      name: string;
      label: string;
      readonly?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'multiselect';
      name: string;
      label: string;
      options: { label: string; value: string }[];
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'file';
      name: string;
      label: string;
      accept?: string;
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'custom';
      name: string;
      label: string;
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
      component: React.ReactNode;
    }
  | {
      type: 'date';
      name: string;
      label: string;
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'time';
      name: string;
      label: string;
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'datetime';
      name: string;
      label: string;
      required?: boolean;
      readonly?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'display';
      name: string;
      label: string;
      component?: React.ReactNode;
      row?: number;
      cell?: number;
    };

export interface QuickFormProps {
  fields: FieldType[];
  onSubmit: (data: any) => void;
  className?: string;
  gridCols?: number;
  onCancel?: () => void;
  onDelete?: () => void;
  title?: string;
  subtitle?: string;
  defaultValues?: Record<string, any>;
  hideActions?: boolean;
  hideSubmit?: boolean;
  hideDelete?: boolean;
  hideCancel?: boolean;
}

export function QuickForm({
  fields,
  onSubmit,
  onCancel,
  onDelete,
  className,
  gridCols = 1,
  title,
  subtitle,
  defaultValues,
  hideActions = false,
  hideSubmit = false,
  hideDelete = false,
  hideCancel = false,
}: QuickFormProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Dynamically generate Zod schema based on fields
  const generateSchema = () => {
    const schema: Record<string, any> = {};

    fields.forEach((field) => {
      switch (field.type) {
        case 'text':
          schema[field.name] = field.required
            ? z.string().min(1)
            : z.string().optional();
          break;
        case 'number':
          let numberSchema = z.number();
          if (field.min !== undefined)
            numberSchema = numberSchema.min(field.min);
          if (field.max !== undefined)
            numberSchema = numberSchema.max(field.max);
          schema[field.name] = field.required
            ? numberSchema
            : numberSchema.optional();
          break;
        case 'select':
          schema[field.name] = field.required
            ? z.string().min(1)
            : z.string().optional();
          break;
        case 'checkbox':
          schema[field.name] = z.boolean().default(false);
          break;
        case 'multiselect':
          schema[field.name] = field.required
            ? z.array(z.string()).min(1)
            : z.array(z.string());
          break;
        case 'file':
          schema[field.name] = field.required
            ? z.instanceof(File)
            : z.instanceof(File).optional();
          break;
        case 'date':
        case 'time':
        case 'datetime':
          schema[field.name] = field.required
            ? z.string().min(1)
            : z.string().optional();
          break;
      }
    });

    return z.object(schema);
  };

  const form = useForm({
    resolver: zodResolver(generateSchema()),
    defaultValues: defaultValues,
  });

  const watch = form.watch();

  // Add effect to update form values when defaultValues change
  useEffect(() => {
    if (defaultValues) {
      Object.entries(defaultValues).forEach(([key, value]) => {
        form.setValue(key, value);
      });
    }
  }, [defaultValues, form]);

  const renderField = (field: FieldType) => {
    switch (field.type) {
      case 'display':
        return (
          field.component || (
            <div className='rounded-md bg-slate-50 p-2'>
              {form.getValues(field.name)}
            </div>
          )
        );
      case 'title':
        return <h3 className='pt-4 text-lg font-semibold'>{field.label}</h3>;
      case 'divider':
        return <hr className='my-2 border-t border-gray-200' />;
      case 'text':
        return (
          <Input
            placeholder={field.placeholder}
            readOnly={field.readonly}
            {...form.register(field.name)}
          />
        );
      case 'number':
        return (
          <Input
            type='number'
            readOnly={field.readonly}
            {...form.register(field.name, { valueAsNumber: true })}
          />
        );
      case 'select':
        if (field.allowCustom) {
          return (
            <Combobox
              value={watch[field.name]}
              setValue={(value) => form.setValue(field.name, value)}
              content={field.options}
              allowCustom
            />
          );
        }
        return (
          <Select
            onValueChange={(value) => form.setValue(field.name, value)}
            value={watch[field.name]}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select...' />
            </SelectTrigger>
            <SelectContent>
              {field.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'checkbox':
        return (
          <Checkbox
            onCheckedChange={(checked) => form.setValue(field.name, checked)}
            checked={watch[field.name]}
          />
        );
      case 'file':
        return (
          <Input
            type='file'
            accept={field.accept}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) form.setValue(field.name, file);
            }}
          />
        );
      case 'custom':
        return field.component;
      case 'date':
        return (
          <Input
            type='date'
            readOnly={field.readonly}
            {...form.register(field.name)}
          />
        );
      case 'time':
        return (
          <Input
            type='time'
            readOnly={field.readonly}
            {...form.register(field.name)}
          />
        );
      case 'datetime':
        return (
          <Input
            type='datetime-local'
            readOnly={field.readonly}
            {...form.register(field.name)}
          />
        );
    }
  };

  // Group fields by row
  const groupedFields = fields.reduce(
    (acc: Record<number, FieldType[]>, field) => {
      const row = field.row ?? 0;
      if (!acc[row]) acc[row] = [];
      acc[row].push(field);
      return acc;
    },
    {},
  );

  return (
    <Form {...form}>
      <DeleteModal
        open={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        onConfirm={() => {
          setShowDeleteModal(false);
          onDelete?.();
        }}
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid grid-cols-1 gap-2 lg:grid-cols-4')}
      >
        <div
          className={cn(
            'col-span-3 space-y-3 rounded-lg bg-slate-100 p-4',
            className,
            hideActions && 'lg:col-span-4',
          )}
        >
          {(title || subtitle) && (
            <div className='mb-6 space-y-2'>
              {subtitle && (
                <p className='ml-1 text-xs text-muted-foreground'>{subtitle}</p>
              )}
              {title && <h2 className='text-2xl font-semibold'>{title}</h2>}
            </div>
          )}

          {Object.entries(groupedFields).map(([row, rowFields]) => (
            <div
              key={row}
              className={`grid grid-cols-${gridCols} gap-4`}
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
              }}
            >
              {rowFields.map((field) => (
                <div
                  key={field.name}
                  className='flex flex-col gap-2'
                  style={{
                    gridColumn: field.cell ? `span ${field.cell}` : 'span 1',
                  }}
                >
                  {field.type === 'title' ? (
                    ''
                  ) : (
                    <label className='text-xs font-medium'>{field.label}</label>
                  )}
                  {renderField(field)}
                  {form.formState.errors[field.name] && (
                    <p className='text-sm text-red-500'>
                      {form.formState.errors[field.name]?.message as string}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        {!hideActions && (
          <div className='flex justify-end gap-2'>
            <Card className='h-fit w-full'>
              <CardHeader title='Actions' action={false} />
              <CardFooter className='flex w-full flex-col gap-2'>
                {!hideSubmit && (
                  <Button className='w-full' type='submit'>
                    Submit
                  </Button>
                )}
                {onDelete && !hideDelete && (
                  <Button
                    className='w-full border-destructive'
                    type='button'
                    variant='outline'
                    onClick={() => setShowDeleteModal(true)}
                  >
                    Delete
                  </Button>
                )}
                {onCancel && !hideCancel && (
                  <Button
                    className='w-full'
                    type='button'
                    variant='outline'
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        )}
      </form>
    </Form>
  );
}
