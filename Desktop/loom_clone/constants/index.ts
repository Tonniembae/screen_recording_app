export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://storage.bunnycdn.com/clipnova-2",
  CDN_URL: "https://clipnova-2.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-5fd121a7-eed.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};


export const dummyCards = [
  {
    id: '1',
    title: 'Message from the CEO',
    thumbnail: '/assets/samples/thumbnail (1).png',
    createdAt: new Date('2025-06-13'),
    userImg: '/assets/images/jason.png',
    username: 'Jason',
    views: 120,
    visibility: 'public',
    duration: 230,
  },
  {
    id: '2',
    title: 'Behind the Scenes Tour',
    thumbnail: '/assets/samples/thumbnail (2).png',
    createdAt: new Date('2025-06-12'),
    userImg: '/assets/images/sarah.png',
    username: 'Sarah',
    views: 1840,
    visibility: 'unlisted',
    duration: 315,
  },
  {
    id: '3',
    title: 'Our New Product Reveal',
    thumbnail: '/assets/samples/thumbnail (3).png',
    createdAt: new Date('2025-06-10'),
    userImg: '/assets/images/mark.png',
    username: 'Mark',
    views: 23000,
    visibility: 'public',
    duration: 150,
  },
  {
    id: '4',
    title: 'Weekly Team Recap',
    thumbnail: '/assets/samples/thumbnail (4).png',
    createdAt: new Date('2025-06-11'),
    userImg: '/assets/images/lisa.png',
    username: 'Lisa',
    views: 860,
    visibility: 'private',
    duration: 90,
  },
  {
    id: '5',
    title: 'Marketing Strategy Q&A',
    thumbnail: '/assets/samples/thumbnail (5).png',
    createdAt: new Date('2025-06-08'),
    userImg: '/assets/images/tony.png',
    username: 'Tony',
    views: 14200,
    visibility: 'public',
    duration: 450,
  },
  {
    id: '6',
    title: 'Customer Success Story',
    thumbnail: '/assets/samples/thumbnail (6).png',
    createdAt: new Date('2025-06-09'),
    userImg: '/assets/images/penelope.png',
    username: 'Penelope',
    views: 3200,
    visibility: 'public',
    duration: 210,
  },
  {
    id: '7',
    title: 'Design Review Session',
    thumbnail: '/assets/samples/thumbnail (7).png',
    createdAt: new Date('2025-06-13'),
    userImg: '/assets/images/eric.png',
    username: 'Eric',
    views: 670,
    visibility: 'unlisted',
    duration: 300,
  },
  {
    id: '8',
    title: 'End of Month Highlights',
    thumbnail: '/assets/samples/thumbnail (8).png',
    createdAt: new Date('2025-06-07'),
    userImg: '/assets/images/angela.png',
    username: 'Angela',
    views: 9980,
    visibility: 'public',
    duration: 480,
  },
];
