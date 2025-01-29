"use client";

import { useState } from "react";
import { sendTelegramMessage } from "@/lib/sendTelegramMessage";
import { useRouter } from "next/navigation";

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const telegramMessage = `New Support Request\n\nFrom: ${name}\nEmail: ${email}\nMessage: ${message}`;
      await sendTelegramMessage(telegramMessage);

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        router.push("/apps/math");
      }, 2000);
    } catch (error) {
      console.error("Error sending support message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-4 py-8 my-24">
      <h1 className="text-3xl font-bold mb-6">Contact Support</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div className="text-green-600 text-center">
              Your message has been sent successfully! We'll get back to you
              soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="text-red-600 text-center">
              There was an error sending your message. Please try again later.
            </div>
          )}
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Other Ways to Reach Us</h2>
          <p className="text-gray-600">
            You can also reach us at:{" "}
            <a
              href="mailto:contact@poshet.co"
              className="text-blue-600 hover:underline"
            >
              contact@poshet.co
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
