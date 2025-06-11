import { Metadata } from "next";
import HashtagGenerator from "@/components/hashtag/HashtagGenerator";
import { Sparkles, Wand2, Brain, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Wedding Hashtag Generator | Manglam Event",
  description: "Generate creative and unique wedding hashtags using AI. Perfect for your special day!",
};

export default function HashtagGeneratorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-background/95 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Wedding Hashtag Generator
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Create unique and memorable hashtags for your special day using our AI-powered generator.
            Perfect for sharing your wedding moments on social media!
          </p>
        </div>

        {/* AI Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Smart Generation</h3>
            </div>
            <p className="text-foreground/70">Our AI analyzes names, themes, and locations to create perfectly tailored hashtags for your wedding.</p>
          </div>
          <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wand2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Creative Magic</h3>
            </div>
            <p className="text-foreground/70">Get unique combinations that blend names, dates, and themes into memorable hashtags.</p>
          </div>
          <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Instant Results</h3>
            </div>
            <p className="text-foreground/70">Generate multiple hashtag options instantly with our lightning-fast AI technology.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Generator */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 sm:p-8 shadow-xl">
              <HashtagGenerator />
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-primary">How It Works</h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-lg">1</span>
                  <div>
                    <p className="text-foreground/90 font-medium">Enter the bride and groom's names</p>
                    <p className="text-sm text-foreground/60 mt-1">Start with the most important details</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-lg">2</span>
                  <div>
                    <p className="text-foreground/90 font-medium">Add optional details</p>
                    <p className="text-sm text-foreground/60 mt-1">Include wedding date, location, and theme for more personalized hashtags</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-lg">3</span>
                  <div>
                    <p className="text-foreground/90 font-medium">Generate unique hashtags</p>
                    <p className="text-sm text-foreground/60 mt-1">Our AI will create creative and memorable hashtags</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-lg">4</span>
                  <div>
                    <p className="text-foreground/90 font-medium">Copy and share</p>
                    <p className="text-sm text-foreground/60 mt-1">Easily copy hashtags to share with your guests</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-6 text-primary">Tips for Great Hashtags</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">•</span>
                  <div>
                    <p className="text-foreground/90 font-medium">Keep it short and memorable</p>
                    <p className="text-sm text-foreground/60 mt-1">Shorter hashtags are easier to remember and type</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">•</span>
                  <div>
                    <p className="text-foreground/90 font-medium">Include both names creatively</p>
                    <p className="text-sm text-foreground/60 mt-1">Combine names in a unique and catchy way</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">•</span>
                  <div>
                    <p className="text-foreground/90 font-medium">Add the year or location</p>
                    <p className="text-sm text-foreground/60 mt-1">Make your hashtag unique to your special day</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-lg">•</span>
                  <div>
                    <p className="text-foreground/90 font-medium">Use your wedding theme</p>
                    <p className="text-sm text-foreground/60 mt-1">Incorporate your wedding style or theme</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 