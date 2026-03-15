import { CEFRLevel, Topic, Question } from "@/types";

export const topics: Record<CEFRLevel, Topic[]> = {
  A1: [
    { id: "family", label: "Family", description: "Talk about your family members", emoji: "👨‍👩‍👧" },
    { id: "food", label: "Food & Drink", description: "Describe meals and preferences", emoji: "🍎" },
    { id: "daily", label: "Daily Routine", description: "Describe your typical day", emoji: "🌅" },
  ],
  A2: [
    { id: "hobbies", label: "Hobbies", description: "Discuss your leisure activities", emoji: "🎨" },
    { id: "travel", label: "Travel", description: "Talk about trips and places", emoji: "✈️" },
    { id: "shopping", label: "Shopping", description: "Describe shopping experiences", emoji: "🛍️" },
  ],
  B1: [
    { id: "work", label: "Work & Career", description: "Discuss jobs and ambitions", emoji: "💼" },
    { id: "education", label: "Education", description: "Talk about learning experiences", emoji: "📚" },
    { id: "environment", label: "Environment", description: "Discuss environmental issues", emoji: "🌍" },
  ],
  B2: [
    { id: "technology", label: "Technology", description: "Explore the impact of technology", emoji: "💻" },
    { id: "society", label: "Society", description: "Discuss social trends and change", emoji: "🏙️" },
    { id: "health", label: "Health & Wellbeing", description: "Talk about health and lifestyle", emoji: "🏃" },
  ],
  C1: [
    { id: "politics", label: "Politics", description: "Analyse political systems and issues", emoji: "🏛️" },
    { id: "philosophy", label: "Philosophy", description: "Explore philosophical ideas", emoji: "🧠" },
    { id: "media", label: "Media & Ethics", description: "Debate media responsibility", emoji: "📰" },
  ],
};

export const questions: Record<string, Question[]> = {
  family: [
    { id: "f1", text: "Can you describe your family?" },
    { id: "f2", text: "What do you like to do with your family on weekends?" },
    { id: "f3", text: "How many people live in your home?" },
  ],
  food: [
    { id: "fd1", text: "What is your favourite food and why?" },
    { id: "fd2", text: "Do you prefer cooking at home or eating out?" },
    { id: "fd3", text: "Describe a typical breakfast in your country." },
  ],
  daily: [
    { id: "d1", text: "What time do you usually wake up?" },
    { id: "d2", text: "Describe what you do in the morning before work or school." },
    { id: "d3", text: "What do you usually do in the evenings?" },
  ],
  hobbies: [
    { id: "h1", text: "What hobbies do you enjoy in your free time?" },
    { id: "h2", text: "Have you recently started a new hobby? Tell me about it." },
    { id: "h3", text: "How do hobbies help people relax and recharge?" },
  ],
  travel: [
    { id: "tr1", text: "What is the most interesting place you have visited?" },
    { id: "tr2", text: "Do you prefer travelling alone or with others? Why?" },
    { id: "tr3", text: "What country would you most like to visit in the future?" },
  ],
  shopping: [
    { id: "sh1", text: "Do you prefer shopping online or in physical stores?" },
    { id: "sh2", text: "How often do you go shopping for clothes?" },
    { id: "sh3", text: "Have you ever regretted buying something? What happened?" },
  ],
  work: [
    { id: "w1", text: "What is your current job or what job would you like to have?" },
    { id: "w2", text: "What skills do you think are most important in the workplace?" },
    { id: "w3", text: "How do you balance work and personal life?" },
  ],
  education: [
    { id: "e1", text: "What did you study or what are you currently studying?" },
    { id: "e2", text: "How has education changed in your country over the past decade?" },
    { id: "e3", text: "What is more important: formal education or practical experience?" },
  ],
  environment: [
    { id: "en1", text: "What environmental issues concern you the most and why?" },
    { id: "en2", text: "What steps do you personally take to live more sustainably?" },
    { id: "en3", text: "Do you think governments are doing enough to tackle climate change?" },
  ],
  technology: [
    { id: "t1", text: "How has technology changed the way we communicate with each other?" },
    { id: "t2", text: "Do you think social media has more benefits or drawbacks for society?" },
    { id: "t3", text: "What technology could you not live without, and why?" },
  ],
  society: [
    { id: "so1", text: "How has your city or town changed over the last 10 years?" },
    { id: "so2", text: "What do you think are the biggest social challenges facing your generation?" },
    { id: "so3", text: "Is social inequality getting better or worse in your country?" },
  ],
  health: [
    { id: "he1", text: "How do you maintain a healthy lifestyle?" },
    { id: "he2", text: "Do you think mental health is taken seriously enough in modern society?" },
    { id: "he3", text: "How has your approach to health and fitness changed as you have gotten older?" },
  ],
  politics: [
    { id: "p1", text: "What are the strengths and weaknesses of democracy as a system?" },
    { id: "p2", text: "How much should governments interfere in the economy?" },
    { id: "p3", text: "Do you think ordinary citizens can have a real impact on political change?" },
  ],
  philosophy: [
    { id: "ph1", text: "What does happiness mean to you, and how do you pursue it?" },
    { id: "ph2", text: "Do you believe free will exists, or are our choices determined by external factors?" },
    { id: "ph3", text: "Is it ever ethically justifiable to break the law? Under what circumstances?" },
  ],
  media: [
    { id: "m1", text: "How responsible are media organisations for the beliefs of their audiences?" },
    { id: "m2", text: "Should social media platforms be regulated more strictly by governments?" },
    { id: "m3", text: "How do you distinguish between reliable and unreliable information online?" },
  ],
};