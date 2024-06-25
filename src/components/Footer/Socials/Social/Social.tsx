type SocialProps = {
  href: string;
  icon: string;
  alt: string;
};

const Social = ({ href, icon, alt }: SocialProps) => {
  return (
    <a href={href}>
      <img src={icon} alt={alt} />
    </a>
  );
};

export default Social;
