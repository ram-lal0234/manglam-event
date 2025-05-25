import { Metadata } from "next";
import HashtagGenerator from "@/components/hashtag/HashtagGenerator";

export const metadata: Metadata = {
  title: "Wedding Hashtag Generator | Manglam Event",
  description: "Generate creative and unique wedding hashtags using AI. Perfect for your special day!",
};

export default function HashtagGeneratorPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Wedding Hashtag Generator
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Create unique and memorable hashtags for your special day using our AI-powered generator.
            Perfect for sharing your wedding moments on social media!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Main Generator */}
          <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 shadow-xl">
            <HashtagGenerator />
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">1</span>
                  <p>Enter the bride and groom's names</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">2</span>
                  <p>Add optional details like wedding date, location, and theme</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">3</span>
                  <p>Click generate to create unique hashtags using AI</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">4</span>
                  <p>Click on any hashtag to copy it to your clipboard</p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Tips for Great Hashtags</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <p>Keep it short and memorable</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <p>Include both names creatively</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <p>Add the year or location for uniqueness</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <p>Use your wedding theme or style</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 