interface AuthHeaderProps {
    title: string;
    label: string;
}
function AuthHeader({title, label}: AuthHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  )
}

export default AuthHeader
