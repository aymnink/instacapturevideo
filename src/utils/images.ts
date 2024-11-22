// Collection of travel destination images
export const destinationImages = [
  'https://images.unsplash.com/photo-1669408276432-10cd3a07fe89',
  'https://images.unsplash.com/photo-1542086490-11a8654691d0',
  'https://images.unsplash.com/photo-1675154092378-1ca4978ec6a5',
  'https://images.unsplash.com/photo-1532295454114-d7bc89024613',
  'https://images.unsplash.com/photo-1572573309811-48474d1891b7',
  'https://images.unsplash.com/photo-1531986362435-16b427eb9c26',
  'https://images.unsplash.com/photo-1595039838779-f3780873afdd',
  'https://images.unsplash.com/photo-1523474438810-b04a2480633c',
  'https://images.unsplash.com/photo-1611001897293-561e0c30f938',
  'https://images.unsplash.com/photo-1611262588024-d12430b98920'
];

export function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * destinationImages.length);
  return destinationImages[randomIndex];
}

export function getImageWithParams(url: string, width = 800, quality = 80): string {
  return `${url}?w=${width}&q=${quality}&auto=format&fit=crop`;
}