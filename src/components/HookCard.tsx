import { Hook, HookCategory } from '@/types/hook';
import { ExternalLink, Github, Star } from 'lucide-react';

interface HookCardProps {
  hook: Hook;
}

const categoryColors: Record<HookCategory, string> = {
  [HookCategory.MONITORING]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  [HookCategory.SECURITY]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  [HookCategory.WORKFLOW]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  [HookCategory.TESTING]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  [HookCategory.INTEGRATION]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  [HookCategory.UTILITY]: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  [HookCategory.LEARNING]: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  [HookCategory.TEAM]: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
};

export default function HookCard({ hook }: HookCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 flex flex-col h-full">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex-1">
            {hook.name}
          </h3>
          {hook.featured && (
            <span className="text-yellow-500 ml-2" title="Featured">⭐</span>
          )}
        </div>

        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[hook.category]}`}>
          {hook.category}
        </span>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
          {hook.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {hook.hookTypes.map((type) => (
            <span
              key={type}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Github size={14} />
            <span>{hook.author}</span>
          </div>
          {hook.stars !== undefined && (
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <Star size={14} />
              <span>{hook.stars}</span>
            </div>
          )}
          <span className="text-xs text-gray-500 dark:text-gray-500">
            {hook.language}
          </span>
        </div>

        <a
          href={hook.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm"
        >
          View
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
