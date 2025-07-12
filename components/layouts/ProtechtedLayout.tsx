import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
  access: string[]; // allowed roles, e.g. ['user', 'admin']
};

export default function ProtectedLayout({ children, access }: Props) {
  // Static mock user — replace this with real auth later
  const user = {
    role: "user", // Change this to test: 'user', 'admin', 'seller'
  };

  if (!access.includes(user.role)) {
    // Redirect unauthorized roles
    redirect("/unauthorized");
  }

  return <>{children}</>;
}
