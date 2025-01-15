import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const user = await auth();

  if (user) {
    redirect("/");
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
