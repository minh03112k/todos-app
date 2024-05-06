import React from 'react';
import TaskList from '@/components/TaskList';

export default function Home() {

  return (
    <main className="min-h-svh bg-gray-100 p-8 md:px-32 md:py-16">
      <p className="text-5xl font-bold">Tasks List</p>
      <TaskList />
    </main>
  );
}
