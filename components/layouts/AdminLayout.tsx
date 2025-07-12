export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Admin Panel</header>
      <main>{children}</main>
    </div>
  );
}