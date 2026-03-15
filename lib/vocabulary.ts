import { CEFRLevel } from "@/types";

export interface VocabWord {
  word: string;
  type: string; // noun, verb, adjective, phrase
  definition: string;
  example: string;
}

export interface VocabSection {
  category: string;
  words: VocabWord[];
}

export const vocabulary: Record<string, Record<CEFRLevel, VocabSection[]>> = {
  family: {
    A1: [
      {
        category: "Family Members",
        words: [
          { word: "mother", type: "noun", definition: "A female parent", example: "My mother works at a school." },
          { word: "father", type: "noun", definition: "A male parent", example: "My father likes football." },
          { word: "brother", type: "noun", definition: "A male sibling", example: "I have one brother." },
          { word: "sister", type: "noun", definition: "A female sibling", example: "My sister is seven years old." },
          { word: "grandmother", type: "noun", definition: "The mother of your parent", example: "My grandmother makes great soup." },
          { word: "grandfather", type: "noun", definition: "The father of your parent", example: "My grandfather is 80 years old." },
        ],
      },
      {
        category: "Basic Phrases",
        words: [
          { word: "live with", type: "phrase", definition: "To share a home with someone", example: "I live with my parents." },
          { word: "only child", type: "phrase", definition: "A child with no siblings", example: "She is an only child." },
          { word: "close family", type: "phrase", definition: "A family with strong relationships", example: "We are a very close family." },
        ],
      },
    ],
    A2: [
      {
        category: "Extended Family",
        words: [
          { word: "aunt", type: "noun", definition: "Your parent's sister", example: "My aunt lives in France." },
          { word: "uncle", type: "noun", definition: "Your parent's brother", example: "My uncle is very funny." },
          { word: "cousin", type: "noun", definition: "The child of your aunt or uncle", example: "I have five cousins." },
          { word: "nephew", type: "noun", definition: "Your brother or sister's son", example: "My nephew is starting school." },
          { word: "niece", type: "noun", definition: "Your brother or sister's daughter", example: "My niece loves dancing." },
        ],
      },
      {
        category: "Relationships",
        words: [
          { word: "get on well", type: "phrase", definition: "To have a good relationship with someone", example: "I get on well with my sister." },
          { word: "look after", type: "phrase", definition: "To take care of someone", example: "My parents look after my grandparents." },
          { word: "spend time", type: "phrase", definition: "To use time with someone", example: "We spend time together at weekends." },
        ],
      },
    ],
    B1: [
      {
        category: "Family Dynamics",
        words: [
          { word: "upbringing", type: "noun", definition: "The way a child is raised", example: "She had a strict upbringing." },
          { word: "sibling rivalry", type: "phrase", definition: "Competition between brothers and sisters", example: "Sibling rivalry is normal in families." },
          { word: "nuclear family", type: "phrase", definition: "Parents and their children only", example: "The nuclear family is still common." },
          { word: "extended family", type: "phrase", definition: "Relatives beyond parents and children", example: "We celebrate holidays with our extended family." },
          { word: "generation", type: "noun", definition: "People born in the same period", example: "There is a gap between generations." },
        ],
      },
      {
        category: "Useful Verbs",
        words: [
          { word: "raise", type: "verb", definition: "To bring up a child", example: "They raised three children." },
          { word: "support", type: "verb", definition: "To help someone financially or emotionally", example: "Families should support each other." },
          { word: "inherit", type: "verb", definition: "To receive something from a family member", example: "She inherited her mother's kindness." },
        ],
      },
    ],
    B2: [
      {
        category: "Modern Family",
        words: [
          { word: "single-parent family", type: "phrase", definition: "A family with one parent", example: "Single-parent families face unique challenges." },
          { word: "blended family", type: "phrase", definition: "A family with step-parents or step-siblings", example: "Blended families are increasingly common." },
          { word: "estranged", type: "adjective", definition: "No longer close or in contact", example: "He is estranged from his father." },
          { word: "dysfunctional", type: "adjective", definition: "A family that doesn't work well together", example: "Dysfunctional families can affect children." },
          { word: "reconcile", type: "verb", definition: "To restore a relationship after conflict", example: "They reconciled after years apart." },
        ],
      },
    ],
    C1: [
      {
        category: "Advanced Concepts",
        words: [
          { word: "filial piety", type: "phrase", definition: "Respect and duty toward parents and ancestors", example: "Filial piety is central to many Asian cultures." },
          { word: "matriarchal", type: "adjective", definition: "Controlled or led by women/mothers", example: "Some societies are matriarchal." },
          { word: "patriarchal", type: "adjective", definition: "Controlled or led by men/fathers", example: "Patriarchal structures are being questioned." },
          { word: "intergenerational", type: "adjective", definition: "Involving several generations", example: "Intergenerational trauma is well-documented." },
          { word: "nepotism", type: "noun", definition: "Favouritism shown to family members", example: "Nepotism undermines fairness at work." },
        ],
      },
    ],
  },
  technology: {
    A1: [
      {
        category: "Basic Tech Words",
        words: [
          { word: "phone", type: "noun", definition: "A device used to call and message people", example: "I use my phone every day." },
          { word: "computer", type: "noun", definition: "A machine for processing information", example: "I have a computer at home." },
          { word: "internet", type: "noun", definition: "A global network of computers", example: "I use the internet at school." },
          { word: "email", type: "noun", definition: "Electronic mail sent online", example: "I got an email from my teacher." },
          { word: "app", type: "noun", definition: "A program on a phone or computer", example: "I use a weather app." },
        ],
      },
    ],
    A2: [
      {
        category: "Everyday Tech",
        words: [
          { word: "download", type: "verb", definition: "To save something from the internet", example: "I downloaded a new game." },
          { word: "upload", type: "verb", definition: "To send something to the internet", example: "She uploaded a photo." },
          { word: "search", type: "verb", definition: "To look for information online", example: "I search for recipes online." },
          { word: "social media", type: "phrase", definition: "Websites where people share content", example: "I use social media every day." },
          { word: "password", type: "noun", definition: "A secret code to access an account", example: "Use a strong password." },
        ],
      },
    ],
    B1: [
      {
        category: "Digital Life",
        words: [
          { word: "screen time", type: "phrase", definition: "Time spent looking at a screen", example: "Too much screen time is unhealthy." },
          { word: "online privacy", type: "phrase", definition: "Keeping personal data safe online", example: "Online privacy is very important." },
          { word: "artificial intelligence", type: "phrase", definition: "Machines that simulate human thinking", example: "Artificial intelligence is changing jobs." },
          { word: "software", type: "noun", definition: "Programs used by computers", example: "The software needs updating." },
          { word: "device", type: "noun", definition: "A piece of technology", example: "How many devices do you own?" },
        ],
      },
    ],
    B2: [
      {
        category: "Tech & Society",
        words: [
          { word: "algorithm", type: "noun", definition: "A set of rules a computer follows", example: "Algorithms decide what you see online." },
          { word: "data breach", type: "phrase", definition: "Unauthorised access to private data", example: "The company suffered a data breach." },
          { word: "automation", type: "noun", definition: "Using machines to do human tasks", example: "Automation is replacing factory workers." },
          { word: "digital divide", type: "phrase", definition: "The gap between those with and without technology", example: "The digital divide affects developing countries." },
          { word: "surveillance", type: "noun", definition: "Monitoring people using technology", example: "Mass surveillance raises privacy concerns." },
        ],
      },
    ],
    C1: [
      {
        category: "Critical Tech Vocabulary",
        words: [
          { word: "disruptive technology", type: "phrase", definition: "Technology that fundamentally changes an industry", example: "Smartphones were a disruptive technology." },
          { word: "technocracy", type: "noun", definition: "A system governed by technical experts", example: "Critics warn of a growing technocracy." },
          { word: "obsolescence", type: "noun", definition: "The process of becoming outdated", example: "Built-in obsolescence drives consumer spending." },
          { word: "interoperability", type: "noun", definition: "The ability of systems to work together", example: "Interoperability between platforms is a challenge." },
          { word: "disinformation", type: "noun", definition: "False information spread deliberately", example: "Disinformation spreads rapidly online." },
        ],
      },
    ],
  },
  hobbies: {
    A1: [
      {
        category: "Common Hobbies",
        words: [
          { word: "reading", type: "noun", definition: "Looking at and understanding written words", example: "I enjoy reading books." },
          { word: "cooking", type: "noun", definition: "Preparing food", example: "Cooking is my favourite hobby." },
          { word: "drawing", type: "noun", definition: "Making pictures with a pen or pencil", example: "She loves drawing animals." },
          { word: "swimming", type: "noun", definition: "Moving through water using your body", example: "I go swimming on Saturdays." },
          { word: "music", type: "noun", definition: "Sounds organised in a pleasing way", example: "I listen to music every day." },
        ],
      },
    ],
    A2: [
      {
        category: "Hobby Vocabulary",
        words: [
          { word: "practise", type: "verb", definition: "To do something repeatedly to improve", example: "I practise guitar every evening." },
          { word: "improve", type: "verb", definition: "To get better at something", example: "I want to improve my painting." },
          { word: "join a club", type: "phrase", definition: "To become a member of a group", example: "I joined a book club." },
          { word: "free time", type: "phrase", definition: "Time when you are not working", example: "In my free time I cycle." },
          { word: "outdoor", type: "adjective", definition: "Done outside", example: "I love outdoor activities." },
        ],
      },
    ],
    B1: [
      {
        category: "Talking About Hobbies",
        words: [
          { word: "passionate about", type: "phrase", definition: "Having strong enthusiasm for something", example: "I am passionate about photography." },
          { word: "take up", type: "phrase", definition: "To start a new hobby", example: "I recently took up yoga." },
          { word: "skilled at", type: "phrase", definition: "Good at doing something", example: "She is skilled at woodworking." },
          { word: "challenging", type: "adjective", definition: "Difficult but rewarding", example: "Rock climbing is challenging but fun." },
          { word: "relaxing", type: "adjective", definition: "Helping you feel calm", example: "Gardening is very relaxing." },
        ],
      },
    ],
    B2: [
      {
        category: "Hobbies & Identity",
        words: [
          { word: "pursue", type: "verb", definition: "To follow or develop an interest", example: "She pursued her passion for art." },
          { word: "therapeutic", type: "adjective", definition: "Having a healing effect on the mind", example: "Journalling can be very therapeutic." },
          { word: "discipline", type: "noun", definition: "The ability to control yourself and work hard", example: "Learning an instrument requires discipline." },
          { word: "amateur", type: "noun", definition: "Someone who does something for pleasure, not money", example: "He is an amateur photographer." },
          { word: "pastime", type: "noun", definition: "An activity done for enjoyment", example: "Reading is a popular pastime." },
        ],
      },
    ],
    C1: [
      {
        category: "Advanced Hobby Language",
        words: [
          { word: "immersive", type: "adjective", definition: "Providing a deep, engaging experience", example: "Virtual reality offers an immersive experience." },
          { word: "intrinsic motivation", type: "phrase", definition: "Doing something for its own reward", example: "Hobbies are driven by intrinsic motivation." },
          { word: "mastery", type: "noun", definition: "An expert level of skill", example: "Reaching mastery takes years of practice." },
          { word: "flow state", type: "phrase", definition: "A mental state of complete focus and enjoyment", example: "Painting often puts me in a flow state." },
          { word: "leisure industry", type: "phrase", definition: "Businesses related to free time and entertainment", example: "The leisure industry is worth billions." },
        ],
      },
    ],
  },
  work: {
    A1: [
      {
        category: "Jobs",
        words: [
          { word: "teacher", type: "noun", definition: "Someone who teaches students", example: "My mother is a teacher." },
          { word: "doctor", type: "noun", definition: "Someone who treats sick people", example: "I want to be a doctor." },
          { word: "job", type: "noun", definition: "Work you do for money", example: "I have a new job." },
          { word: "office", type: "noun", definition: "A place where people work at desks", example: "He works in an office." },
          { word: "work", type: "verb", definition: "To do a job", example: "She works at a hospital." },
        ],
      },
    ],
    A2: [
      {
        category: "Work Basics",
        words: [
          { word: "salary", type: "noun", definition: "Money paid for doing a job", example: "Her salary is good." },
          { word: "colleague", type: "noun", definition: "Someone you work with", example: "My colleagues are friendly." },
          { word: "boss", type: "noun", definition: "The person in charge at work", example: "My boss is very strict." },
          { word: "interview", type: "noun", definition: "A meeting to apply for a job", example: "I have a job interview tomorrow." },
          { word: "part-time", type: "adjective", definition: "Working fewer than full hours", example: "She has a part-time job." },
        ],
      },
    ],
    B1: [
      {
        category: "Career Language",
        words: [
          { word: "promotion", type: "noun", definition: "Moving to a higher position at work", example: "She got a promotion last year." },
          { word: "deadline", type: "noun", definition: "The time by which work must be finished", example: "The deadline is Friday." },
          { word: "teamwork", type: "noun", definition: "Working together with others", example: "Teamwork is essential in this job." },
          { word: "apply for", type: "phrase", definition: "To formally ask for a job", example: "I applied for three jobs." },
          { word: "workload", type: "noun", definition: "The amount of work you have", example: "My workload is very heavy this month." },
        ],
      },
    ],
    B2: [
      {
        category: "Professional Skills",
        words: [
          { word: "negotiate", type: "verb", definition: "To discuss terms to reach an agreement", example: "She negotiated a higher salary." },
          { word: "remote working", type: "phrase", definition: "Working from home or outside the office", example: "Remote working has become very common." },
          { word: "entrepreneurship", type: "noun", definition: "Starting and running your own business", example: "Entrepreneurship requires courage and patience." },
          { word: "redundancy", type: "noun", definition: "Losing your job because it no longer exists", example: "He faced redundancy when the company downsized." },
          { word: "work-life balance", type: "phrase", definition: "A healthy division between work and personal time", example: "Work-life balance is important for wellbeing." },
        ],
      },
    ],
    C1: [
      {
        category: "Advanced Work Vocabulary",
        words: [
          { word: "leverage", type: "verb", definition: "To use something to maximum advantage", example: "She leveraged her skills to get a better role." },
          { word: "corporate culture", type: "phrase", definition: "The values and behaviours in a company", example: "Corporate culture affects employee satisfaction." },
          { word: "disengagement", type: "noun", definition: "Lack of motivation or connection at work", example: "Employee disengagement costs companies billions." },
          { word: "meritocracy", type: "noun", definition: "A system where success is based on ability", example: "True meritocracy is rarely achieved." },
          { word: "precarious employment", type: "phrase", definition: "Unstable, insecure work", example: "Gig economy jobs often involve precarious employment." },
        ],
      },
    ],
  },
  environment: {
    A1: [
      {
        category: "Basic Nature Words",
        words: [
          { word: "tree", type: "noun", definition: "A large plant with a trunk and branches", example: "There are many trees in the park." },
          { word: "water", type: "noun", definition: "The liquid we drink and that fills oceans", example: "Clean water is very important." },
          { word: "air", type: "noun", definition: "The mixture of gases we breathe", example: "The air in cities can be dirty." },
          { word: "animal", type: "noun", definition: "A living creature", example: "Many animals are endangered." },
          { word: "rubbish", type: "noun", definition: "Things we throw away", example: "Don't leave rubbish on the beach." },
        ],
      },
    ],
    A2: [
      {
        category: "Environmental Actions",
        words: [
          { word: "recycle", type: "verb", definition: "To process waste to use again", example: "We recycle paper and glass." },
          { word: "pollution", type: "noun", definition: "Harmful substances in the environment", example: "Air pollution is a big problem." },
          { word: "energy", type: "noun", definition: "Power used for heat, light, and machines", example: "Solar energy is clean." },
          { word: "plastic", type: "noun", definition: "A synthetic material that pollutes oceans", example: "Plastic bags harm marine life." },
          { word: "nature", type: "noun", definition: "The natural world including plants and animals", example: "I love spending time in nature." },
        ],
      },
    ],
    B1: [
      {
        category: "Environmental Issues",
        words: [
          { word: "climate change", type: "phrase", definition: "Long-term shifts in global temperatures", example: "Climate change affects everyone." },
          { word: "renewable energy", type: "phrase", definition: "Energy from natural sources that won't run out", example: "Renewable energy includes solar and wind." },
          { word: "carbon footprint", type: "phrase", definition: "The amount of CO2 produced by a person", example: "Flying increases your carbon footprint." },
          { word: "deforestation", type: "noun", definition: "The cutting down of forests", example: "Deforestation destroys wildlife habitats." },
          { word: "endangered", type: "adjective", definition: "At risk of dying out", example: "Tigers are an endangered species." },
        ],
      },
    ],
    B2: [
      {
        category: "Sustainability",
        words: [
          { word: "sustainable", type: "adjective", definition: "Able to continue without damaging the environment", example: "We need sustainable farming methods." },
          { word: "biodiversity", type: "noun", definition: "The variety of life in an ecosystem", example: "Biodiversity is essential for healthy ecosystems." },
          { word: "greenhouse gases", type: "phrase", definition: "Gases that trap heat in the atmosphere", example: "Greenhouse gases cause global warming." },
          { word: "ecosystem", type: "noun", definition: "A community of organisms and their environment", example: "Coral reefs are fragile ecosystems." },
          { word: "emissions", type: "noun", definition: "Gases released into the atmosphere", example: "Countries must reduce carbon emissions." },
        ],
      },
    ],
    C1: [
      {
        category: "Advanced Environmental Language",
        words: [
          { word: "anthropogenic", type: "adjective", definition: "Caused by human activity", example: "Anthropogenic climate change is well-documented." },
          { word: "carbon neutrality", type: "phrase", definition: "Achieving net zero carbon emissions", example: "Many countries aim for carbon neutrality by 2050." },
          { word: "ecological footprint", type: "phrase", definition: "The demand placed on Earth's resources", example: "Our ecological footprint is unsustainable." },
          { word: "geopolitics of energy", type: "phrase", definition: "Political relationships shaped by energy resources", example: "The geopolitics of energy drives conflicts." },
          { word: "rewilding", type: "noun", definition: "Restoring natural ecosystems", example: "Rewilding projects are growing across Europe." },
        ],
      },
    ],
  },
  travel: {
    A1: [
      {
        category: "Travel Basics",
        words: [
          { word: "airport", type: "noun", definition: "A place where planes take off and land", example: "We arrived at the airport early." },
          { word: "hotel", type: "noun", definition: "A place where you pay to stay", example: "The hotel has a swimming pool." },
          { word: "ticket", type: "noun", definition: "A document that lets you travel", example: "I bought a train ticket." },
          { word: "passport", type: "noun", definition: "An official document for international travel", example: "Don't forget your passport." },
          { word: "holiday", type: "noun", definition: "Time away from work or school for travel", example: "We went on holiday to Spain." },
        ],
      },
    ],
    A2: [
      {
        category: "Getting Around",
        words: [
          { word: "check in", type: "phrase", definition: "To register at a hotel or airport", example: "We checked in at 3pm." },
          { word: "book", type: "verb", definition: "To reserve something in advance", example: "I booked a flight online." },
          { word: "luggage", type: "noun", definition: "Bags and suitcases you travel with", example: "My luggage was lost at the airport." },
          { word: "exchange rate", type: "phrase", definition: "The value of one currency against another", example: "Check the exchange rate before you travel." },
          { word: "sightseeing", type: "noun", definition: "Visiting famous places as a tourist", example: "We went sightseeing in Rome." },
        ],
      },
    ],
    B1: [
      {
        category: "Travel Experiences",
        words: [
          { word: "itinerary", type: "noun", definition: "A planned route or journey", example: "Our itinerary includes three cities." },
          { word: "culture shock", type: "phrase", definition: "Feeling confused by an unfamiliar culture", example: "She experienced culture shock in Japan." },
          { word: "off the beaten track", type: "phrase", definition: "Away from tourist areas", example: "We prefer going off the beaten track." },
          { word: "budget travel", type: "phrase", definition: "Travelling as cheaply as possible", example: "Budget travel requires careful planning." },
          { word: "local cuisine", type: "phrase", definition: "The traditional food of a region", example: "Trying local cuisine is my favourite part of travel." },
        ],
      },
    ],
    B2: [
      {
        category: "Travel & Society",
        words: [
          { word: "sustainable tourism", type: "phrase", definition: "Travel that minimises environmental impact", example: "Sustainable tourism protects local ecosystems." },
          { word: "overtourism", type: "noun", definition: "Too many tourists damaging a destination", example: "Overtourism is destroying Venice." },
          { word: "solo travel", type: "phrase", definition: "Travelling alone", example: "Solo travel builds confidence and independence." },
          { word: "volunteer tourism", type: "phrase", definition: "Travelling to do charitable work", example: "Volunteer tourism can help local communities." },
          { word: "jet lag", type: "noun", definition: "Tiredness from crossing time zones", example: "Jet lag affected my first day in New York." },
        ],
      },
    ],
    C1: [
      {
        category: "Advanced Travel Language",
        words: [
          { word: "diaspora", type: "noun", definition: "People living outside their native country", example: "The diaspora maintains strong cultural ties." },
          { word: "nomadic lifestyle", type: "phrase", definition: "Moving from place to place without a fixed home", example: "Digital nomads embrace a nomadic lifestyle." },
          { word: "geotourism", type: "noun", definition: "Tourism that sustains the geography and culture of a place", example: "Geotourism benefits both visitors and communities." },
          { word: "cultural immersion", type: "phrase", definition: "Deeply engaging with a local culture", example: "Cultural immersion is the best way to learn a language." },
          { word: "carbon offsetting", type: "phrase", definition: "Compensating for travel emissions", example: "Many airlines offer carbon offsetting programmes." },
        ],
      },
    ],
  },
  health: {
    A1: [
      {
        category: "Basic Health Words",
        words: [
          { word: "doctor", type: "noun", definition: "A person who treats illness", example: "I went to see a doctor." },
          { word: "hospital", type: "noun", definition: "A place where sick people are treated", example: "He is in hospital." },
          { word: "medicine", type: "noun", definition: "A substance used to treat illness", example: "Take this medicine twice a day." },
          { word: "exercise", type: "noun", definition: "Physical activity to keep healthy", example: "Exercise is good for you." },
          { word: "healthy", type: "adjective", definition: "Good for your body or mind", example: "Eat healthy food." },
        ],
      },
    ],
    A2: [
      {
        category: "Common Health Phrases",
        words: [
          { word: "feel ill", type: "phrase", definition: "To feel sick", example: "I feel ill today." },
          { word: "appointment", type: "noun", definition: "A scheduled time to see a doctor", example: "I have a doctor's appointment." },
          { word: "symptom", type: "noun", definition: "A sign of illness", example: "A sore throat is a common symptom." },
          { word: "diet", type: "noun", definition: "The food and drink you regularly consume", example: "A healthy diet includes vegetables." },
          { word: "sleep", type: "noun", definition: "Rest for your body and mind", example: "Adults need 8 hours of sleep." },
        ],
      },
    ],
    B1: [
      {
        category: "Health & Lifestyle",
        words: [
          { word: "mental health", type: "phrase", definition: "Your emotional and psychological wellbeing", example: "Mental health is as important as physical health." },
          { word: "balanced diet", type: "phrase", definition: "Eating a variety of nutritious foods", example: "A balanced diet prevents many diseases." },
          { word: "sedentary lifestyle", type: "phrase", definition: "A lifestyle with little physical activity", example: "A sedentary lifestyle causes health problems." },
          { word: "immune system", type: "phrase", definition: "The body's defence against illness", example: "Exercise boosts the immune system." },
          { word: "stress", type: "noun", definition: "Mental pressure from difficult situations", example: "Stress can cause headaches." },
        ],
      },
    ],
    B2: [
      {
        category: "Health Systems",
        words: [
          { word: "healthcare", type: "noun", definition: "The system of treating people's health", example: "Good healthcare is a basic human right." },
          { word: "obesity", type: "noun", definition: "Being severely overweight", example: "Obesity is a growing public health issue." },
          { word: "preventive medicine", type: "phrase", definition: "Healthcare focused on preventing illness", example: "Preventive medicine saves money long-term." },
          { word: "wellbeing", type: "noun", definition: "The state of being comfortable and happy", example: "Employee wellbeing should be a priority." },
          { word: "chronic illness", type: "phrase", definition: "A long-term medical condition", example: "Millions live with chronic illness." },
        ],
      },
    ],
    C1: [
      {
        category: "Advanced Health Language",
        words: [
          { word: "epidemiology", type: "noun", definition: "The study of how diseases spread", example: "Epidemiology helped us understand COVID-19." },
          { word: "austerity measures", type: "phrase", definition: "Government cuts that affect public services", example: "Austerity measures damaged public healthcare." },
          { word: "holistic approach", type: "phrase", definition: "Treating the whole person, not just symptoms", example: "A holistic approach improves patient outcomes." },
          { word: "pharmaceutical industry", type: "phrase", definition: "Companies that make medicines", example: "The pharmaceutical industry is highly profitable." },
          { word: "health inequalities", type: "phrase", definition: "Differences in health outcomes across social groups", example: "Health inequalities persist in wealthy nations." },
        ],
      },
    ],
  },
  philosophy: {
    A1: [{ category: "Simple Ideas", words: [
      { word: "think", type: "verb", definition: "To use your mind", example: "I think about big questions." },
      { word: "believe", type: "verb", definition: "To accept something as true", example: "What do you believe?" },
      { word: "idea", type: "noun", definition: "A thought in your mind", example: "That is an interesting idea." },
    ]}],
    A2: [{ category: "Basic Philosophy", words: [
      { word: "opinion", type: "noun", definition: "A personal view or belief", example: "In my opinion, honesty matters." },
      { word: "right and wrong", type: "phrase", definition: "Moral judgements about behaviour", example: "We learn right and wrong as children." },
      { word: "fair", type: "adjective", definition: "Treating people equally", example: "Life is not always fair." },
    ]}],
    B1: [{ category: "Philosophical Concepts", words: [
      { word: "ethics", type: "noun", definition: "The study of what is right and wrong", example: "Medical ethics is very complex." },
      { word: "morality", type: "noun", definition: "Principles about right and wrong behaviour", example: "Morality differs across cultures." },
      { word: "consciousness", type: "noun", definition: "Awareness of yourself and the world", example: "Consciousness is hard to define." },
      { word: "free will", type: "phrase", definition: "The ability to make independent choices", example: "Does free will really exist?" },
    ]}],
    B2: [{ category: "Philosophical Debate", words: [
      { word: "determinism", type: "noun", definition: "The idea that all events are caused by prior causes", example: "Determinism challenges the idea of free will." },
      { word: "subjective", type: "adjective", definition: "Based on personal views, not facts", example: "Beauty is subjective." },
      { word: "objective", type: "adjective", definition: "Based on facts, not personal feelings", example: "Science aims to be objective." },
      { word: "paradox", type: "noun", definition: "A statement that contradicts itself", example: "This sentence is false — a classic paradox." },
    ]}],
    C1: [{ category: "Advanced Philosophy", words: [
      { word: "epistemology", type: "noun", definition: "The study of the nature of knowledge", example: "Epistemology asks how we know what we know." },
      { word: "ontology", type: "noun", definition: "The study of existence and being", example: "Ontology explores what it means to exist." },
      { word: "utilitarianism", type: "noun", definition: "The view that actions are right if they produce happiness", example: "Utilitarianism was developed by John Stuart Mill." },
      { word: "nihilism", type: "noun", definition: "The belief that life has no meaning", example: "Nihilism rejects all moral and religious values." },
      { word: "dialectic", type: "noun", definition: "A method of argument through opposing ideas", example: "Hegel used dialectic in his philosophy." },
    ]}],
  },
  politics: {
    A1: [{ category: "Basic Words", words: [
      { word: "vote", type: "verb", definition: "To choose someone in an election", example: "I will vote in the election." },
      { word: "law", type: "noun", definition: "A rule made by the government", example: "Everyone must follow the law." },
      { word: "country", type: "noun", definition: "A nation with its own government", example: "I love my country." },
    ]}],
    A2: [{ category: "Government Basics", words: [
      { word: "government", type: "noun", definition: "The group that rules a country", example: "The government made a new law." },
      { word: "election", type: "noun", definition: "When people vote to choose leaders", example: "There is an election next month." },
      { word: "president", type: "noun", definition: "The leader of a country", example: "The president gave a speech." },
      { word: "tax", type: "noun", definition: "Money paid to the government", example: "We pay tax on our income." },
    ]}],
    B1: [{ category: "Political Systems", words: [
      { word: "democracy", type: "noun", definition: "A system where people vote for leaders", example: "Democracy gives citizens a voice." },
      { word: "policy", type: "noun", definition: "A plan of action by a government", example: "The new tax policy is controversial." },
      { word: "parliament", type: "noun", definition: "The group of elected politicians who make laws", example: "Parliament voted on the new bill." },
      { word: "opposition", type: "noun", definition: "The party that challenges the government", example: "The opposition criticised the policy." },
      { word: "corruption", type: "noun", definition: "Dishonest behaviour by those in power", example: "Corruption undermines democracy." },
    ]}],
    B2: [{ category: "Political Debate", words: [
      { word: "left-wing", type: "adjective", definition: "Supporting social equality and government intervention", example: "Left-wing parties support higher taxes." },
      { word: "right-wing", type: "adjective", definition: "Supporting tradition and free markets", example: "Right-wing parties favour less regulation." },
      { word: "populism", type: "noun", definition: "Politics appealing to ordinary people against elites", example: "Populism is growing across Europe." },
      { word: "geopolitics", type: "noun", definition: "How geography influences international politics", example: "Geopolitics shapes global trade." },
      { word: "referendum", type: "noun", definition: "A public vote on a single political question", example: "Brexit was decided by a referendum." },
    ]}],
    C1: [{ category: "Advanced Political Language", words: [
      { word: "sovereignty", type: "noun", definition: "The right of a country to govern itself", example: "Brexit was partly about national sovereignty." },
      { word: "authoritarianism", type: "noun", definition: "A system with strong central control and limited freedoms", example: "Authoritarianism threatens civil liberties." },
      { word: "lobbying", type: "noun", definition: "Attempting to influence politicians", example: "Corporate lobbying distorts policy decisions." },
      { word: "civil society", type: "phrase", definition: "Non-government organisations and citizens' groups", example: "Civil society holds governments accountable." },
      { word: "disenfranchisement", type: "noun", definition: "Being deprived of the right to vote", example: "Disenfranchisement undermines democracy." },
    ]}],
  },
  media: {
    A1: [{ category: "Basic Media", words: [
      { word: "news", type: "noun", definition: "Reports about recent events", example: "I watch the news every morning." },
      { word: "newspaper", type: "noun", definition: "A printed publication with news", example: "My grandfather reads a newspaper." },
      { word: "television", type: "noun", definition: "A screen that shows programmes", example: "I watch television in the evening." },
    ]}],
    A2: [{ category: "Media Types", words: [
      { word: "social media", type: "phrase", definition: "Online platforms for sharing content", example: "I use social media to stay in touch." },
      { word: "advertisement", type: "noun", definition: "A paid message promoting a product", example: "There are too many advertisements on TV." },
      { word: "journalist", type: "noun", definition: "Someone who reports the news", example: "She is a journalist for a newspaper." },
    ]}],
    B1: [{ category: "Media Language", words: [
      { word: "fake news", type: "phrase", definition: "False stories presented as real news", example: "Fake news spreads quickly online." },
      { word: "bias", type: "noun", definition: "A tendency to favour one view unfairly", example: "Some news sources show political bias." },
      { word: "censorship", type: "noun", definition: "Official control of what can be published", example: "Censorship limits freedom of speech." },
      { word: "press freedom", type: "phrase", definition: "The right of journalists to report freely", example: "Press freedom is vital in a democracy." },
    ]}],
    B2: [{ category: "Media & Society", words: [
      { word: "echo chamber", type: "phrase", definition: "An environment where only similar views are heard", example: "Social media creates echo chambers." },
      { word: "media literacy", type: "phrase", definition: "The ability to critically analyse media", example: "Schools should teach media literacy." },
      { word: "propaganda", type: "noun", definition: "Biased information used to promote a cause", example: "Governments use propaganda during wartime." },
      { word: "clickbait", type: "noun", definition: "Misleading headlines designed to get clicks", example: "Clickbait reduces the quality of journalism." },
    ]}],
    C1: [{ category: "Advanced Media Language", words: [
      { word: "fourth estate", type: "phrase", definition: "The press as a check on power", example: "The fourth estate is essential in democracy." },
      { word: "media consolidation", type: "phrase", definition: "A small number of companies owning most media", example: "Media consolidation threatens diversity of views." },
      { word: "post-truth", type: "adjective", definition: "A climate where emotion beats facts in debate", example: "We live in a post-truth political era." },
      { word: "algorithmic curation", type: "phrase", definition: "Content selected by computer algorithms", example: "Algorithmic curation shapes what we believe." },
      { word: "infodemic", type: "noun", definition: "A rapid spread of both true and false information", example: "The pandemic caused a global infodemic." },
    ]}],
  },
  education: {
    A1: [{ category: "School Words", words: [
      { word: "school", type: "noun", definition: "A place where children learn", example: "I go to school at 8am." },
      { word: "teacher", type: "noun", definition: "A person who helps students learn", example: "My teacher is very kind." },
      { word: "learn", type: "verb", definition: "To gain knowledge or skill", example: "I learn English every day." },
      { word: "study", type: "verb", definition: "To spend time learning something", example: "I study in the evenings." },
    ]}],
    A2: [{ category: "Education Basics", words: [
      { word: "subject", type: "noun", definition: "An area of study at school", example: "My favourite subject is maths." },
      { word: "exam", type: "noun", definition: "A formal test of knowledge", example: "I have an exam on Friday." },
      { word: "grade", type: "noun", definition: "A mark given for school work", example: "I got a good grade." },
      { word: "university", type: "noun", definition: "A place of higher education", example: "She studies at university." },
    ]}],
    B1: [{ category: "Learning & Development", words: [
      { word: "curriculum", type: "noun", definition: "The subjects taught in a school", example: "The curriculum includes science and history." },
      { word: "scholarship", type: "noun", definition: "Money given to support a student", example: "She won a scholarship to study abroad." },
      { word: "tuition", type: "noun", definition: "Teaching, or the cost of studying", example: "University tuition fees are very high." },
      { word: "lifelong learning", type: "phrase", definition: "Continuing to learn throughout your life", example: "Lifelong learning keeps the mind sharp." },
    ]}],
    B2: [{ category: "Education Systems", words: [
      { word: "higher education", type: "phrase", definition: "Education at university level", example: "Higher education improves job prospects." },
      { word: "vocational training", type: "phrase", definition: "Training for a specific job or skill", example: "Vocational training is often overlooked." },
      { word: "academic pressure", type: "phrase", definition: "Stress from school or university demands", example: "Academic pressure affects students' wellbeing." },
      { word: "digital literacy", type: "phrase", definition: "The ability to use digital technology effectively", example: "Digital literacy is essential in today's world." },
    ]}],
    C1: [{ category: "Advanced Education Language", words: [
      { word: "pedagogy", type: "noun", definition: "The theory and practice of teaching", example: "Good pedagogy adapts to students' needs." },
      { word: "standardised testing", type: "phrase", definition: "Uniform tests taken by all students", example: "Standardised testing is highly controversial." },
      { word: "critical thinking", type: "phrase", definition: "Analysing information objectively", example: "Universities should foster critical thinking." },
      { word: "neoliberal education", type: "phrase", definition: "Market-driven approaches to education", example: "Critics oppose neoliberal education policies." },
    ]}],
  },
  society: {
    A1: [{ category: "People & Community", words: [
      { word: "people", type: "noun", definition: "Human beings in general", example: "There are many people in the city." },
      { word: "family", type: "noun", definition: "A group of related people", example: "Family is very important to me." },
      { word: "community", type: "noun", definition: "A group of people in the same place", example: "I love my local community." },
    ]}],
    A2: [{ category: "Social Life", words: [
      { word: "culture", type: "noun", definition: "The customs and beliefs of a group", example: "Every culture is unique." },
      { word: "tradition", type: "noun", definition: "A custom passed down through generations", example: "Christmas is an important tradition." },
      { word: "neighbour", type: "noun", definition: "Someone who lives near you", example: "My neighbours are very friendly." },
    ]}],
    B1: [{ category: "Social Issues", words: [
      { word: "inequality", type: "noun", definition: "Unfair differences between people", example: "Social inequality is a major problem." },
      { word: "discrimination", type: "noun", definition: "Unfair treatment of people", example: "Discrimination based on race is illegal." },
      { word: "integration", type: "noun", definition: "Including people of all backgrounds", example: "Social integration takes time." },
      { word: "diversity", type: "noun", definition: "A range of different people and backgrounds", example: "Diversity makes society stronger." },
    ]}],
    B2: [{ category: "Modern Society", words: [
      { word: "social mobility", type: "phrase", definition: "The ability to move up or down in society", example: "Social mobility has decreased in many countries." },
      { word: "gentrification", type: "noun", definition: "Wealthy people moving into poorer areas", example: "Gentrification is changing city centres." },
      { word: "consumerism", type: "noun", definition: "A focus on buying and owning goods", example: "Consumerism drives environmental damage." },
      { word: "urbanisation", type: "noun", definition: "The movement of people to cities", example: "Rapid urbanisation creates housing problems." },
    ]}],
    C1: [{ category: "Advanced Social Language", words: [
      { word: "social stratification", type: "phrase", definition: "The division of society into levels", example: "Social stratification limits opportunity." },
      { word: "systemic racism", type: "phrase", definition: "Racism built into institutions and systems", example: "Systemic racism requires structural solutions." },
      { word: "postmodernism", type: "noun", definition: "A movement questioning absolute truths and structures", example: "Postmodernism challenges traditional values." },
      { word: "civil liberties", type: "phrase", definition: "Basic rights and freedoms of citizens", example: "Governments must protect civil liberties." },
    ]}],
  },
  shopping: {
    A1: [{ category: "Shopping Basics", words: [
      { word: "shop", type: "noun", definition: "A place where you buy things", example: "I went to the shop." },
      { word: "buy", type: "verb", definition: "To get something by paying for it", example: "I want to buy new shoes." },
      { word: "price", type: "noun", definition: "How much something costs", example: "What is the price?" },
      { word: "money", type: "noun", definition: "What you use to pay for things", example: "I don't have enough money." },
    ]}],
    A2: [{ category: "Shopping Phrases", words: [
      { word: "try on", type: "phrase", definition: "To put on clothes to see if they fit", example: "Can I try on this jacket?" },
      { word: "receipt", type: "noun", definition: "A paper showing what you bought", example: "Keep your receipt for returns." },
      { word: "sale", type: "noun", definition: "When things are sold at reduced prices", example: "Everything is on sale this week." },
      { word: "refund", type: "noun", definition: "Money returned when you return an item", example: "I asked for a refund." },
    ]}],
    B1: [{ category: "Consumer Behaviour", words: [
      { word: "brand", type: "noun", definition: "A company's name and image", example: "She only buys luxury brands." },
      { word: "impulse buy", type: "phrase", definition: "Buying something without planning to", example: "That was an impulse buy I regret." },
      { word: "consumer", type: "noun", definition: "A person who buys goods or services", example: "Consumers have more choice than ever." },
      { word: "budget", type: "noun", definition: "A plan for spending money", example: "I try to stick to my budget." },
    ]}],
    B2: [{ category: "Shopping & Society", words: [
      { word: "ethical shopping", type: "phrase", definition: "Buying products that are made responsibly", example: "Ethical shopping supports fair trade." },
      { word: "fast fashion", type: "phrase", definition: "Cheap clothing produced quickly and unsustainably", example: "Fast fashion harms the environment." },
      { word: "e-commerce", type: "noun", definition: "Buying and selling online", example: "E-commerce grew rapidly during the pandemic." },
      { word: "conspicuous consumption", type: "phrase", definition: "Buying to display wealth or status", example: "Conspicuous consumption is critiqued by economists." },
    ]}],
    C1: [{ category: "Advanced Shopping Language", words: [
      { word: "planned obsolescence", type: "phrase", definition: "Designing products to become outdated quickly", example: "Planned obsolescence increases consumer spending." },
      { word: "supply chain", type: "phrase", definition: "The network of producing and delivering goods", example: "The pandemic disrupted global supply chains." },
      { word: "greenwashing", type: "noun", definition: "Falsely claiming products are eco-friendly", example: "Many brands are accused of greenwashing." },
    ]}],
  },
  daily: {
    A1: [{ category: "Daily Life", words: [
      { word: "wake up", type: "phrase", definition: "To stop sleeping", example: "I wake up at 7am." },
      { word: "breakfast", type: "noun", definition: "The first meal of the day", example: "I eat breakfast at home." },
      { word: "work", type: "verb", definition: "To do a job", example: "I work from 9 to 5." },
      { word: "sleep", type: "verb", definition: "To rest your body at night", example: "I sleep for 8 hours." },
    ]}],
    A2: [{ category: "Daily Routine", words: [
      { word: "get dressed", type: "phrase", definition: "To put on clothes", example: "I get dressed after breakfast." },
      { word: "commute", type: "verb", definition: "To travel to work regularly", example: "I commute by train." },
      { word: "routine", type: "noun", definition: "A regular set of habits", example: "I have a strict morning routine." },
      { word: "chores", type: "noun", definition: "Regular household tasks", example: "I do chores on Sundays." },
    ]}],
    B1: [{ category: "Lifestyle", words: [
      { word: "productive", type: "adjective", definition: "Getting a lot done effectively", example: "I feel most productive in the morning." },
      { word: "habit", type: "noun", definition: "Something you do regularly without thinking", example: "Exercise is a healthy habit." },
      { word: "time management", type: "phrase", definition: "Using your time effectively", example: "Good time management reduces stress." },
      { word: "leisure", type: "noun", definition: "Free time for enjoyment", example: "I have little leisure time during the week." },
    ]}],
    B2: [{ category: "Work & Life", words: [
      { word: "work-life balance", type: "phrase", definition: "Dividing time well between work and personal life", example: "I struggle with work-life balance." },
      { word: "multitasking", type: "noun", definition: "Doing several things at once", example: "Multitasking reduces focus and quality." },
      { word: "mindfulness", type: "noun", definition: "Focusing on the present moment", example: "Mindfulness reduces stress." },
    ]}],
    C1: [{ category: "Advanced Lifestyle Language", words: [
      { word: "circadian rhythm", type: "phrase", definition: "The body's natural 24-hour cycle", example: "Screens disrupt your circadian rhythm." },
      { word: "dopamine detox", type: "phrase", definition: "Reducing stimulating activities to reset motivation", example: "A dopamine detox can improve focus." },
      { word: "cognitive load", type: "phrase", definition: "The mental effort used in working memory", example: "Too many tasks increase cognitive load." },
    ]}],
  },
  food: {
    A1: [{ category: "Food Words", words: [
      { word: "bread", type: "noun", definition: "A baked food made from flour", example: "I eat bread for breakfast." },
      { word: "fruit", type: "noun", definition: "Sweet food that grows on trees or plants", example: "I eat fruit every day." },
      { word: "vegetable", type: "noun", definition: "A plant used as food", example: "I like vegetables." },
      { word: "meat", type: "noun", definition: "Food from animals", example: "I don't eat much meat." },
      { word: "drink", type: "verb", definition: "To take liquid into your mouth", example: "I drink water all day." },
    ]}],
    A2: [{ category: "Eating & Cooking", words: [
      { word: "recipe", type: "noun", definition: "Instructions for making a dish", example: "I found a great recipe online." },
      { word: "ingredient", type: "noun", definition: "Something used in cooking a dish", example: "The main ingredient is garlic." },
      { word: "delicious", type: "adjective", definition: "Tasting very good", example: "This soup is delicious." },
      { word: "vegetarian", type: "adjective", definition: "Not containing meat", example: "I prefer vegetarian food." },
    ]}],
    B1: [{ category: "Food Culture", words: [
      { word: "cuisine", type: "noun", definition: "The style of cooking from a country", example: "Italian cuisine is world-famous." },
      { word: "organic", type: "adjective", definition: "Grown without chemicals", example: "I buy organic vegetables." },
      { word: "portion", type: "noun", definition: "The amount of food served", example: "The portions here are very large." },
      { word: "processed food", type: "phrase", definition: "Food altered from its natural state", example: "Processed food is often unhealthy." },
    ]}],
    B2: [{ category: "Food & Society", words: [
      { word: "food security", type: "phrase", definition: "Having reliable access to nutritious food", example: "Food security is a global challenge." },
      { word: "food waste", type: "phrase", definition: "Food that is thrown away unnecessarily", example: "Food waste contributes to climate change." },
      { word: "vegan", type: "adjective", definition: "Containing no animal products", example: "A vegan diet avoids meat and dairy." },
      { word: "gastronomy", type: "noun", definition: "The art and science of good eating", example: "France is famous for its gastronomy." },
    ]}],
    C1: [{ category: "Advanced Food Language", words: [
      { word: "food sovereignty", type: "phrase", definition: "The right of people to define their own food systems", example: "Food sovereignty empowers local farmers." },
      { word: "agrarian economy", type: "phrase", definition: "An economy based on farming", example: "Many developing countries have agrarian economies." },
      { word: "umami", type: "noun", definition: "A savoury taste considered the fifth basic taste", example: "Mushrooms and soy sauce have strong umami flavour." },
    ]}],
  },
};