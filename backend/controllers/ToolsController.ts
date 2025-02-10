import type {Request, Response} from "express"

type itemType = { title:string; type:string;
};

const ToolItems:itemType[] = [
    {title:"VS Code",type:"vsCode"},
    {title:"Sublime",type:"sublime"},
    {title:"GitHub",type:"gitHub"},
    {title:"Source Tree",type:"sourceTree"},
    {title:"XAMPP",type:"xampp"},
    {title:"FileZilla",type:"fileZilla"},
    {title:"Postman",type:"postman"},
    {title:"ClickUp",type:"clickUp"}
];
export const getTools = (req: Request, res: Response) => {
    const {keyword} = req.query;
    const searchKeyword = typeof keyword === "string" ? keyword.trim().toLowerCase() : "" ;
    if(!searchKeyword) res.status(200).json({success:true,data:ToolItems});
    const filteredTool = ToolItems.filter((item)=>item.title.trim().toLowerCase().includes(searchKeyword));
    res.status(200).json({success:true,data:filteredTool});
}