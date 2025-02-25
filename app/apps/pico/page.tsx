import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Apple } from 'lucide-react';
import { Play } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

const PicoPage = () => {
  return (
    <article className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Pico Cards</h1>
        <p className="text-xl text-gray-600">Spark Meaningful Conversations</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed">
            Pico Cards is a conversation-starting app designed to help people connect better with partners, friends, or family. 
            It offers hundreds of fun, meaningful, and lighthearted questions (like &quot;What&apos;s your biggest dream?&quot; or 
            &quot;What&apos;s your go-to karaoke song?&quot;) to spark deeper talks, strengthen relationships, and keep 
            interactions exciting. Free to try, with extra questions to unlock for those who want more!
          </p>
        </div>
        <div className="relative h-64 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          {/* Placeholder for app screenshot or illustration */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <Image
              src="/apps/pico/icon.png"
              alt="Pico Cards App Screenshot"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Diverse Questions</h3>
            <p className="text-gray-600">Hundreds of thoughtfully curated questions for every situation</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">Free to Try</h3>
            <p className="text-gray-600">Start connecting with the free version and unlock more when ready</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-2">For Everyone</h3>
            <p className="text-gray-600">Perfect for couples, friends, family, and team building</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Get Started</h2>
        <p className="text-gray-700">
          Ready to deepen your connections and have more meaningful conversations? 
          Download Pico Cards now and start exploring!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6">
          <Link 
            href="https://play.google.com/store/apps/details?id=co.poshet.pico" 
            target="_blank"
            className={buttonVariants({ variant: 'outline' })}
          >
              <Play />
              <span>Get it on Google Play</span>
          </Link>
          <Link 
            href="https://apps.apple.com/app/pico-cards/id123456789" 
            target="_blank"
            className={buttonVariants({ variant: 'outline' })}
          >
           <Apple />
           <span>Download on the App Store</span>
          </Link>
        </div>
        <div className="flex justify-center mt-6">
          <Link 
            href="/apps/pico/contact" 
            className="text-blue-600 hover:underline"
          >
            Need help?
          </Link>
        </div>
      </section>

      <section className="border-t pt-8 mt-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Questions?</h2>
            <p className="text-gray-700">
              We&apos;re here to help! Check out our{' '}
              <Link href="/apps/pico/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              {' '}or{' '}
              <Link href="/apps/pico/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
              {' '}for more information.
            </p>
          </div>
          <Link 
            href="/apps/pico/contact" 
            className="text-blue-600 hover:underline"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </article>
  );
};

export default PicoPage; 