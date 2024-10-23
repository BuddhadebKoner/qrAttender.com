import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl pt-[100px] mx-auto p-8 text-gray-200 shadow-lg rounded-lg">
      <h1 className="text-center text-3xl text-yellow-400 mb-8">Privacy Policy</h1>
      <p className="mb-6">
        This privacy policy applies to the QR Attender: Attendance App (the "Application") for mobile devices, created by Raji's Lab (the "Service Provider"). This service is provided for use "AS IS".
      </p>

      <h2 className="text-center text-xl text-yellow-400 mt-10 mb-4">Information Collection and Use</h2>
      <p className="mb-6">
        The Application collects information when you download and use it, including:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Your device's Internet Protocol (IP) address</li>
        <li>The pages you visit, time spent, operating system, etc.</li>
      </ul>
      <p className="mb-6">The Application does not collect precise location data.</p>

      <h2 className="text-center text-xl text-yellow-400 mt-10 mb-4">Data Sharing</h2>
      <p className="mb-6">
        We may share anonymized, aggregated data with third-party service providers to improve our services. For example, we use{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
          Google Play Services
        </a>.
      </p>

      <h2 className="text-center text-xl text-yellow-400 mt-10 mb-4">Opt-Out Rights</h2>
      <p className="mb-6">
        You can stop all data collection by uninstalling the app.
      </p>

      <h2 className="text-center text-xl text-yellow-400 mt-10 mb-4">Security</h2>
      <p className="mb-6">
        We prioritize safeguarding your information and implement appropriate measures.
      </p>

      <h2 className="text-center text-xl text-yellow-400 mt-10 mb-4">Children’s Privacy</h2>
      <p className="mb-6">
        The Application is not intended for children under the age of 13. If we become aware that a child under 13 has provided us with personal data, we will delete it immediately.
      </p>

      <h2 className="text-center text-xl text-yellow-400 mt-10 mb-4">Changes to the Privacy Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Please review it periodically for any changes.
      </p>
      <p className="mb-6">This policy is effective as of October 15, 2024.</p>

      <h2 className="text-center text-xl text-yellow-400 mt-10 mb-4">Contact Us</h2>
      <p className="mb-6">
        If you have any questions, email us at{" "}
        <a href="mailto:support@rajislab.com" className="text-yellow-400 hover:underline">support@rajislab.com</a>.
      </p>
      <p className="mb-6">
        By using the Application, you agree to the{" "}
        <Link to={'/terms'} className="text-yellow-400 hover:underline">Terms of Service.</Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
