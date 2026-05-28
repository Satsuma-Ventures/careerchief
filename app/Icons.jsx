/* global React */

// Lucide-style line icons, 1.5 stroke. Hand-trimmed from lucide.dev for inline use.
const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function I(props) {
  // accept custom size
  const { size, children, ...rest } = props;
  return (
    <svg {...iconProps} width={size || 16} height={size || 16} {...rest}>
      {children}
    </svg>
  );
}

const Icons = {
  Brief: (p) => <I {...p}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M9 7h6" /><path d="M9 11h4" /></I>,
  Target: (p) => <I {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></I>,
  Mic: (p) => <I {...p}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></I>,
  Sparkle: (p) => <I {...p}><path d="M12 3v3" /><path d="M12 18v3" /><path d="m4.93 4.93 2.12 2.12" /><path d="m16.95 16.95 2.12 2.12" /><path d="M3 12h3" /><path d="M18 12h3" /><path d="m4.93 19.07 2.12-2.12" /><path d="m16.95 7.05 2.12-2.12" /></I>,
  Link: (p) => <I {...p}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.71" /></I>,
  Settings: (p) => <I {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></I>,
  Arrow: (p) => <I {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></I>,
  Chevron: (p) => <I {...p}><path d="m9 18 6-6-6-6" /></I>,
  Plus: (p) => <I {...p}><path d="M12 5v14" /><path d="M5 12h14" /></I>,
  Send: (p) => <I {...p}><path d="m22 2-7 20-4-9-9-4 20-7Z" /></I>,
  Dot: (p) => <I {...p}><circle cx="12" cy="12" r="3" /></I>,
  Briefcase: (p) => <I {...p}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></I>,
  Flag: (p) => <I {...p}><path d="M4 21V4a1 1 0 0 1 1-1h13l-3 5 3 5H5" /></I>,
  Check: (p) => <I {...p}><path d="M20 6 9 17l-5-5" /></I>,
  Search: (p) => <I {...p}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></I>,
};

window.Icons = Icons;
