export default function SocialIcons() {
  return (
    <div className="flex justify-center gap-8 text-3xl">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/jmiusic26?igsh=aHd4NjJvNHJhaDE5"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-125 transition duration-300"
      >
        <img 
          src="https://cdn.simpleicons.org/instagram/E4405F" 
          alt="Instagram" 
          className="w-8"
        />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/josue.david.gonzalez.370458"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-125 transition duration-300"
      >
        <img 
          src="https://cdn.simpleicons.org/facebook/1877F2" 
          alt="Facebook" 
          className="w-8"
        />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@j_music_26?_r=1&_t=ZS-952hVqzd3mH"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-125 transition duration-300 bg-white p-2 rounded-full"
      >
        <img 
          src="https://cdn.simpleicons.org/tiktok/000000" 
          alt="TikTok" 
          className="w-5"
        />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/573218275703"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-125 transition duration-300"
      >
        <img 
          src="https://cdn.simpleicons.org/whatsapp/25D366" 
          alt="WhatsApp" 
          className="w-8"
        />
      </a>

    </div>
  );
}