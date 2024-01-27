'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import * as S from './page.styled';

const CanvasViewer = dynamic(
  () => import('../src/components/Canvas/CanvasViewer/CanvasViewer'),
  { ssr: false },
);

export default function Home() {
  return (
    <S.Container>
      <S.CanvasWrapper>
        <Suspense fallback={null}>
          <CanvasViewer />
        </Suspense>
      </S.CanvasWrapper>
    </S.Container>
  );
}
