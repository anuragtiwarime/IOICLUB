import { X } from 'lucide-react';
import { useState } from 'react';

export const AnnouncementBanner = ({
  message,
  link,
  className,
  variant = 'default',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const variantStyles = {
    default: 'bg-primary text-primary-foreground',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  const content = link ? (
    <a href={link} className="underline underline-offset-4 hover:no-underline">
      {message}
    </a>
  ) : (
    message
  );

  return (
    <div
      className={`relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 ${
        variantStyles[variant]
      } ${className || ''}`}
    >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex w-full justify-center gap-x-4 gap-y-2">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 flex-none"
          aria-hidden="true"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-sm font-medium">{content}</div>
      </div>
      <button
        type="button"
        className="flex-none rounded-lg p-1 opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => setIsVisible(false)}
      >
        <span className="sr-only">Dismiss</span>
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};
