import ProjectCaseStudy from "../../components/ProjectCaseStudy";

const STACK = ["React", "Express (Node.js)", "Pinecone", "OpenAI", "Cohere"];
const PROBLEM =
  `Fantasy football thrives on banter, trash talk, and weekly storytelling—but there's no reliable way to get entertaining recaps of your league's drama. My friends and I tried writing our own weekly reports to capture the chaos and highlight plays, but life gets busy and consistency fell apart. Existing solutions like ESPN's recap feature are unreliable, generic, and lack the personality that makes fantasy football fun. I saw an opportunity to build a product that automates engaging,`;
const APPROACH =
  `I built Pressbox with a lightweight React frontend served by an Express backend, prioritizing speed and simplicity since the UX focuses on content delivery rather than complex interactions. For data and authentication, I chose Supabase after initially exploring Appwrite—Supabase's customizable email verification provided a smoother user onboarding experience that aligned with my vision.

The core technical challenge was generating high-quality, personalized recaps at scale. I built an automated pipeline that pulls weekly fantasy stats from ESPN's API via cron jobs, then processes them through a RAG (Retrieval-Augmented Generation) system using Cohere embeddings and OpenAI's language models. This ensures each recap captures league-specific storylines with engaging, natural writing that feels custom-made rather than templated.

Users sign up, connect their ESPN league, and receive weekly recaps delivered via Nodemailer. The architecture is designed to be quick, lightweight, and scalable as the user base grows.`;
const IMPACT =
  `Pressbox is currently in beta with free access as I refine the content pipeline and writing quality. I ran it with a personal league for an entire season as proof of concept—the recaps were a hit, energizing group chats and giving both fantasy veterans and rookies something fun to rally around each week. The feedback confirmed the core value: automated recaps can genuinely enhance the social experience of fantasy football.

Before launching publicly and introducing pricing, I'm focused on ensuring the product delivers high-quality sports journalism, not just novelty. Near-term improvements include expanding beyond ESPN to support Sleeper and Yahoo leagues, and incorporating real-time player news—injuries, roster moves, personal storylines—to enrich the narrative depth of each recap.

Long-term, the vision extends beyond fantasy football. I plan to add support for other fantasy sports (baseball, basketball) and introduce tiered pricing with premium features like AI-powered team management suggestions, trade proposals, and waiver wire recommendations. The goal is to build the definitive fantasy sports storytelling platform.`;

export default function PressboxPage() {
  return (
    <ProjectCaseStudy
      name="Pressbox"
      tagline="AI generated commentary for fantasy sports leagues using a RAG pipeline."
      liveUrl="https://www.pressbox.ai"
      stack={STACK}
      problemText={PROBLEM}
      approachText={APPROACH}
      impactText={IMPACT}
    />
  );
}
