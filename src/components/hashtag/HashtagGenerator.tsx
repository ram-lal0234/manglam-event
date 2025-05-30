"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHashtag, FaCheck, FaCopy } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

interface HashtagFormData {
  brideName: string;
  groomName: string;
  weddingDate?: string;
  location?: string;
  theme?: string;
}

export default function HashtagGenerator() {
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HashtagFormData>();

  const onSubmit = async (data: HashtagFormData) => {
    setIsLoading(true);
    setError(null);
    setHashtags([]);
    setCopiedIndex(null);

    try {
      const response = await fetch('/api/hashtag-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate hashtags');
      }

      if (!result.hashtags || !Array.isArray(result.hashtags)) {
        throw new Error('Invalid response format');
      }

      setHashtags(result.hashtags);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate hashtags. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast.success('Hashtag copied to clipboard!', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: 'var(--background)',
          color: 'var(--foreground)',
          border: '1px solid var(--accent)',
        },
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error('Failed to copy hashtag', {
        duration: 2000,
        position: 'bottom-center',
      });
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Bride's Name *</label>
            <input
              {...register('brideName', { required: 'Bride name is required' })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm"
              placeholder="Enter bride's name"
            />
            {errors.brideName && (
              <p className="text-red-500 text-sm mt-1">{errors.brideName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Groom's Name *</label>
            <input
              {...register('groomName', { required: 'Groom name is required' })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm"
              placeholder="Enter groom's name"
            />
            {errors.groomName && (
              <p className="text-red-500 text-sm mt-1">{errors.groomName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Wedding Date</label>
            <input
              type="date"
              {...register('weddingDate')}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              {...register('location')}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm"
              placeholder="Enter wedding location"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Theme/Vibe</label>
            <input
              {...register('theme')}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm"
              placeholder="Enter wedding theme or vibe (e.g., rustic, modern, beach)"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          {isLoading ? (
            <span className="flex items-center justify-center space-x-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Generating...</span>
            </span>
          ) : (
            'Generate Hashtags'
          )}
        </button>
      </form>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200"
        >
          <p className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </p>
        </motion.div>
      )}

      {hashtags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Your Wedding Hashtags</h3>
            <p className="text-sm text-foreground/60">{hashtags.length} hashtags generated</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {hashtags.map((hashtag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-4 bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl border border-accent/10 rounded-lg hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 min-w-0">
                    <FaHashtag className="flex-shrink-0 w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                    <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {hashtag}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(hashtag, index)}
                    className="flex-shrink-0 p-2 rounded-lg hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20"
                    aria-label="Copy hashtag"
                  >
                    <AnimatePresence mode="wait">
                      {copiedIndex === index ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="text-green-500"
                        >
                          <FaCheck className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="text-foreground/60 group-hover:text-foreground"
                        >
                          <FaCopy className="w-5 h-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
} 