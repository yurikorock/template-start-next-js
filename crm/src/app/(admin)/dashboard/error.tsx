'use client';

import Button from '@/app/components/button';
import React from 'react';

export interface ErrorCOmponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorCOmponentProps) {
  return (
    <div>
      <p>{`"Something went wrong. ${error.message}`}</p>
      <Button onClick={()=> reset()}>Try again</Button>
    </div>
  );
}
