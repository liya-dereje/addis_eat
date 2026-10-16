import { cookies } from 'next/headers';

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  if (!token) return null;

  if (token === "valid-customer-token") {
    return { id: "user_31", name: "Almaz", role: "customer" };
  }
  if (token === "valid-staff-token") {
    return { id: "user_77", name: "Chef Chala", role: "staff" };
  }

  return null;
}
