export const EarthSection = () => {
  return (
    <section className="relative w-full bg-black flex justify-center py-20">
      <div className="w-[800px] h-[450px] rounded-2xl overflow-hidden shadow-2xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/galaxy.webm" type="video/webm" />
          <source src="/videos/galaxy.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
