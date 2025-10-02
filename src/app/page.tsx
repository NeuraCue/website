'use client';

import { useState, useMemo } from 'react';
import { hooks } from '@/data/hooks';
import { HookCategory } from '@/types/hook';
import CategoryFilter from '@/components/CategoryFilter';
import HookGrid from '@/components/HookGrid';
import { Search } from 'lucide-react';

const categories: (HookCategory | 'All')[] = [
  'All',
  HookCategory.MONITORING,
  HookCategory.SECURITY,
  HookCategory.WORKFLOW,
  HookCategory.TESTING,
  HookCategory.INTEGRATION,
  HookCategory.UTILITY,
  HookCategory.LEARNING,
  HookCategory.TEAM,
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<HookCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHooks = useMemo(() => {
    let filtered = hooks;

    if (activeCategory !== 'All') {
      filtered = filtered.filter((hook) => hook.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (hook) =>
          hook.name.toLowerCase().includes(query) ||
          hook.description.toLowerCase().includes(query) ||
          hook.author.toLowerCase().includes(query) ||
          hook.hookTypes.some((type) => type.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Claude Code Hooks
          </h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-blue-100 mb-8">
            Browse community-contributed hooks to enhance your Claude Code workflows.
            Find pre-built solutions for monitoring, automation, security, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search hooks by name, description, author, or hook type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Browse Hooks
            </h2>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {filteredHooks.length} {filteredHooks.length === 1 ? 'hook' : 'hooks'} found
            </span>
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <HookGrid hooks={filteredHooks} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2">AI-powered geofenced reminders for Android. App coming soon.</p>
          <p className="text-xs mb-2 text-gray-400 dark:text-gray-500">
            This site hosts required policy and compliance pages for the NeuraCue Android app on Google Play.
          </p>
          <p className="mb-4">
            <a href="/privacy" className="text-blue-400 dark:text-blue-400 hover:underline">
              Privacy Policy
            </a>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-600">
            © 2025 NeuraCue™. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
