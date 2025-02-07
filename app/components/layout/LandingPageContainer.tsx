export default function LandingPageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-20 py-20">{children}</div>;
}
