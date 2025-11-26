import { prisma } from "@repo/database";

export default async function Page() {
  const user = await prisma.user.findFirst() 
  return (
    <div className="">
      {user?.name ?? "No user added yet"}
    </div>
  )
}
