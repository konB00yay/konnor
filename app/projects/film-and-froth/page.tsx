import ProjectCaseStudy from "../../components/ProjectCaseStudy";

const STACK = ["GatsbyJS", "Contentful CMS", "Express (Node.js)", "Supabase"];
const PROBLEM =
  `During the COVID-19 pandemic, I found myself watching more movies than ever while supporting local Seattle breweries with their craft beers. A group of cinephile friends and I would text about the films we watched, jokingly pairing them with whatever beer we were drinking. We realized there was something genuinely interesting about how certain beers complemented certain films—but no platform existed to explore or share these pairings. Film & Froth was born from this gap: a way to thoughtfully pair craft beer with cinema while celebrating local breweries and the art of filmmaking.`;
const APPROACH =
  `I built Film & Froth with JavaScript and GatsbyJS, choosing Gatsby for its static site generation, built-in markdown support, and rapid development setup. This allowed me to quickly scaffold the project and deploy via Netlify with minimal configuration.

Initially, I stored articles as markdown files directly in the repository for simplicity. As content grew, I migrated to Contentful CMS to enable easier content management and collaboration with contributors. To monetize, I integrated a Shopify storefront for merchandise sales, along with Mailchimp for email marketing and audience engagement.

The project's biggest technical challenge came when I wanted to increase user interaction and organic growth. I built an interactive Oscars prediction contest where users submit their ballots, which are stored in a Supabase database. The contest features a live leaderboard powered by Supabase's real-time streaming capabilities and a Node.js server to handle API orchestration. This feature transformed the site from a static blog into an engaging community experience.`;
const IMPACT =
  `Film & Froth has grown from a pandemic hobby into a recognized voice in film and craft beer culture. The site has earned accredited press credentials at major film festivals including SIFF, TIFF, VIFF, and Sundance, and led to my membership in the Seattle Film Critics Society.

Beyond digital reach—over 1 million Google impressions and 6,000 clicks annually, with 32% year-over-year user growth—the platform has fostered real-world community. Our annual live Oscars Watch Party with Urban Family Brewing has become a Seattle tradition, filling their taproom every year and strengthening connections between film fans and local breweries.

Looking ahead, we're expanding into beer journalism with quarterly brewery interview podcasts and more in-person events, continuing to build the intersection of cinema and craft beer culture.`;

export default function FilmAndFrothPage() {
  return (
    <ProjectCaseStudy
      name="Film & Froth"
      tagline="A film review blog where we review movies and pair them with beer."
      liveUrl="https://www.filmfroth.com"
      stack={STACK}
      problemText={PROBLEM}
      approachText={APPROACH}
      impactText={IMPACT}
    />
  );
}
