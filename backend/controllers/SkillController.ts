import type { Request, Response } from "express"
type itemType = {
    title: string; type: string; icon: boolean;
}
const Items:itemType[] = [
    {title:"Microsoft Visio",type:"visio",icon:false},
    {title:"Postman API Platform",type:"postman",icon:false},
    {title:"HTML5",type:"html5",icon:true},
    {title:"CSS3",type:"css3",icon:true},
    {title:"SASS",type:"sass",icon:true},
    {title:"Bootstrap",type:"bootstrap",icon:true},
    {title:"Tailwind CSS",type:"tailwindCss",icon:true},
    {title:"Material UI",type:"mui",icon:true},
    {title:"MySQL",type:"mysql",icon:true},
    {title:"PHP",type:"php",icon:true},
    {title:"Codeigniter",type:"codeigniter",icon:true},
    {title:"Laravel",type:"laravel",icon:true},
    {title:"jQuery",type:"jquery",icon:true},
    {title:"phpMyAdmin",type:"phpMyAdmin",icon:true},
    {title:"MongoDB",type:"mongoDb",icon:true},
    {title:"Front End Framework",type:"frontendFramework",icon:false},
    {title:"Back End Framework",type:"backendFramework",icon:false},
    {title:"NodeJS",type:"nodeJs",icon:true},
    {title:"ExpressJS",type:"expressJs",icon:true},
    {title:"ReactJS",type:"reactJs",icon:true},
    {title:"NextJS",type:"nextJs",icon:true},
    {title:"JavaScript",type:"javaScript",icon:true},
    {title:"TypeScript",type:"typeScript",icon:true},
    {title:"CI/CD",type:"cicd",icon:false},
    {title:"Github",type:"github",icon:false},
    {title:"Rest API",type:"restApi",icon:false},
    {title:"Debugging",type:"debugging",icon:false}
];
export const getSkill = (req:Request, res: Response) => {
    const {keyword} = req.query;
    const searchKeyword = typeof keyword === "string" ? keyword.trim().toLowerCase() : "" ;
    if (!searchKeyword) res.status(200).json({success:true, data:Items});
    const filtered = Items.filter((item) => item.title.toLowerCase().includes(searchKeyword));
    res.status(200).json({success:true, data:filtered});
}