"use client";

import React from 'react';
import { useState } from "react";
import { sendTelegramMessage } from "@/lib/sendTelegramMessage";
import { useRouter } from "next/navigation";

const ContactPage = () => {
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
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">We&apos;re here to help and answer any questions you might have</p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700">
              Have a question about Pico Cards? Need help with the app? 
              We&apos;re always happy to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Response Time</h3>
              <p className="text-gray-700">We typically respond within 24-48 hours</p>
            </div>

            <div>
              <h3 className="font-bold">Office Hours</h3>
              <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM (GMT+3)</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ${
                isSubmitting ? "cursor-not-allowed" : ""
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
        </section>
      </div>

      <section className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">

          <div>
            <h3 className="font-bold">Is my data secure?</h3>
            <p className="text-gray-700">
              Yes, we don’t collect, store, or share any personal data (not even your name or email). The only information processed is payment data for subscriptions, which is handled securely by Apple/Google and our payment provider.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Can I use Pico Cards offline?</h3>
            <p className="text-gray-700">
              Yes, you can use all of the features of Pico Cards offline. You can restore your purchases on any device on Manage Subscription page.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Do I need an account to use the app?</h3>
            <p className="text-gray-700">
              Nope! Just download the app and start using it. The only time you’ll need to sign in is if you purchase a premium subscription (via Apple/Google accounts).
            </p>
          </div>
          <div>
            <h3 className="font-bold">How do I cancel my subscription?</h3>
            <p className="text-gray-700">
              Subscriptions are managed through your Apple or Google account settings, not the app. You can cancel anytime by following their standard process.
            </p>
          </div>
          <div>
            <h3 className="font-bold">CanI delete my data?</h3>
            <p className="text-gray-700">
              Since we don’t store personal data, there’s nothing to delete! For payment history, contact Apple/Google support. To remove the app, just uninstall it from your device.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
