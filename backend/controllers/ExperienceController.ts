import type { Request, Response } from "express"
import Experience from "../models/Experience";
import config from "../config/app";

type typo = {
    date: string;
    position: string;
    company: string;
    underline: string;
    description: {
        text: string;
        html: string[];
        list: string[]
    };
};
const ExprienceData:typo[] = [
    {
        date: "February 2025 - July 2025",
        position: "Software Engineer",
        company: "Nityo Infotech",
        underline: "chonky-underline-blue",
        description: {
            text: "",
            html: [
                "- Salesforce (CRM)",
                "- Heroku",
                "- Node.js/NestJs: For building API Gateway for salesforce integrations",
                "- Postman/Insomnia: Testing APIs",
                "- Version Control: Git (Github)",
                "- HTML, CSS, Javascript",
                "- LWC Inspector (Chrome Extension)",
                "- Salesforce DevOp Tools: Copado",
                "- Experience with software development life circle methodologies Agile: SCRUM",
            ],
            list: [
                "Salesforce (CRM)",
                "Heroku",
                "Node.js/NestJs: For building API Gateway for salesforce integrations",
                "Postman/Insomnia: Testing APIs",
                "Version Control: Git (Github)",
                "HTML, CSS, Javascript",
                "LWC Inspector (Chrome Extension)",
                "Salesforce DevOp Tools: Copado",
                "Experience with software development life circle methodologies Agile: SCRUM",
            ]
        }
    },
    {
        date: "April 2022 - December 2024",
        position: "Full Stack Developer",
        company: "1-CE Wind Co., Ltd.",
        underline: "chonky-underline-blue",
        description: {
            text: "",
            html: [
                "- Build, develop the website according follow requirement of the organization",
                "- Design and analysis of then company website system",
                "- Collaborate with UX/UI Designer team",
                "- <strong>For Customer</strong> Develop the website according from requirement and template.",
                "- Build, develop Frontend and Backend website with Laravel framework v8.x",
                "- Build, develop UX/UI with Bootstrap v5, Tailwind CSS, Ant",
                "- Build, develop Frontend website with React.js + Next.js (TypeScript, JavaScript)",
                "- Build, develop Backend website with Node.js + Express.js + MongoDB",
                "- Use GitHub for version control",
                "- Use ClickUp, Trello for productivity tool",
                "- Create and develop text editor that can generate HTML based on Tailwind CSS formatting to support another of devices",
                "- Install operating system software, applications, computer hardware and network devices, and customize settings to ensure the system works appropriately to the organization's specific needs."
            ],
            list: [
                "Build, develop the website according follow requirement of the organization",
                "Design and analysis of then company website system",
                "Collaborate with UX/UI Designer team",
                "For Customer Develop the website according from requirement and template.",
                "Build, develop Frontend and Backend website with Laravel framework v8.x",
                "Build, develop UX/UI with Bootstrap v5, Tailwind CSS, Ant",
                "Build, develop Frontend website with React.js + Next.js (TypeScript, JavaScript)",
                "Build, develop Backend website with Node.js + Express.js + MongoDB",
                "Use GitHub for version control",
                "Use ClickUp, Trello for productivity tool",
                "Create and develop text editor that can generate HTML based on Tailwind CSS formatting to support another of devices",
                "Install operating system software, applications, computer hardware and network devices, and customize settings to ensure the system works appropriately to the organization's specific needs."
            ]
        }
    },
    {
        date: "March 2020 - March 2022",
        position: "Full Stack Developer",
        company: "Jobs Labo Recruitment Co., Ltd.",
        underline: "chonky-underline-indigo",
        description: {
            text: "",
            html: [
                "- Design and analysis of then company website system",
                "- Design the database structure",
                "- Develop the website according follow requirement of the organization",
                "- <strong>Company Side</strong> (the company want to hire candidate) search for applicants, invite job interview on the website. Candidate Side (Candidate want to find a job) job search, accept/reject job interview invitation.",
                "- <strong>Develop website at-once.info</strong> website that collects business in Thailand . Division by category to trade between business and business together with the purpose of meeting business needs (B2B)",
                "- Develop Frontend and Backend website with Laravel framework v7.x and upgrade to v8.x",
                "- Develop UI with Bootstrap v4",
                "- Using jQuery, Ajax as a website development tooling",
                "- Change jQuery to javascriptv and use Axios instead of Ajax",
                "- Create and develop charts to summarize website traffic data and other contents with Highcharts - interactive javascript charts library",
                "- Create and develop text editor that can generate HTML based on bootstrap formatting to support another of devices",
                "- Learning of the JS Framework for develop Frontend better and more efficient"
            ],
            list: [
                "Design and analysis of then company website system",
                "Design the database structure",
                "Develop the website according follow requirement of the organization",
                "Company Side (the company want to hire candidate) search for applicants, invite job interview on the website. Candidate Side (Candidate want to find a job) job search, accept/reject job interview invitation.",
                "Develop website at-once.info website that collects business in Thailand . Division by category to trade between business and business together with the purpose of meeting business needs (B2B)",
                "Develop Frontend and Backend website with Laravel framework v7.x and upgrade to v8.x",
                "Develop UI with Bootstrap v4",
                "Using jQuery, Ajax as a website development tooling",
                "Change jQuery to javascriptv and use Axios instead of Ajax",
                "Create and develop charts to summarize website traffic data and other contents with Highcharts - interactive javascript charts library",
                "Create and develop text editor that can generate HTML based on bootstrap formatting to support another of devices",
                "Learning of the JS Framework for develop Frontend better and more efficient"
            ]
        }
    },
    {
        date: "August 2017 - February 2020",
        position: "Developer",
        company: "Channel Wide Computer Co., Ltd.",
        underline: "chonky-underline-megenta",
        description: {
            text: "",
            html: [
                "- Design the database structure",
                "- Design and analysis system",
                "- Create and develop web applications",
                "- Develop by PHP language and writing in a framework style (Codeigniter, Laravel)",
                "- Use jQuery",
                "- Develop UX/UI to provide better experience for user",
                "- Develop a profile website",
                "- Develop E-Commerce website",
                "- Develop the website according follow requirement of the organization",
                "- Create credit card payment system with KBANK payment gatway",
                "- Writing HTML to support seo",
                "- Create login function with Facebook, Gmail",
                "- Changed from codeigniter v3 to Laravel v5.x and developt to v7.x"
            ],
            list: [
                "Design the database structure",
                "Design and analysis system",
                "Create and develop web applications",
                "Develop by PHP language and writing in a framework style (Codeigniter, Laravel)",
                "Develop UX/UI to provide better experience for user",
                "Develop a profile website",
                "Develop E-Commerce website",
                "Develop the website according follow requirement of the organization",
                "Create credit card payment system with KBANK payment gatway",
                "Writing HTML to support seo",
                "Create login function with Facebook, Gmail",
                "Changed from codeigniter v3 to Laravel v5.x and developt to v7.x"
            ]
        }
    }
];
// console.log('exprience controller is loaded');
export const getExperience = (req: Request, res: Response) => {
    const { keyword } = req.query;
    const searchKeyword = typeof keyword === "string" ? keyword.trim().toLowerCase() : "";
    if (!searchKeyword) {
        res.status(200).json({ success: true, data: ExprienceData });
    }
    const filteredExp = ExprienceData.filter((item) => 
        item.position.toLowerCase().includes(searchKeyword) ||
        item.company.toLowerCase().includes(searchKeyword) ||
        (item.description.list && item.description.list.some((tag) => tag.toLowerCase().includes(searchKeyword)))
    );
    res.status(200).json({success:true, data:filteredExp});
};

// export const onGet = (req: Request, res: Response) => {
//     try{
//         const limit = +(req.query.size || config.pageLimit);
//         const offset = +(limit * ((Number(req.query.page) || 1) - 1));
//         const rows = await Experience.find({ status: true })
//                 .sort({ sort: "asc" })
//                 .limit(limit)
//                 .skip(offset);
//             const count = await Experience.countDocuments({ status: true });
//             return {
//                 total: count,
//                 lastPage: Math.ceil(count / limit),
//                 currPage: +req.query.page || 1,
//                 rows: rows,
//             };
//     }
//     catch(error){
//         res.error(error)
//     }
// }