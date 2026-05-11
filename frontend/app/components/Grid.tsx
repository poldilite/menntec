interface GridProps {
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export function Grid({ columns = 3, gap = 'medium', children }: GridProps) {
  const gapMap = {
    small: 'gap-4',
    medium: 'gap-6',
    large: 'gap-8',
  };

  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 tablet-portrait-up:grid-cols-2',
    3: 'grid-cols-1 tablet-portrait-up:grid-cols-2 desktop:grid-cols-3',
    4: 'grid-cols-1 tablet-portrait-up:grid-cols-2 tablet-landscape-up:grid-cols-3 big-desktop:grid-cols-4',
  };

  return (
    <div className={`grid ${colsMap[columns]} ${gapMap[gap]} w-full`}>
      {children}
    </div>
  );
}
