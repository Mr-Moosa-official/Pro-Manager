export type Task = {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done' | 'canceled';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  team: User[];
  tasks: Task[];
  progress: number;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageHint: string;
};

export type Review = {
  id: string;
  name: string;
  avatar: string;
  avatarHint: string;
  rating: number;
  text: string;
  course: string;
};

export const users: User[] = [
  { id: 'user-1', name: 'Alice Johnson', avatar: 'https://picsum.photos/seed/user1/40/40' },
  { id: 'user-2', name: 'Bob Williams', avatar: 'https://picsum.photos/seed/user2/40/40' },
  { id: 'user-3', name: 'Charlie Brown', avatar: 'https://picsum.photos/seed/user3/40/40' },
  { id: 'user-4', name: 'Diana Miller', avatar: 'https://picsum.photos/seed/user4/40/40' },
  { id: 'user-5', name: 'Ethan Davis', avatar: 'https://picsum.photos/seed/user5/40/40' },
  { id: 'user-6', name: 'Fiona Garcia', avatar: 'https://picsum.photos/seed/user6/40/40' },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website for a modern user experience and improved performance.',
    team: [users[0], users[1], users[3]],
    tasks: [
      { id: 'task-1-1', title: 'Design new homepage mockup', status: 'done', priority: 'high', dueDate: '2024-08-15' },
      { id: 'task-1-2', title: 'Develop frontend for homepage', status: 'in-progress', priority: 'high', dueDate: '2024-08-20' },
      { id: 'task-1-3', title: 'Setup CMS for blog', status: 'todo', priority: 'medium', dueDate: '2024-08-25' },
      { id: 'task-1-4', title: 'Migrate existing blog posts', status: 'todo', priority: 'low', dueDate: '2024-09-01' },
      { id: 'task-1-5', title: 'User testing and feedback session', status: 'canceled', priority: 'medium', dueDate: '2024-09-05' },
    ],
    progress: 40,
  },
  {
    id: 'proj-2',
    name: 'Mobile App Launch',
    description: 'Launch the new mobile application on iOS and Android platforms, including store listings and marketing.',
    team: [users[0], users[2], users[5]],
    tasks: [
      { id: 'task-2-1', title: 'Finalize app store screenshots', status: 'done', priority: 'medium', dueDate: '2024-08-10' },
      { id: 'task-2-2', title: 'Submit to Apple App Store', status: 'done', priority: 'high', dueDate: '2024-08-12' },
      { id: 'task-2-3', title: 'Submit to Google Play Store', status: 'in-progress', priority: 'high', dueDate: '2024-08-12' },
      { id: 'task-2-4', title: 'Prepare launch day marketing materials', status: 'todo', priority: 'medium', dueDate: '2024-08-18' },
    ],
    progress: 66,
  },
  {
    id: 'proj-3',
    name: 'Q3 Marketing Campaign',
    description: 'Plan and execute the marketing campaign for the third quarter to boost user acquisition.',
    team: [users[1], users[3]],
    tasks: [
      { id: 'task-3-1', title: 'Define campaign goals and KPIs', status: 'done', priority: 'high', dueDate: '2024-07-20' },
      { id: 'task-3-2', title: 'Create social media content calendar', status: 'done', priority: 'medium', dueDate: '2024-07-25' },
      { id: 'task-3-3', title: 'Run A/B tests on ad copy', status: 'done', priority: 'medium', dueDate: '2024-08-05' },
      { id: 'task-3-4', title: 'Analyze campaign performance', status: 'done', priority: 'high', dueDate: '2024-08-15' },
    ],
    progress: 100,
  },
  {
    id: 'proj-4',
    name: 'API Infrastructure Upgrade',
    description: 'Upgrade the core API infrastructure to improve scalability, reliability, and security.',
    team: [users[4], users[5], users[0]],
    tasks: [
      { id: 'task-4-1', title: 'Benchmark current performance', status: 'done', priority: 'medium', dueDate: '2024-08-01' },
      { id: 'task-4-2', title: 'Deploy new servers in staging', status: 'in-progress', priority: 'high', dueDate: '2024-08-22' },
      { id: 'task-4-3', title: 'Migrate database to new cluster', status: 'todo', priority: 'high', dueDate: '2024-09-01' },
    ],
    progress: 33,
  },
  {
    id: 'proj-5',
    name: 'Customer Support Center',
    description: 'Establish a new customer support center, including hiring and training support staff.',
    team: [users[3], users[1]],
    tasks: [
      { id: 'task-5-1', title: 'Select and set up ticketing software', status: 'done', priority: 'high', dueDate: '2024-08-10' },
      { id: 'task-5-2', title: 'Create knowledge base articles', status: 'in-progress', priority: 'medium', dueDate: '2024-08-25' },
      { id: 'task-5-3', title: 'Hire 2 new support agents', status: 'in-progress', priority: 'high', dueDate: '2024-08-30' },
      { id: 'task-5-4', title: 'Train new support agents', status: 'todo', priority: 'medium', dueDate: '2024-09-10' },
    ],
    progress: 25,
  },
  {
    id: 'proj-6',
    name: 'Annual Company Retreat',
    description: 'Organize the annual company-wide retreat for team building and strategic planning.',
    team: [users[2]],
    tasks: [
      { id: 'task-6-1', title: 'Finalize budget', status: 'done', priority: 'medium', dueDate: '2024-08-05' },
      { id: 'task-6-2', title: 'Book venue and accommodation', status: 'done', priority: 'high', dueDate: '2024-08-20' },
      { id: 'task-6-3', title: 'Plan activities and workshops', status: 'done', priority: 'medium', dueDate: '2024-09-01' },
      { id: 'task-6-4', title: 'Send invitations to all employees', status: 'done', priority: 'high', dueDate: '2024-09-05' },
    ],
    progress: 100,
  },
];

