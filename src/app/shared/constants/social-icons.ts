export type SocialIconMap = {
  [key: string]: string;
};

export const SOCIAL_ICON_MAP: SocialIconMap = {
  'github': 'fab fa-github',
  'linkedin': 'fab fa-linkedin',
  'twitter': 'fab fa-twitter',
  'facebook': 'fab fa-facebook',
  'instagram': 'fab fa-instagram',
  'youtube': 'fab fa-youtube',
  'medium': 'fab fa-medium',
  'stack-overflow': 'fab fa-stack-overflow',
  'default': 'fas fa-share-alt' // Default icon if platform is not found
}; 