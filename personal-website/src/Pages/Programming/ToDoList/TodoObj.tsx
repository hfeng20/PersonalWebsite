import React from 'react';

export default interface TodoObj {
    task: string
    description: string
    tags: string[]
    id: number
    complete: boolean
}