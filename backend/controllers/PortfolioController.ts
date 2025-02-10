import type { Request, Response } from "express"
type itemType = {
    title: string;
    image: string;
    url: string;
    hashtag: string[];
}

const Items:itemType[] = [
    {title:"at-once.info",image:"/image/portfolio/at-once.info.png",url:"https://at-once.info",hashtag:["PHP","Laravel","Bootstrap","MySQL","JavaScript","jQuery"]},
    {title:"jobs-labo.com",image:"",url:"https://jobs-labo.com",hashtag:["PHP","Laravel","Bootstrap","MySQL","JavaScript","jQuery"]},
    {title:"rent.co.th",image:"/image/portfolio/rent.png",url:"https://rent.co.th",hashtag:["React.js","Next.js","Tailwind CSS","Node.js","Express.Js","MongoDB"]},
    {title:"abilmente",image:"/image/portfolio/abilmente.com.png",url:"https://www.abilmente.com",hashtag:["PHP","Laravel","Bootstrap","JavaScript","MySQL"]},
    {title:"thaiprint.com",image:"/image/portfolio/thai-print.png",url:"https://thaiprint.in.th",hashtag:["PHP","Laravel","Bootstrap","JavaScript","MySQL"]},
    {title:"ymctranslation.com",image:"/image/portfolio/ymc-translation.png",url:"https://ymctranslation.com",hashtag:["Node.js","Express.Js","MongoDB","React.Js","Next.Js","Tailwind CSS","#Swiper"]},
    {title:"th-hh-express",image:"/image/portfolio/hh-express.png",url:"https://th-hh-express.oncewebdesign.com",hashtag:["Node.js","Express.Js","MongoDB","React.Js","Next.Js","Tailwind CSS"]},
    {title:"Speed Move",image:"/image/portfolio/Screenshot 2025-01-25 183620.png",url:"https://xn--12cbgmf3hf0eafgd0k0bkj2g0h9fna.net",hashtag:["Node.js","Express.Js","MongoDB","React.Js","Next.Js","Tailwind CSS"]},
    {title:"th.nissin-asia.com",image:"/image/portfolio/th-nissin-asia.png",url:"https://www.th.nissin-asia.com",hashtag:["Node.js","Express.Js","MongoDB","React.Js","Next.Js","Tailwind CSS"]},
    {title:"blue-asistance",image:"/image/portfolio/blue-assistance.png",url:"",hashtag:["Node.js","Express.Js","MongoDB","React.Js","Next.Js","Tailwind CSS","#Swiper"]},
    {title:"nankai.co.th",image:"/image/portfolio/nankai.png",url:"https://nankai.co.th/",hashtag:["Laravel","Bootstrap","MySQL","JavaScript","jQuery"]},
];

export const getPortfolio = (req:Request, res: Response) => {
    const { keyword } = req.query;
    const searchKeyword = typeof keyword === "string" ? keyword.trim().toLowerCase() : "";
    if(!searchKeyword) {
        res.status(200).json({success:true, data:Items});
    }
    const filtered = Items.filter((item)=>
        item.title.toLowerCase().includes(searchKeyword) ||
        (item.hashtag && item.hashtag.some((tag) => tag.toLowerCase().includes(searchKeyword)))
    );
    res.status(200).json({success:true, data:filtered});

};