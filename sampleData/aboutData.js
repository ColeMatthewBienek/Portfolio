import React from "react";
import photos from "../client/src/assets/photos/photoUrls.js";

const data = [
  {
    keyPoint: "Diverse Experience and Background",
    keyPointText: `I bring a unique blend of life experience and technical skill to my work.
    `,
    buttonText: "Learn More",
    image: photos.selfie,
    expandedText: [
      "I hold a B.S. in Psychology and an Associates in Behavioral Science -- both of which I used to fuel my time as a Substance use Counselor. My clients tended to be the most marginalized and at-risk in our society: people who are system impacted and/or formerly incarcerated, people experiencing homelessness, and people left behind and literally out in the cold by the mental health and criminal justice systems.",
      "One amazing thing I took from my career as a counselor is how utterly true it is that books should not be judged by their covers. It is not possible to know what a person has been through merely by looking at them.",
      "How does this help me in my new career as a software engineer?",
      "I have exceptional collaboration skills that largely stem from my belief that diversity is at the heart of innovation and collective success. I have a fluid and adaptable problem solving process that is a mesh of interpersonal conflict resolution skills and technical problem-solving strategies. Life as a counselor taught me to utilize the support of my colleagues, and to be a source of realiable support.",
    ],
  },
  {
    keyPoint: "Challenges are Opportunities ",
    keyPointText:
      "My natural creativity and resilience helped me rise above tremendous adversity.",
    buttonText: "Learn More",
    image: photos.challenge,
    expandedText: [
      "I bear scars of trauma compounded by years of addiction and loss of self. Rather than succumb I sought help and, with the support of some amazing people, found my way out of a dark place. I pursued a psychology degree and sought state licensure as a substance use counselor. ",
      "I chose to leave counseling and tackle software engineering because I believe in my ability to succeed -- especially when the challenge is steep.",
    ],
  },
  {
    keyPoint: "Opportunities for All",
    keyPointText: "",
    buttonText: "Learn More",
    image: photos.diversity,
    expandedText: [
      "I have a passion for working with at-risk youth, people impacted by mass incarceration, and underrepresented populations. I am currently in the process of networking with people and organizations that are positioned to deliver services at the grass roots level.",
    ],
  },
  {
    keyPoint: "Creativity and Heart",
    keyPointText: "Artistic Flavor",
    buttonText: "Learn More",
    image: photos.painting,
    expandedText: [
      "In my *spare* time I paint, write, and play music -- guitar, drums, bass (no singing). The problem solving process that enables me to turn a blank canvas into a painting informs how I tackle technical problems.",
      "I come to software engineering from a non-traditional background and I like to believe that I bring an element of outside-the-box thinking to my work.",
    ],
  },
];
export default data;
