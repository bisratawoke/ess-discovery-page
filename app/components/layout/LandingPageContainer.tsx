export default function LandingPageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col">{children}</div>;
}
