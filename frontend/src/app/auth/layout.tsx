// frontend/app/auth/layout.tsx
import { Suspense } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading auth...</div>}>
      {children}
    </Suspense>
  );
}