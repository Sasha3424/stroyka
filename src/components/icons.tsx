export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.2 16.2 21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      {...props}
    >
      <path
        d="M7 7h14l-1.6 8.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.7L6 3H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
      <path
        d="M17.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SlidersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2 14h4m4-2h4m4 4h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BadgeBoxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      {...props}
    >
      <path
        d="M12 2 21 7v10l-9 5-9-5V7l9-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V12M21 7 12 12 3 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BadgeTruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      {...props}
    >
      <path
        d="M3 7h11v10H3V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 10h4l3 3v4h-7v-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BadgeShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      {...props}
    >
      <path
        d="M12 2 20 6v6c0 5-3.4 9.2-8 10-4.6-.8-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Белая стрелка на кнопке Proceed to checkout (как на макете). */
export function CheckoutArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
      {...props}
    >
      <path
        d="M4 10h11M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      {...props}
    >
      <path
        d="M3 6h18M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1v2m2 0v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6h10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarMiniIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path
        d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinMiniIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.2 1.8-2.1-.8.5-1.7.8-2.6 1A4 4 0 0 0 12 8.1c0 .3 0 .6.1.9A11.4 11.4 0 0 1 3 4.9c-.4.7-.5 1.4-.5 2.2 0 1.4.7 2.6 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.7 2.2 3 4.2 3A8.1 8.1 0 0 1 2 19.1 11.3 11.3 0 0 0 8.1 21c7.3 0 11.3-6 11.3-11.2v-.5c.8-.5 1.5-1.2 2-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
      <path
        d="M7 9H4v11h3V9ZM5.5 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20 14.2c0-3-1.6-5.2-4.5-5.2-1.9 0-2.8 1-3.2 1.8V9H9.4c0 .8 0 11 0 11h2.9v-6.1c0-.3 0-.7.1-.9.3-.7 1-1.4 2-1.4 1.4 0 2 1.1 2 2.7V20H20v-5.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

