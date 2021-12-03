export type SocialCardItem = {
  iconName: string;
  label: string;
  link: string;
};

export type SocialCardItemProps = SocialCardItem & {
  className?: string;
};
