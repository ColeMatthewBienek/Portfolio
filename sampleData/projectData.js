const projects = [
  {
    title: "Yummy!",
    shortDescription:
      "Mobile app built with React Native, postgreSQL, Express, and Node",
    mediaURL: "https://media.giphy.com/media/rCpVockNHYSnVNxHvU/giphy.gif",
    longDescription: [
      "Yummy! is a Tik-Tok clone where users can view, comment, like, and share short food videos. The framework is scaffolded with Expo and built using the xcode simulator.",
      "Auth was accomplished using Firebase, and user data was persisted using postgreSQL hosted in an AWS EC2 instance.",
      "I faced a couple interesting situations that needed to be overcome. Most notably I had to learn how to poke around in the React Native microservices structure in order to push my auth flow though to completion. Second, there was only a week allocated to produce a feature-rich MVP. ",
      "I will definitely look to tackle some more mobile apps in the near future, the joy of working without dealing with the DOM is a welcome change from web dev work.",
    ],
    gitHubLinks: [{ url: "https://github.com/DBoceanZ/Yummy", name: "Yummy" }],
  },
  {
    title: "Atelier E-Commerce Rebuild",
    shortDescription:
      "I had a chance to rebuild and refactor an e-commerce Product Details Page",
    mediaURL: "https://media.giphy.com/media/IP9cVLCIRm5ZyezaXz/giphy.gif",
    longDescription: [
      "The client needed a complete rebuild of a dated and underperformant product details UI, and the refactoring of the seriously underpowered monolithic API they were using. ",
      "The front-end rebuild was the first step. The entire page was retooled using React and styled using custom class components. Once the UX flow was complete, additional changes were made in order to improve performance. Images not needed for initial render were lazy-loaded and held in suspense until the client required them. ",
      "The back end refactor began with migrating the client's data to a postgreSQL database. After optimizing query performance, I rebuilt the API to seamless fit into the front end rebuild. ",
      "After initial testing to set baseline controls, I constructed and deployed three node servers using Docker containers in separate AWS EC2 instances. In front of those I placed an NGINX proxy/load balancing server configured to process requests according to the least connected server. Several rounds of load tests were conducted and small changes made to query construction and proxy performance. ",
      "Clientspec required a minimum of 1000 rps, with < 0.02 err rate. I was able to deliver 2250rps with 0% err rate and 0% network timeout.",
    ],
    gitHubLinks: [
      {
        url: "https://github.com/rfp2209-trix/FEC",
        name: "Atelier Front End",
      },
      {
        url: "https://github.com/Werewolves-SDC/Products-API",
        name: "Atelier Back End",
      },
    ],
  },
];

export default projects;
