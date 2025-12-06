import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="py-15 flex items-center justify-center bg-slate-50 dark:bg-black px-6">

      {/* Card container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-black shadow-xl rounded-2xl max-w-3xl w-full p-12 border border-slate-200 dark:border-slate-700">

        {/* Top Section with icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6">
          <div className="p-4 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12">
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Resource Not Found</h1>
            <p className="text-slate-600 dark:text-slate-300 mt-1">
              The page or resource you're trying to access doesn't exist.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-200 dark:border-slate-700"></div>

        {/* Three-column suggestion section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Tip Box */}
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-600">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Check URL</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Make sure the link you entered is correct and complete.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-600">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Return Back</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Use the back button to return to the previous location.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-700/40 border border-slate-200 dark:border-slate-600">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Visit Homepage</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Navigate back to the main dashboard or site root.
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition w-full md:w-auto">
            Go to Homepage
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition w-full md:w-auto">
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}