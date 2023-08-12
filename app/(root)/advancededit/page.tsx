import { UserProfile } from "@clerk/nextjs"
import { dark } from "@clerk/themes";

const Page = async () => {
    return(
        <UserProfile 
            appearance={{
                baseTheme: dark,
            }}
        />
        
    )
}

export default Page;