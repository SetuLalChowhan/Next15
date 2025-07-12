export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>User Navigation</header>
      <main>{children}</main>
    </div>
  );
}