// app/(user)/layout.tsx
import UserLayout from "@/components/layouts/UserLayout";

export default function UserSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserLayout>{children}</UserLayout>;
}
