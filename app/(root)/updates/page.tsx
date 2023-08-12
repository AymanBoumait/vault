const Page = async () => {
  return (
    <div className="main-container">
      <h1 className="head-text mb-10">
        Updates and Support
      </h1>

      <div className="max-w-md w-full mx-auto">
        <div className="mb-8">
          <p className="text-light-2">Contact us via email</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="mailto:ayman.b.dev@gmail.com">
              <button className="user-card_btn mt-2" style={{ fontSize: '20px', padding: '16px 28px' }}>
                Contact
              </button>
            </a>
            <a href="https://mynewsletter.vercel.app/" target="_blank">
              <button className="user-card_btn mt-2" style={{ fontSize: '20px', padding: '16px 28px' }}>
                Subscribe
              </button>
            </a>
            <a href="https://discord.gg/yBwcTR7AST" target="_blank">
              <button className="user-card_btn mt-2" style={{ fontSize: '20px', padding: '16px 28px' }}>
                Discord
              </button>
            </a>
            <a href="/privacypolicy">
              <button className="user-card_btn mt-2" style={{ fontSize: '20px', padding: '16px 28px' }}>
                Privacy Policy
              </button>
            </a>
          </div>
        </div>
        <hr className="separating-line" />

        <h2 className="text-light-2 mb-3 pt-6">The purpose behind the platform</h2>
        <p className="text-light-3">
          I created this platform as a safe place for people, especially students, to discuss topics they are passionate about. While the platform encourages open discussions, it's important to note that certain restrictions are in place to ensure a respectful and safe environment. NSFW topics and any form of harassment are strictly prohibited.
        </p>
        <hr className="separating-line" />

        <div>
          <p className="text-light-2 pt-6">What's new? {"8/10/2023"}</p>
          <ul className="list-disc pl-6 text-light-3">
            <li>Added new features to the platform.</li>
            <li>Improved user interface for better usability.</li>
            <li>Fixed various bugs.</li>
            <li>I deleted the database by mistake and now all the posts that I was making when I was building the platform are gone. I miss them.</li>
            <li>The buttons now open in a new tab.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