export const courses: Course[] = [
    { id: 'course-1', title: 'Agile Project Management', description: 'Master the Agile methodology and deliver projects faster and more efficiently.', image: 'https://picsum.photos/seed/course1/600/400', imageHint: 'team meeting' },
    { id: 'course-2', title: 'Advanced Scrum Techniques', description: 'Deepen your Scrum knowledge with advanced techniques for complex projects.', image: 'https://picsum.photos/seed/course2/600/400', imageHint: 'whiteboard planning' },
    { id: 'course-3', title: 'Kanban for Beginners', description: 'Learn how to visualize your workflow and limit work-in-progress with Kanban.', image: 'https://picsum.photos/seed/course3/600/400', imageHint: 'sticky notes' },
    { id: 'course-4', title: 'Leadership in Project Management', description: 'Develop the skills to lead and motivate your project team to success.', image: 'https://picsum.photos/seed/course4/600/400', imageHint: 'person presenting' },
];

export const reviews: Review[] = [
    { id: 'review-1', name: 'Emily White', avatar: 'https://picsum.photos/seed/review1/48/48', avatarHint: 'woman smiling', rating: 5, text: 'The Agile course was fantastic! It provided practical insights that I could immediately apply to my team\'s workflow.', course: 'Agile Project Management' },
    { id: 'review-2', name: 'David Green', avatar: 'https://picsum.photos/seed/review2/48/48', avatarHint: 'man portrait', rating: 4, text: 'Great content in the Leadership course. I wish there were more case studies, but overall very valuable.', course: 'Leadership in Project Management' },
    { id: 'review-3', name: 'Sophia Black', avatar: 'https://picsum.photos/seed/review3/48/48', avatarHint: 'person glasses', rating: 5, text: 'ProManager has revolutionized how we manage projects. The UI is intuitive and the progress tracking is a lifesaver.', course: 'Platform Review' },
    { id: 'review-4', name: 'Michael Grey', avatar: 'https://picsum.photos/seed/review4/48/48', avatarHint: 'man thinking', rating: 5, text: 'I was new to Kanban, and this course made it so easy to understand. The visual examples were incredibly helpful.', course: 'Kanban for Beginners' },
];
