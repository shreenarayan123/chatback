const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-light-gray">
        {children}
      </div>
    </>
  )
}

export default AuthLayout
