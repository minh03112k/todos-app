'use client';

import React, { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { MdDelete } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Block {
  id: number;
  content: string;
  position: number;
}

export default function Home() {
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

  const handleRemove = (id: number) => {
    const updatedBlocks = blocks.filter(block => block.id !== id);
    setBlocks(updatedBlocks);
  }

  const handleMoveUpPosition = (id: number) => {
    const updatedBlocksPosition = blocks.map((block) => {
      if (block.id === id) {
        return {...block, position: Math.min(2, block.position + 1)}
      }
      return block;
    })

    setBlocks(updatedBlocksPosition);
  }

  const handleMoveDownPosition = (id: number) => {
    const updatedBlocksPosition = blocks.map((block) => {
      if (block.id === id) {
        return {...block, position: Math.max(0, block.position - 1)}
      }
      return block;
    })

    setBlocks(updatedBlocksPosition);
  }

  return (
    <main className="flex min-h-screen flex-col p-24 items-center gap-8 item">
      <div className="flex flex-row gap-4">
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter content..."
        />
        <Button onClick={handleCreateBlock}>Create Block</Button>
      </div>
      <div className="flex flex-row w-full">
        {
          Array.from({ length: 3 }, (_, index) => (
            <div key={index} className='w-full flex items-center flex-col border-2 border-gray-400 p-8 mx-4 rounded-2xl shadow-lg shadow-gray-300'>
              <p className='items-center text-2xl font-bold'>{index === 0 ? 'To Do' : index === 1 ? 'In Progress' : 'Done'}</p>
              {blocks.filter((block) => block.position === index).map((block) => (
                <div key={block.id} className='w-full border-1 border-amber-900 p-4 rounded-2xl flex items-center my-8 '>
                  <button onClick={() => handleMoveDownPosition(block.id)}><FaArrowLeft /></button>
                  <div className='flex flex-row justify-between items-center w-full mx-8'>
                    <div>
                      <p>{block.content}</p>
                    </div>
                    <div>
                      <button onClick={() => handleRemove(block.id)}><MdDelete /></button>
                    </div>
                  </div>
                  <button onClick={() => handleMoveUpPosition(block.id)}><FaArrowRight /></button>
                </div>
              ))}
            </div>
          ))
        }
      </div>
    </main>
);
}
