import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-container text-light-2 max-w-lg mx-auto">
      <h1 className="text-heading1-bold mb-6">Privacy Policy</h1>
      <p className="mb-6">
        Welcome to Vault's Privacy Policy. This policy outlines how we collect, use, and protect your information. If you have any questions, please contact us at <a href="mailto:ayman.b.dev@gmail.com" className="text-primary-500 underline">ayman.b.dev@gmail.com</a>.
      </p>

      <h2 className="text-heading2-semibold mb-4">Information Collection</h2>
      <p className="mb-6">
        We only collect information from users who sign up for our services. When you sign up, we collect your full name and email address. We gather this information through our sign-up and sign-in forms. This information is used to help you connect to your account and access our services.
      </p>

      <h2 className="text-heading2-semibold mb-4">Use of Information</h2>
      <p className="mb-6">
        The data we collect is used solely to facilitate user account access and provide a seamless experience. We also use the collected email addresses to send newsletters to those who have subscribed. Please note that we share your information with third-party service providers like Clerk, which is the database we use to securely store your data.
      </p>

      <h2 className="text-heading2-semibold mb-4">Cookies</h2>
      <p className="mb-6">
        We do not use cookies or similar tracking technologies on our website.
      </p>

      <h2 className="text-heading2-semibold mb-4">Data Security</h2>
      <p className="mb-6">
        We take data security seriously. All user data is securely stored in a safe database on a secure server. Our measures are designed to protect your information from unauthorized access or breaches.
      </p>

      <h2 className="text-heading2-semibold mb-4">User Rights</h2>
      <p className="mb-6">
        You have the right to modify your email, name, and username associated with your account. Please note that while we collect email, name, and username, this information is only used for login purposes.
      </p>

      <h2 className="text-heading2-semibold mb-4">Children's Privacy</h2>
      <p className="mb-6">
        Vault is not intended for children, and we do not knowingly collect information from individuals under a certain age. If we discover that a user is underage, their account will be suspended.
      </p>

      <h2 className="text-heading2-semibold mb-4">Changes to Privacy Policy</h2>
      <p className="mb-6">
        It's a good idea to periodically check our <a href="/updates" className="text-primary-500 underline">Updates page</a> to stay informed about any changes to our Privacy Policy.
      </p>

      <h2 className="text-heading2-semibold mb-4">Contact Information</h2>
      <p>
        If you have any questions, concerns, or requests regarding your privacy, please reach out to us via email at <a href="mailto:ayman.b.dev@gmail.com" className="text-primary-500 underline">ayman.b.dev@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
