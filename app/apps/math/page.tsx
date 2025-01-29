import { Metadata } from "next";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Math Answers AI - AI-Powered Math Solver",
  description:
    "Snap, solve & learn with instant step-by-step math solutions. Your personal AI math tutor for all levels.",
};

export default function MathAppPage() {
  const screenshots = [
    {
      src: "/apps/math/Screenshot 01.png",
      alt: "Math Answers AI Screenshot 1",
    },
    {
      src: "/apps/math/Screenshot 02.png",
      alt: "Math Answers AI Screenshot 2",
    },
    {
      src: "/apps/math/Screenshot 03.png",
      alt: "Math Answers AI Screenshot 3",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Math Answers AI</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your Personal AI Math Tutor
        </p>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            📸 Snap, Solve & Learn – Instantly Get Step-by-Step Math Solutions!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Struggling with math homework? Math Answers AI is your ultimate
            AI-powered tutor, designed to make solving math problems effortless.
          </p>
        </div>
      </section>

      {/* App Store Preview - Mobile Carousel */}
      <div className="md:hidden mb-12 relative flex justify-center">
        <Carousel
          opts={{
            loop: true,
          }}
          className="w-[60%]"
        >
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center justify-center p-1">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="rounded-lg object-cover max-h-[300px] w-auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* App Store Preview - Desktop Grid */}
      <div className="hidden md:flex md:flex-wrap mb-12 md:justify-center">
        {screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={screenshot.src}
            alt={screenshot.alt}
            className="rounded-lg object-cover max-h-[400px] w-auto mx-auto"
          />
        ))}
      </div>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">🚀 Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              🔍 AI-Powered Math Solver
            </h3>
            <p className="text-gray-600">
              Simply take a photo of any math problem or upload an image from
              your gallery. Our advanced AI analyzes the question and delivers
              accurate solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">💬 Interactive Chat</h3>
            <p className="text-gray-600">
              Ask follow-up questions, get deeper insights into formulas, and
              improve problem-solving skills through AI-guided tutoring.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">📂 Math History</h3>
            <p className="text-gray-600">
              Review previous solutions anytime with sort/filter by date and
              expandable answer breakdowns.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              📱 Seamless Experience
            </h3>
            <p className="text-gray-600">
              Clean UI with Light/Dark Mode support for all math levels - from
              arithmetic to calculus.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="bg-blue-50 p-8 rounded-xl mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          ⭐ Premium Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Unlimited Questions</h3>
            <p className="text-sm text-gray-600">No limits on AI solutions</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Full Chat History</h3>
            <p className="text-sm text-gray-600">
              Access past solutions anytime
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Follow-Up Questions</h3>
            <p className="text-sm text-gray-600">Deeper explanations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Choose Math Answers AI?</h2>
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-gray-600">
            AI that teaches, not just solves • Saves time • Perfect for all
            learners • Accurate step-by-step answers
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="https://apps.apple.com/us/app/math-answers-ai/id6658821181"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Download Now
          </Link>
        </div>
      </section>
    </div>
  );
}
