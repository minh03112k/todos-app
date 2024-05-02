'use client';

import { Input, Textarea } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import React, { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

interface Block {
  id: number;
  content: string;
  position: number;
}

export default function CreateTasks() {

  const [inputValue, setInputValue] = useState<string>('');
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateBlock = () => {
    if (inputValue.trim() !== '') {
      const newBlock: Block = { id: nextId, content: inputValue, position: 0 };
      setBlocks([...blocks, newBlock]);
      setInputValue('');
      setNextId(nextId + 1);
    }
  };

  return (
      <div className="flex flex-col gap-8">
        <p className="text-5xl font-bold">New Task</p>
        <div className="flex gap-8 flex-col">
          <div className="flex gap-8 w-full">
            <Input
              label="Title"
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
            <Select label="Tags">
              <SelectItem key="1">To Do</SelectItem>
              <SelectItem key="2">In Progress</SelectItem>
              <SelectItem key="3">Done</SelectItem>
            </Select>
          </div>
          <Textarea label="Body" />
        </div>
        <div className="flex w-full justify-end">
          <Button className="w-fit" color="primary" onClick={handleCreateBlock}>Create Task</Button>
        </div>
      </div>
  );
}