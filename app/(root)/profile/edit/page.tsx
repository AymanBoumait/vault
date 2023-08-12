import Link from "next/link";  // Import Link component
import { UserProfile, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";
import { dark } from "@clerk/themes";
import Image from "next/image";  // Import Image component

// Copy paste most of the code as it is from the /onboarding

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='head-text'>Edit Profile</h1>
        {/* New button */}
        <Link href="/advancededit">
          <div className='flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2'>
            <Image
              src='/assets/advanced.svg'
              alt='button'
              width={16}
              height={16}
            />
            <p className='text-light-2 max-sm:hidden'>Advanced</p>
          </div>
        </Link>
      </div>
      <p className='mt-3 text-base-regular text-light-2'>Make any changes</p>
      
      <section className='mt-12'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </>
  );
}

export default Page;
