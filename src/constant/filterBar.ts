export const options = [
  { value: '', label: '전부' },
  { value: 'min=3', label: '추억' },
  { value: 'min=1&max=3', label: '후회' },
  { value: '혼자', label: '혼자' },
  { value: '같이', label: '같이' },
] as const;

export type FilterOption = (typeof options)[number]['label'];
