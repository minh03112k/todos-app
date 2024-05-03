'use client';

import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { useCreateTaskForm } from '@/hooks/createTaskCustomHook';

export default function CreateTasks() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useCreateTaskForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex gap-8 flex-col">
        <div className="flex gap-8 w-full">
          <Input
            label="Title"
            type="text"
            errorMessage={errors.title?.message}
            isInvalid={!!errors.title}
            {...register('title')}
          />
          <Select
            label="Tags"
            {...register('tag')}
            isInvalid={!!errors.tag}
            errorMessage={errors.tag?.message}
          >
            <SelectItem key="1">To Do</SelectItem>
            <SelectItem key="2">In Progress</SelectItem>
            <SelectItem key="3">Done</SelectItem>
          </Select>
        </div>
        <Textarea
          errorMessage={errors.body?.message}
          isInvalid={!!errors.body}
          label="Body"
          {...register('body')}
        />
      </div>
      <div className="flex w-full justify-end">
        <Button className="w-fit" color="primary" type="submit">Create Task</Button>
      </div>
    </form>
  );
}