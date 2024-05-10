import React from 'react';
import TaskList from '@/components/TaskList';

export default function Home() {

  return (
    <main className="min-h-svh p-8 md:px-32 md:py-16">
      <h1 className="text-5xl font-bold">Tasks List</h1>
      <TaskList />
    </main>
  );
}
