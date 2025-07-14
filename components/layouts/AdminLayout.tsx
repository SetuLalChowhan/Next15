export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Dashboard</header>
      <main>{children}</main>
    </div>
  );
}