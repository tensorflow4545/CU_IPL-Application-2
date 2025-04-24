"use client";
import Button from "./Button";
export default function Hero() {
  return (
    <div className="relative overflow-hidden py-20 md:py-15 bg-gradient-to-b to from-orange-200 to-blue-200">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            IPL 2025 <span className="text-orange-500">Score Tracker</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">Lorem Epsom</p>
          {/* button */}
          <div classNmae="flex flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="mb-4">
              Live Score
            </Button>
            <Button variant="outline" size="lg">
              Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
