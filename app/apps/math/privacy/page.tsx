import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Math Answers AI",
  description: "Privacy policy for Math Answers AI application",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Privacy Policy for Math Answers AI
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Data Collection</h2>
          <p className="text-gray-600">
            We collect and process the following types of data:
          </p>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            Data Linked to You:
          </h3>
          <div className="pl-6">
            <h4 className="font-medium mb-2">Contact Information:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Name - Used for product personalization and app functionality
              </li>
              <li>Email address - Used for app functionality</li>
            </ul>

            <h4 className="font-medium mt-4 mb-2">Purchase Information:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Purchase history - Used for analytics and app functionality
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mt-4 mb-2">
            Data Not Linked to You:
          </h3>
          <div className="pl-6">
            <h4 className="font-medium mb-2">Diagnostic Data:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Crash data - Used for analytics</li>
              <li>Performance data - Used for analytics</li>
              <li>Other diagnostic data - Used for analytics</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Data Usage</h2>
          <p className="text-gray-600">
            Your data is used for the following purposes:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Product Personalization - To provide a customized experience
              </li>
              <li>App Functionality - To ensure core features work properly</li>
              <li>Analytics - To improve our services and performance</li>
              <li>Progress Tracking - To maintain your learning history</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Third-Party Services
          </h2>
          <p className="text-gray-600">
            We use OpenAI API for problem analysis. Images are processed through
            their systems but never stored permanently or used for training
            models.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-600">
            We implement industry-standard security measures including:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>SSL encryption for all data transfers</li>
              <li>Secure server infrastructure</li>
              <li>Regular security audits</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Children's Privacy</h2>
          <p className="text-gray-600">
            Our app complies with COPPA regulations. Users under 13 must have
            parental consent. We never knowingly collect personal information
            from children without verification.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            For privacy questions:{" "}
            <a
              href="mailto:contact@poshet.co"
              className="text-blue-600 hover:underline"
            >
              contact@poshet.co
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
