import type {Request, Response} from "express";
type itemType = {
    date:string;
    qualification:string;
    qualificationHTML:string;
    institution:string;
    institutionHTML:string;
}

const EducationItem:itemType[] = [
{
    date:"2012 - 2014",
    qualification:"Bachelor of Business Administration",
    qualificationHTML:"Bachelor of Business<br className=\"md:hidden\"/> Administration",
    institution:"Business Computer, Chiang Mai Rajabhat University",
    institutionHTML:"Business Computer, Chiang Mai<br/> Rajabhat University"
},
{
    date:"2011 - 2013",
    qualification:"High Vocational Certificate",
    qualificationHTML:"High Vocational Certificate",
    institution:"Business Computer, Nan Technical College",
    institutionHTML:"Business Computer,<br className=\"md:hidden\"/> Nan Technical College"
},{
    date:"2009 - 2011",
    qualificationHTML:"Vocational Certificate",
    qualification:"Vocational Certificate",
    institution:"Business Computer,Nan Technical College",
    institutionHTML:"Business Computer,<br className=\"md:hidden\"/> Nan Technical College"
}];

export const getEducation = (req:Request, res:Response) => {
    const {keyword} = req.query;
    const searchKeyword = typeof keyword === "string" ? keyword.trim().toLowerCase() : "";
    if(!searchKeyword) res.status(200).json({success:true, data:EducationItem});
    const filteredEducation = EducationItem.filter((item) => {
        return item.date.trim().toLowerCase().includes(searchKeyword) ||
        item.qualification.trim().toLowerCase().includes(searchKeyword) ||
        item.institution.trim().toLowerCase().includes(searchKeyword);
    });
    console.log(searchKeyword)
    res.status(200).json({success:true,data:filteredEducation})
}