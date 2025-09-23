'use client';

import React from 'react';

export interface ClobalErrorProps {}

export default function ClobalError({}: ClobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
}
