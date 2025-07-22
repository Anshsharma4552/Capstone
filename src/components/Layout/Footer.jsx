import { Film, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Film className="h-6 w-6 text-primary-500" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              CineFind
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for movie lovers
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
            © 2024 CineFind. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;