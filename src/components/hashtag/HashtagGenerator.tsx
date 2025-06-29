"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHashtag, FaCheck, FaCopy, FaStar, FaHeart, FaMagic } from 'react-icons/fa';
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
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-block mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-2xl">
            <FaStar className="text-3xl text-white" />
          </div>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent tracking-tight">
          Wedding Hashtag Generator
        </h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Create the perfect hashtags for your special day. Let our AI craft unique, memorable hashtags that capture your love story.
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-accent/10 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-sm font-bold text-foreground mb-3">Bride's Name *</label>
              <input
                {...register('brideName', { required: 'Bride name is required' })}
                className="w-full p-4 border-2 rounded-xl focus:ring-4 focus:ring-primary/10 bg-background/50 backdrop-blur-sm border-accent/20 focus:border-primary/50 transition-all duration-300 text-lg font-medium"
                placeholder="Enter bride's name"
              />
              {errors.brideName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center font-medium"
                >
                  <FaHeart className="w-4 h-4 mr-1" />
                  {errors.brideName.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-bold text-foreground mb-3">Groom's Name *</label>
              <input
                {...register('groomName', { required: 'Groom name is required' })}
                className="w-full p-4 border-2 rounded-xl focus:ring-4 focus:ring-primary/10 bg-background/50 backdrop-blur-sm border-accent/20 focus:border-primary/50 transition-all duration-300 text-lg font-medium"
                placeholder="Enter groom's name"
              />
              {errors.groomName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 flex items-center font-medium"
                >
                  <FaHeart className="w-4 h-4 mr-1" />
                  {errors.groomName.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label className="block text-sm font-bold text-foreground mb-3">Wedding Date</label>
              <input
                type="date"
                {...register('weddingDate')}
                className="w-full p-4 border-2 rounded-xl focus:ring-4 focus:ring-primary/10 bg-background/50 backdrop-blur-sm border-accent/20 focus:border-primary/50 transition-all duration-300 text-lg font-medium"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label className="block text-sm font-bold text-foreground mb-3">Location</label>
              <input
                {...register('location')}
                className="w-full p-4 border-2 rounded-xl focus:ring-4 focus:ring-primary/10 bg-background/50 backdrop-blur-sm border-accent/20 focus:border-primary/50 transition-all duration-300 text-lg font-medium"
                placeholder="Enter wedding location"
              />
            </motion.div>

            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label className="block text-sm font-bold text-foreground mb-3">Theme/Vibe</label>
              <input
                {...register('theme')}
                className="w-full p-4 border-2 rounded-xl focus:ring-4 focus:ring-primary/10 bg-background/50 backdrop-blur-sm border-accent/20 focus:border-primary/50 transition-all duration-300 text-lg font-medium"
                placeholder="Enter wedding theme or vibe (e.g., rustic, modern, beach, traditional)"
              />
            </motion.div>
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-4 px-8 rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/20 text-lg font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Generating Magic...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center space-x-3">
                <FaMagic className="w-5 h-5" />
                <span>Generate Hashtags</span>
              </span>
            )}
          </motion.button>
        </form>
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-6 bg-red-500/10 border-2 border-red-500/20 rounded-2xl text-red-500 backdrop-blur-sm"
          >
            <p className="flex items-center space-x-3 text-lg">
              <FaHeart className="w-5 h-5" />
              <span>{error}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {hashtags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-accent/10"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary flex items-center space-x-3">
                <FaStar className="w-6 h-6" />
                <span>Your Wedding Hashtags</span>
              </h3>
              <div className="flex items-center space-x-4">
                <p className="text-sm text-foreground/60 bg-accent/20 px-3 py-1 rounded-full font-medium">
                  {hashtags.length} hashtags generated
                </p>
                <motion.button
                  onClick={() => {
                    const allHashtags = hashtags.join(" ");
                    navigator.clipboard.writeText(allHashtags);
                    toast.success('All hashtags copied to clipboard!', {
                      duration: 2000,
                      position: 'bottom-center',
                      style: {
                        background: 'var(--background)',
                        color: 'var(--foreground)',
                        border: '1px solid var(--accent)',
                      },
                    });
                  }}
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors bg-primary/10 hover:bg-primary/20 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCopy className="w-4 h-4" />
                  <span>Copy All</span>
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hashtags.map((hashtag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-2xl p-4 border-2 border-accent/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {hashtag}
                      </span>
                      <motion.button
                        onClick={() => copyToClipboard(hashtag, index)}
                        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {copiedIndex === index ? (
                          <FaCheck className="w-4 h-4 text-green-500" />
                        ) : (
                          <FaCopy className="w-4 h-4 text-primary" />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 