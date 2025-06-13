export function Select({ children }) {
  return <div className='w-full border p-2 rounded'>{children}</div>;
}
export function SelectTrigger({ children }) {
  return <div>{children}</div>;
}
export function SelectValue({ placeholder }) {
  return <span className='text-gray-500'>{placeholder}</span>;
}
export function SelectContent({ children }) {
  return <div>{children}</div>;
}
export function SelectItem({ value, children }) {
  return <div className='p-1'>{children}</div>;
}
