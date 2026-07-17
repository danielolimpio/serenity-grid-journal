import { Play } from "lucide-react";
import bg from "@/assets/dark-leaves-bg.jpg";

const VideoPresenceSection = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container max-w-4xl px-6 text-center text-white space-y-6">
        <button
          aria-label="Reproduzir vídeo"
          className="mx-auto w-20 h-20 rounded-full bg-white/95 text-primary hover:scale-105 transition-transform flex items-center justify-center shadow-medium"
        >
          <Play className="h-7 w-7 ml-1 fill-primary" />
        </button>
        <h2 className="font-display font-bold text-3xl md:text-5xl">
          Descubra o Poder da Presença
        </h2>
        <p className="text-white/80 max-w-xl mx-auto">
          Assista à nossa introdução ao yoga consciente e comece hoje mesmo sua jornada de bem-estar.
        </p>
        <button className="px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default VideoPresenceSection;