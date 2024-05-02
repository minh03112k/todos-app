import React from 'react';
import CreateTaskForm from '../../components/CreateTaskForm';

export default function CreateTaskPage() {
  return (
    <main className="min-h-svh bg-gray-300 container mx-auto px-32 py-16">
      <p className="text-5xl font-bold mb-8">New Task</p>
      <CreateTaskForm />
    </main>
  );
}