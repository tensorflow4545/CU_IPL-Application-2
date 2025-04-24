import Hero from "../components/Hero";
import TeamStanding from "../components/TeamStanding";
import Stats from "../components/Stats";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/stadium.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black/40 space-y-10">
        <div className="bg-opacity-90">
          <Hero />
        </div>
        <div className="bg-opacity-90">
          <TeamStanding />
        </div>
        <div className="bg-opacity-90">
          <Stats />
        </div>
      </div>
    </div>
  );
}
