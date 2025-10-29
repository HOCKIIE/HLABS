import express from "express";
import { MockData } from "../controllers/MockDataController";
import { getExperience } from "../controllers/ExperienceController"
import { getPortfolio } from "../controllers/PortfolioController";
import { getSkill } from "../controllers/SkillController";
import { getEducation } from "../controllers/EducationController";
import { getTools } from "../controllers/ToolsController";

const router = express.Router();

router.get('/mock', MockData);
router.get('/experience', getExperience);
router.get('/education', getEducation);
router.get('/portfolio', getPortfolio);
router.get('/skill', getSkill);
router.get('/tool', getTools);

export default router;