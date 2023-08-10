const Page = async () => {
  return (
    <div>
      <h1 className="head-text mb-10">
        Updates and Support
      </h1>

      <div>
        <p className="text-light-2">Contact us via email</p>
        <a href="mailto:ayman.b.dev@gmail.com">
          <button className="user-card_btn mb-3" style={{ fontSize: '18px', padding: '12px 24px' }}>
            Contact
          </button>
        </a>
        <hr className="separating-line" />

        <p className="text-light-2">Subscribe to the newsletter</p>
        <a href="https://mynewsletter.vercel.app/">
          <button className="user-card_btn mb-3" style={{ fontSize: '18px', padding: '12px 24px' }}>
            Subscribe
          </button>
        </a>
        <hr className="separating-line" />

        <p className="text-light-2">Join the Discord server</p>
        <a href="https://discord.gg/yBwcTR7AST">
          <button className="user-card_btn mb-3" style={{ fontSize: '18px', padding: '12px 24px' }}>
            Discord
          </button>
        </a>
        <hr className="separating-line" />

        <h2 className="text-light-2 mb-3 pt-6">The purpose behind the platform</h2>
        <p className="text-light-3">
          I created this platform as a safe place for people, especially students, to discuss topics they are passionate about. While the platform encourages open discussions, it's important to note that certain restrictions are in place to ensure a respectful and safe environment. NSFW topics and any form of harassment are strictly prohibited.
        </p>
        <hr className="separating-line" />
        <div>
          <p className="text-light-2 pt-6">What's new?</p>
          <ul className="list-disc pl-6 text-light-3">
            <li>Added new features to the platform</li>
            <li>Improved user interface for better usability</li>
            <li>Fixed various bugs</li>
            <li>I deleted the database by a mistake and now all the posts that I was posting when I was making the platform are gone. I miss them.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
