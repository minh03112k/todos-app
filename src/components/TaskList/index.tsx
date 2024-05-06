'use client';

import { useGetTasks } from '@/hooks/taskCustomHook';
import { Divider, Spinner, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import moment from 'moment';

export default function TaskList() {
  const { data: taskList, isError, isPending, error } = useGetTasks();

  if (isPending) {
    return (
      <div className='w-full my-8 flex justify-center items-center'>
        <Spinner />
      </div>
    );
  }

  if (isError) return <p className="my-8">{error.message}</p>;

  return (
    <div className="my-8">
      <div className="grid grid-cols-3 gap-4">
        {
          taskList?.data?.map((task: any) =>
            <div key={task.id}>
              <Card
                fullWidth
                isPressable
                shadow="lg"
              >
                <CardHeader>
                  <div className="flex justify-between items-center w-full">
                      <p className="text-xl font-bold">{task.title}</p>
                      <p className="font-bold text-xl">{task.tag}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  {task.body}
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-between items-center">
                  <p className='text-small'>{moment(task.createdAt).format('ddd, MMM D, YYYY hh:mm:ss a')}</p>
                </CardFooter>
              </Card>
            </div>,
          )}
      </div>
    </div>
  );
}