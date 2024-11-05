export interface Item {
  Image: string;
  Category: string;
  uploadTime: string;
  title: string;
  description: string;
  article: string;
  profilName: string;
  Comments: string;
  Views: string;
  Likes: string;
  save: string;
  share: string;
  downlode: string;
  urlkey: string;
  disLikes: string;
}

export interface Deta {
  [id: string]: Item;
}

export const deta: Deta = {
  fullblog: {
    urlkey: "fullblog",
    Image: `https://picsum.photos/id/1018/536/354`,
    Category: "Home Office",
    uploadTime: "19-5-2024",
    title: "Designing a Functional Workflow at Home",
    description:
      "Create a productive home office environment with these essential tips.",
    article: `1. Set Up Your Workspace
      Dedicated Space: Designate a specific area in your home for work. Ideally, this should be a quiet, well-lit space with minimal distractions.
      Ergonomic Setup: Invest in a comfortable chair, desk, and monitor setup to promote good posture and reduce physical strain.
      Personalization: Make the space your own with plants, art, or decor that inspires creativity and focus.
      2. Establish a Routine
      Set Regular Hours: Define your work hours and stick to them consistently to establish a sense of structure.
      Morning Ritual: Start your day with a routine that signals the transition into work mode, such as meditation, exercise, or a morning walk.
      3. Use Task Management Tools
      Digital Tools: Utilize task management apps like Todoist, Trello, or Asana to organize your workload and prioritize tasks.
      Time Blocking: Allocate specific time slots for different tasks throughout the day to maintain focus and manage time effectively.`,
    profilName: "harishsaini",
    Comments: "Great tips for staying productive while working from home!",
    Views: "15k",
    Likes: "3k",
    disLikes: "40",
    save: "500",
    share: "200",
    downlode: "150",
  },
  Blog: {
    urlkey: "Blog",
    Image: `https://picsum.photos/id/1015/536/354`,
    Category: "Productivity",
    uploadTime: "18-5-2024",
    title: "Maximizing Efficiency in Remote Work",
    description:
      "Explore strategies to enhance your productivity while working remotely.",
    article: `1. Create a Dedicated Workspace
      Separate Work Zone: Ensure your workspace is distinct from your living areas to maintain focus.
      Ergonomics: Choose furniture that supports your body and prevents strain.
      Decorate: Personalize your area to make it inviting and motivating.
      2. Develop a Work Routine
      Consistent Schedule: Stick to regular working hours to create a work-life balance.
      Start-Up Routine: Engage in activities that help you transition into work mode.
      3. Leverage Technology
      Productivity Apps: Tools like Asana and Trello can help you manage tasks efficiently.
      Time Management: Use techniques like Pomodoro to stay focused and productive.`,
    profilName: "john_doe",
    Comments: "These tips really helped me stay on track with my tasks!",
    Views: "12k",
    Likes: "2.5k",
    save: "300",
    share: "180",
    disLikes: "40",
    downlode: "120",
  },
  games: {
    urlkey: "games",
    Image: `https://picsum.photos/id/1021/535/354`,
    disLikes: "40",
    Category: "Gaming",
    uploadTime: "17-5-2024",
    title: "Top 10 Games for Stress Relief",
    description:
      "Discover the best games to unwind and relax after a long day.",
    article: `1. Stardew Valley
      Relaxing Farm Life: Enjoy the peaceful life of a farmer in this simulation game.
      Customization: Build and decorate your farm as you see fit.
      2. Animal Crossing: New Horizons
      Island Getaway: Escape to a deserted island and create your paradise.
      Community: Interact with cute animal villagers and visit friends' islands.
      3. The Sims 4
      Life Simulation: Control the lives of your Sims and build their homes.
      Creativity: Customize characters and design elaborate homes.`,
    profilName: "gamingguru",
    Comments: "Stardew Valley is my go-to game for relaxing!",
    Views: "20k",
    Likes: "4k",
    save: "800",
    share: "400",
    downlode: "300",
  },
  bus: {
    urlkey: "bus",
    Image: `https://picsum.photos/id/1019/534/354`,
    disLikes: "40",
    Category: "Travel",
    uploadTime: "16-5-2024",
    title: "Exploring the City by Bus: A Traveler's Guide",
    description:
      "Tips and tricks for navigating city buses and making the most of your urban adventures.",
    article: `1. Plan Your Route
      Maps and Apps: Use transit apps and maps to plan your journey in advance.
      Schedules: Check bus schedules to avoid long waits.
      2. Understand the Fare System
      Payment Methods: Know how to pay, whether it's by card, cash, or app.
      Passes: Look into daily or weekly passes for savings.
      3. Safety and Etiquette
      Personal Belongings: Keep your items secure and be aware of your surroundings.
      Courtesy: Offer seats to those who need them and follow local etiquette.`,
    profilName: "travelbuff",
    Comments: "This guide made my city travel so much easier!",
    Views: "18k",
    Likes: "3.5k",
    save: "600",
    share: "250",
    downlode: "200",
  },
  chatgpt: {
    urlkey: "chatgpt",
    Image: `https://picsum.photos/id/1024/533/354`,
    disLikes: "40",
    Category: "Technology",
    uploadTime: "15-5-2024",
    title: "Leveraging ChatGPT for Customer Support",
    description:
      "How AI is transforming customer support and enhancing user experiences.",
    article: `1. Instant Responses
      24/7 Availability: Provide customers with immediate assistance at any time.
      Efficiency: Reduce wait times and handle multiple inquiries simultaneously.
      2. Personalized Assistance
      Contextual Understanding: ChatGPT can understand and respond to queries in a human-like manner.
      Adaptability: Tailor responses based on customer history and preferences.
      3. Cost-Effective Solution
      Scalability: Easily scale support operations without a proportional increase in cost.
      Integration: Seamlessly integrate ChatGPT with existing support systems.`,
    profilName: "techsavvy",
    Comments:
      "Our customer satisfaction rates have soared since implementing ChatGPT!",
    Views: "22k",
    Likes: "5k",
    save: "700",
    share: "350",
    downlode: "280",
  },
  phone: {
    urlkey: "phone",
    Image: `https://picsum.photos/id/1022/532/354`,
    disLikes: "40",
    Category: "Technology",
    uploadTime: "14-5-2024",
    title: "Top Smartphone Apps for 2024",
    description:
      "A curated list of must-have apps to enhance your smartphone experience.",
    article: `1. Productivity
      Notion: Organize your tasks, notes, and projects in one place.
      Todoist: Keep track of your to-do lists and deadlines.
      2. Health and Fitness
      MyFitnessPal: Track your diet and exercise routines.
      Headspace: Practice mindfulness and meditation on the go.
      3. Entertainment
      Spotify: Stream your favorite music and podcasts.
      Netflix: Watch movies and TV shows anytime, anywhere.`,
    profilName: "appenthusiast",
    Comments: "Notion has completely transformed how I manage my tasks!",
    Views: "25k",
    Likes: "6k",
    save: "900",
    share: "450",
    downlode: "350",
  },
  tab: {
    urlkey: "tab",
    Image: `https://picsum.photos/id/1020/531/354`,

    Category: "Technology",
    uploadTime: "13-5-2024",
    title: "Best Tablets for Creative Professionals",
    description:
      "Explore the top tablets for artists, designers, and other creative professionals.",
    article: `1. Apple iPad Pro
      Performance: Equipped with the M1 chip for high performance.
      Display: Stunning Liquid Retina XDR display for vibrant visuals.
      2. Microsoft Surface Pro 8
      Versatility: Functions as both a tablet and a laptop.
      Pen Support: Excellent stylus support for detailed artwork.
      3. Samsung Galaxy Tab S8
      Portability: Lightweight and easy to carry.
      Battery Life: Long-lasting battery for extended use.`,
    profilName: "creativeexpert",
    Comments: "The iPad Pro is a game-changer for my digital art projects!",
    Views: "30k",
    Likes: "7k",
    disLikes: "3",
    save: "1k",
    share: "500",
    downlode: "400",
  },
};
