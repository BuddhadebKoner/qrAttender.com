import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="container pt-[100px] mx-auto px-6 py-8 max-w-3xl rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-semibold mb-6 text-[#bb86fc]">Terms of Service</h1>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">1. Agreement to Terms</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">By downloading or using QR Attender, you agree to these Terms provided by Raji's Lab ("Service Provider"). If you do not agree, you may not use the Application.</p>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">2. Use of the Application</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">The Application is designed for attendance management via QR codes. It is to be used in compliance with the law and for legitimate purposes only.</p>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">3. User Responsibilities</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">You are responsible for maintaining the security of your account information and for any actions taken under your account. Notify us immediately of any unauthorized access.</p>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">4. Modifications and Updates</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">We may update or change the Application’s features from time to time. Continued use constitutes acceptance of these updates.</p>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">5. Termination</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">We reserve the right to suspend or terminate your access at our discretion for violations of these Terms.</p>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">6. Limitation of Liability</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">The Application is provided "AS IS". We disclaim all warranties and will not be liable for any damages arising from its use.</p>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">7. Governing Law</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">These Terms are governed by the laws of India, and you consent to the jurisdiction of the courts located in India for any legal matter arising out of these Terms.</p>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">Changes to the Terms</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">We may update these Terms periodically. By continuing to use the Application, you accept the changes.</p>

      <h2 className="mt-8 text-xl font-semibold text-[#03dac5]">Contact Us</h2>
      <p className="mt-2 text-lg leading-relaxed text-white">
        If you have any questions, email us at{' '}
        <a href="mailto:support@rajislab.com" className="text-[#bb86fc] hover:text-[#03dac5]">
          support@rajislab.com
        </a>.
      </p>
      <p className="mt-2 text-lg leading-relaxed text-white">
        For information on how we collect and use your data, please see our{' '}
        <Link to={'/privacy'} className="text-[#bb86fc] hover:text-[#03dac5]">
          Privacy Policy
        </Link>.
      </p>
    </div>
  );
};

export default TermsOfService;
