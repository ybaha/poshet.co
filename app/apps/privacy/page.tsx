import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Math Questions AI",
  description: "Privacy policy for Math Questions AI iOS application",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Privacy Policy for Math Questions AI
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Data Collection</h2>
          <p className="text-gray-600">
            We collect minimal data necessary for app functionality:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Math problem images processed temporarily (deleted after 24
                hours)
              </li>
              <li>Anonymous usage statistics for app improvements</li>
              <li>Account email for progress tracking (stored securely)</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Data Usage</h2>
          <p className="text-gray-600">
            Your data is used exclusively to:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide math problem solutions via OpenAI API</li>
              <li>Maintain your learning progress history</li>
              <li>Improve app performance and accuracy</li>
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
