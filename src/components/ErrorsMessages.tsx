type ErrorsMessagesProps = {
  children: React.ReactNode
};

export default function ErrorsMessages({ children }: ErrorsMessagesProps) {
  return (
    <p className="text-sm bg-red-200 rounded-full text-center text-red-500">{children}</p>
  )
}
