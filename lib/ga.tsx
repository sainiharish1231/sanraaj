// lib/ga.tsx
export const GA_TRACKING_ID = "G-72C7F3Y4G7";

// Log pageviews
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, category, label, value }: any) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
