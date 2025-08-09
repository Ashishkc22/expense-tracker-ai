export default function HomePageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <p>Page layout</p>
      {children}
    </div>
  );
}
