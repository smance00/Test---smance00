export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateLabel: string;
  minutes: number;
  letter: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "source-senior-engineers-without-a-recruiting-team",
    title: "How to source senior engineers without a full recruiting team",
    excerpt:
      "A practical playbook for founders running their own top-of-funnel — without burning weeks on it.",
    category: "Sourcing",
    date: "2026-07-01",
    dateLabel: "July 1, 2026",
    minutes: 6,
    letter: "S",
    paragraphs: [
      "The hardest part of hiring senior engineers isn't the interview — it's getting enough of the right people into the top of the funnel in the first place. Most early teams try to solve this with a job post and a prayer, then wonder why three weeks later the pipeline is empty.",
      "Start with a sharp definition of the role. Before you source a single candidate, write down the three things this person must have done before, and the two things that would be nice but not required. Everything downstream gets easier when the bar is explicit.",
      "Then go where the signal is. The best senior engineers are rarely applying; they're shipping. Look at who is contributing to the libraries you depend on, who is writing thoughtfully about the problems you're solving, and who worked at the companies whose engineering you admire.",
      "Finally, treat outreach like product. A generic 'we're hiring' note gets ignored. A specific note that references their actual work gets replies. This is exactly the loop Olevy runs for embedded partners.",
    ],
  },
  {
    slug: "metrics-that-predict-a-healthy-hiring-funnel",
    title: "The metrics that actually predict a healthy hiring funnel",
    excerpt:
      "Pass-through, time-in-stage, and the bottlenecks worth watching — and the vanity metrics to ignore.",
    category: "Operations",
    date: "2026-06-19",
    dateLabel: "June 19, 2026",
    minutes: 5,
    letter: "O",
    paragraphs: [
      "You can't fix a funnel you can't see. Yet most teams track exactly one number — offers accepted — and are blind to everything upstream that determines whether that number is even possible.",
      "Pass-through rate is the single most useful metric. What percentage of candidates who reach an interview go on to an offer? A low number means your top-of-funnel is loose or your screen is miscalibrated.",
      "Time-in-stage is where deals quietly die. Great candidates have options, and every extra day in 'awaiting review' is a day a competitor can move faster.",
      "The rest is mostly noise. Applicant counts feel good and predict nothing. Focus on conversion between stages and the time each stage takes — that's what Olevy's hiring operations layer surfaces automatically.",
    ],
  },
  {
    slug: "structured-feedback-beats-gut-feel",
    title: "Structured feedback beats gut feel — here's the scorecard",
    excerpt:
      "Turn interviews into consistent, comparable hiring signals your whole panel can trust.",
    category: "Decisions",
    date: "2026-06-07",
    dateLabel: "June 7, 2026",
    minutes: 4,
    letter: "D",
    paragraphs: [
      "Gut feel is a great generator of hypotheses and a terrible way to make final decisions. Two interviewers can meet the same candidate and walk away with opposite conclusions.",
      "A scorecard fixes this by agreeing, in advance, on what 'great' looks like for this role. Define the four or five competencies that matter and have every interviewer rate against the same rubric.",
      "The magic isn't the score — it's the structure. When feedback is comparable across the panel, patterns jump out.",
      "Olevy's hiring intelligence turns this structured feedback into decision signal — so the panel debates the substance, not who remembers the interview more fondly.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string) {
  return posts.filter((post) => post.slug !== slug);
}
