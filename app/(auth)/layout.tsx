export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-200">
      <div className="w-full w-full">{children}</div>
    </div>
  )
}
