'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
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

export type FieldType =
  | {
      type: 'text';
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
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
      row?: number;
      cell?: number;
    }
  | {
      type: 'select';
      name: string;
      label: string;
      options: { label: string; value: string }[];
      required?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'checkbox';
      name: string;
      label: string;
      row?: number;
      cell?: number;
    }
  | {
      type: 'multiselect';
      name: string;
      label: string;
      options: { label: string; value: string }[];
      required?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'file';
      name: string;
      label: string;
      accept?: string;
      required?: boolean;
      row?: number;
      cell?: number;
    }
  | {
      type: 'custom';
      name: string;
      label: string;
      required?: boolean;
      row?: number;
      cell?: number;
      component: React.ReactNode;
    };

export interface QuickFormProps {
  fields: FieldType[];
  onSubmit: (data: any) => void;
  className?: string;
  gridCols?: number;
  onCancel?: () => void;
  title?: string;
  subtitle?: string;
}

export function QuickForm({
  fields,
  onSubmit,
  onCancel,
  className,
  gridCols = 1,
  title,
  subtitle,
}: QuickFormProps) {
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
          schema[field.name] = z.boolean();
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
      }
    });

    return z.object(schema);
  };

  const form = useForm({
    resolver: zodResolver(generateSchema()),
  });

  const renderField = (field: FieldType) => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            placeholder={field.placeholder}
            {...form.register(field.name)}
          />
        );
      case 'number':
        return (
          <Input
            type='number'
            {...form.register(field.name, { valueAsNumber: true })}
          />
        );
      case 'select':
        return (
          <Select onValueChange={(value) => form.setValue(field.name, value)}>
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-4', className)}
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
                className='space-y-2'
                style={{
                  gridColumn: field.cell ? `span ${field.cell}` : 'span 1',
                }}
              >
                <label className='text-sm font-medium'>{field.label}</label>
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
        <div className='flex justify-end gap-2'>
          {onCancel && (
            <Button type='button' variant='outline' onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  );
}
