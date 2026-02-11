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
  avatarHint: string;
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
  { id: 'user-1', name: 'Alice Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1080', avatarHint: 'woman smiling' },
  { id: 'user-2', name: 'Bob Williams', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080', avatarHint: 'man portrait' },
  { id: 'user-3', name: 'Charlie Brown', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1080', avatarHint: 'man casual' },
  { id: 'user-4', name: 'Diana Miller', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080', avatarHint: 'woman fashion' },
  { id: 'user-5', name: 'Ethan Davis', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1080', avatarHint: 'man professional' },
  { id: 'user-6', name: 'Fiona Garcia', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1080', avatarHint: 'woman closeup' },
  { id: 'user-7', name: 'George Rodriguez', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1080', avatarHint: 'man serious' },
  { id: 'user-8', name: 'Hannah Smith', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1080', avatarHint: 'woman red hair' },
];

const calculateProgress = (tasks: Task[]) => {
    if (tasks.length === 0) return 0;
    const doneTasks = tasks.filter(t => t.status === 'done').length;
    const totalTasks = tasks.filter(t => t.status !== 'canceled').length;
    if (totalTasks === 0) return 0;
    return Math.round((doneTasks / totalTasks) * 100);
}

const project1_tasks: Task[] = [
    { id: 'task-1-1', title: 'Design new homepage mockup', status: 'done', priority: 'high', dueDate: '2024-08-15' },
    { id: 'task-1-2', title: 'Develop frontend for homepage', status: 'in-progress', priority: 'high', dueDate: '2024-08-20' },
    { id: 'task-1-3', title: 'Setup CMS for blog', status: 'todo', priority: 'medium', dueDate: '2024-08-25' },
    { id: 'task-1-4', title: 'Migrate existing blog posts', status: 'todo', priority: 'low', dueDate: '2024-09-01' },
    { id: 'task-1-5', title: 'User testing and feedback session', status: 'canceled', priority: 'medium', dueDate: '2024-09-05' },
];

const project2_tasks: Task[] = [
    { id: 'task-2-1', title: 'Finalize app store screenshots', status: 'done', priority: 'medium', dueDate: '2024-08-10' },
    { id: 'task-2-2', title: 'Submit to Apple App Store', status: 'done', priority: 'high', dueDate: '2024-08-12' },
    { id: 'task-2-3', title: 'Submit to Google Play Store', status: 'in-progress', priority: 'high', dueDate: '2024-08-12' },
    { id: 'task-2-4', title: 'Prepare launch day marketing materials', status: 'todo', priority: 'medium', dueDate: '2024-08-18' },
];

const project3_tasks: Task[] = [
    { id: 'task-3-1', title: 'Define campaign goals and KPIs', status: 'done', priority: 'high', dueDate: '2024-07-20' },
    { id: 'task-3-2', title: 'Create social media content calendar', status: 'done', priority: 'medium', dueDate: '2024-07-25' },
    { id: 'task-3-3', title: 'Run A/B tests on ad copy', status: 'done', priority: 'medium', dueDate: '2024-08-05' },
    { id: 'task-3-4', title: 'Analyze campaign performance', status: 'done', priority: 'high', dueDate: '2024-08-15' },
];

const project4_tasks: Task[] = [
    { id: 'task-4-1', title: 'Benchmark current performance', status: 'done', priority: 'medium', dueDate: '2024-08-01' },
    { id: 'task-4-2', title: 'Deploy new servers in staging', status: 'in-progress', priority: 'high', dueDate: '2024-08-22' },
    { id: 'task-4-3', title: 'Migrate database to new cluster', status: 'todo', priority: 'high', dueDate: '2024-09-01' },
];

const project5_tasks: Task[] = [
    { id: 'task-5-1', title: 'Select and set up ticketing software', status: 'done', priority: 'high', dueDate: '2024-08-10' },
    { id: 'task-5-2', title: 'Create knowledge base articles', status: 'in-progress', priority: 'medium', dueDate: '2024-08-25' },
    { id: 'task-5-3', title: 'Hire 2 new support agents', status: 'in-progress', priority: 'high', dueDate: '2024-08-30' },
    { id: 'task-5-4', title: 'Train new support agents', status: 'todo', priority: 'medium', dueDate: '2024-09-10' },
];

const project6_tasks: Task[] = [
    { id: 'task-6-1', title: 'Finalize budget', status: 'done', priority: 'medium', dueDate: '2024-08-05' },
    { id: 'task-6-2', title: 'Book venue and accommodation', status: 'done', priority: 'high', dueDate: '2024-08-20' },
    { id: 'task-6-3', title: 'Plan activities and workshops', status: 'done', priority: 'medium', dueDate: '2024-09-01' },
    { id: 'task-6-4', title: 'Send invitations to all employees', status: 'done', priority: 'high', dueDate: '2024-09-05' },
];

const project7_tasks: Task[] = [
    { id: 'task-7-1', title: 'Research new security protocols', status: 'done', priority: 'high', dueDate: '2024-09-01' },
    { id: 'task-7-2', title: 'Implement multi-factor authentication', status: 'in-progress', priority: 'high', dueDate: '2024-09-15' },
    { id: 'task-7-3', title: 'Conduct security audit', status: 'todo', priority: 'medium', dueDate: '2024-09-20' },
];

const project8_tasks: Task[] = [
    { id: 'task-8-1', title: 'Design user onboarding flow', status: 'done', priority: 'medium', dueDate: '2024-08-20' },
    { id: 'task-8-2', title: 'Develop interactive tutorial', status: 'in-progress', priority: 'medium', dueDate: '2024-09-05' },
    { id: 'task-8-3', title: 'Gather user feedback on onboarding', status: 'todo', priority: 'low', dueDate: '2024-09-20' },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website for a modern user experience and improved performance.',
    team: [users[0], users[1], users[3]],
    tasks: project1_tasks,
    progress: calculateProgress(project1_tasks),
  },
  {
    id: 'proj-2',
    name: 'Mobile App Launch',
    description: 'Launch the new mobile application on iOS and Android platforms, including store listings and marketing.',
    team: [users[0], users[2], users[5]],
    tasks: project2_tasks,
    progress: calculateProgress(project2_tasks),
  },
  {
    id: 'proj-3',
    name: 'Q3 Marketing Campaign',
    description: 'Plan and execute the marketing campaign for the third quarter to boost user acquisition.',
    team: [users[1], users[3]],
    tasks: project3_tasks,
    progress: calculateProgress(project3_tasks),
  },
  {
    id: 'proj-4',
    name: 'API Infrastructure Upgrade',
    description: 'Upgrade the core API infrastructure to improve scalability, reliability, and security.',
    team: [users[4], users[5], users[0]],
    tasks: project4_tasks,
    progress: calculateProgress(project4_tasks),
  },
  {
    id: 'proj-5',
    name: 'Customer Support Center',
    description: 'Establish a new customer support center, including hiring and training support staff.',
    team: [users[3], users[1]],
    tasks: project5_tasks,
    progress: calculateProgress(project5_tasks),
  },
  {
    id: 'proj-6',
    name: 'Annual Company Retreat',
    description: 'Organize the annual company-wide retreat for team building and strategic planning.',
    team: [users[2]],
    tasks: project6_tasks,
    progress: calculateProgress(project6_tasks),
  },
   {
    id: 'proj-7',
    name: 'Security Compliance Audit',
    description: 'Ensure the application meets all required security standards and certifications.',
    team: [users[4], users[6]],
    tasks: project7_tasks,
    progress: calculateProgress(project7_tasks),
  },
  {
    id: 'proj-8',
    name: 'New Feature: User Onboarding',
    description: 'Design and implement a new user onboarding experience to improve activation rates.',
    team: [users[0], users[7]],
    tasks: project8_tasks,
    progress: calculateProgress(project8_tasks),
  },
];

export const courses: Course[] = [
    { id: 'course-1', title: 'Agile & Scrum Fundamentals', description: 'Master the Agile methodology and Scrum framework to deliver projects faster and more efficiently.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1080', imageHint: 'team meeting' },
    { id: 'course-2', title: 'Advanced Kanban Systems', description: 'Deepen your Kanban knowledge with advanced techniques for complex projects and value stream mapping.', image: 'https://images.unsplash.com/photo-1580934174026-8142803ebb5b?q=80&w=1080', imageHint: 'sticky notes' },
    { id: 'course-3', title: 'Project Risk Management', description: 'Learn to identify, analyze, and mitigate risks in your projects to ensure successful outcomes.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1080', imageHint: 'business people' },
    { id: 'course-4', title: 'Effective Project Leadership', description: 'Develop the skills to lead and motivate your project team to success and overcome challenges.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1080', imageHint: 'team working' },
    { id: 'course-5', title: 'PMP Certification Prep', description: 'A comprehensive course to prepare you for the Project Management Professional (PMP) exam.', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1080', imageHint: 'people studying' },
    { id: 'course-6', title: 'Productivity Masterclass', description: 'Learn techniques and habits to boost your personal and team productivity.', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1080', imageHint: 'person organized' },
];

export const reviews: Review[] = [
    { id: 'review-1', name: 'Emily White', avatar: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845', avatarHint: 'woman smiling', rating: 5, text: 'The Agile course was fantastic! It provided practical insights that I could immediately apply to my team\'s workflow.', course: 'Agile & Scrum Fundamentals' },
    { id: 'review-2', name: 'David Green', avatar: 'https://images.unsplash.com/photo-1636377985931-898218afd306', avatarHint: 'man portrait', rating: 4, text: 'Great content in the Leadership course. I wish there were more case studies, but overall very valuable.', course: 'Effective Project Leadership' },
    { id: 'review-3', name: 'Sophia Black', avatar: 'https://images.unsplash.com/photo-1590305173565-f789a8dd6be7', avatarHint: 'person glasses', rating: 5, text: 'TaskMaster has revolutionized how we manage projects. The UI is intuitive and the progress tracking is a lifesaver.', course: 'Platform Review' },
    { id: 'review-4', name: 'Michael Grey', avatar: 'https://images.unsplash.com/photo-1623185131451-ea1c7552afc3', avatarHint: 'man thinking', rating: 5, text: 'I was new to Kanban, and the advanced course made it so easy to understand. The visual examples were incredibly helpful.', course: 'Advanced Kanban Systems' },
    { id: 'review-5', name: 'Jessica Chen', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956', avatarHint: 'woman professional', rating: 5, text: 'The PMP Prep course was worth every penny. I passed my exam on the first try thanks to the structured content.', course: 'PMP Certification Prep' },
    { id: 'review-6', name: 'Chris Rodriguez', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a', avatarHint: 'man in suit', rating: 4, text: 'Risk management is a dry topic, but this course made it engaging. Highly recommended for any PM.', course: 'Project Risk Management' },
];
