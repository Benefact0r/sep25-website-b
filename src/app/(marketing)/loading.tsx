export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="h-14 w-full animate-pulse rounded-3xl bg-muted/40" />
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-32 animate-pulse rounded-3xl bg-muted/30" />
        ))}
      </div>
    </div>
  );
}
