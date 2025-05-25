import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HashtagFormData>();

  const onSubmit = async (data: HashtagFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/hashtag-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to generate hashtags');
      }

      const result = await response.json();
      setHashtags(result.hashtags);
    } catch (err) {
      setError('Failed to generate hashtags. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Wedding Hashtag Generator</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Bride's Name *</label>
            <input
              {...register('brideName', { required: 'Bride name is required' })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              {...register('location')}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter wedding location"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Theme/Vibe</label>
            <input
              {...register('theme')}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter wedding theme or vibe (e.g., rustic, modern, beach)"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
        >
          {isLoading ? 'Generating...' : 'Generate Hashtags'}
        </button>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {hashtags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <h3 className="text-xl font-semibold mb-4">Your Wedding Hashtags</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hashtags.map((hashtag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(hashtag);
                }}
              >
                <p className="text-lg font-medium text-blue-600">{hashtag}</p>
                <p className="text-sm text-gray-500 mt-1">Click to copy</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
} 