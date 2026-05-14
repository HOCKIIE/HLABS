import { Test } from '@nestjs/testing';
import { SkillController } from './skill.controller';

describe('SkillController', () => {
    let controller: SkillController;
    let skillService: any;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
        controllers: [SkillController],
        providers: [
            {
            provide: 'SkillService', // ⚠️ ต้องตรงกับที่ inject
            useValue: {
                findAll: jest.fn(),
            },
            },
        ],
        }).compile();

        controller = module.get(SkillController);
        skillService = module.get('SkillService');
    });

    // ✅ case 1: มี res
    it('should set header and return json when res exists', async () => {
        const res = {
        setHeader: jest.fn(),
        json: jest.fn(),
        };

        skillService.findAll.mockResolvedValue(['skill1']);

        await controller.findAll(true, res as any);

        expect(res.setHeader).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith(['skill1']);
    });

    // ✅ case 2: ไม่มี res
    it('should return data when no res', async () => {
        skillService.findAll.mockResolvedValue(['skill1']);

        const result = await controller.findAll(true, null as any);

        expect(result).toEqual(['skill1']);
    });

    // ✅ case 3: error
    it('should throw error when service fails', async () => {
        skillService.findAll.mockRejectedValue(new Error('fail'));

        await expect(
            controller.findAll(true, null as any)
        ).rejects.toThrow('fail');
    });
});