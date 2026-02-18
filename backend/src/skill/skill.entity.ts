import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('skills')
export class SkillEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name:'title', type:'varchar', nullable: true })
    title!: string;

    @Column({ name:'type', type:'varchar', nullable: true })
    type!: string;

    @Column({ name:'html', type:'varchar', nullable: true })
    html!: string;

    @Column({ name:'level'  })
    level!: number;

    @Column({name:'is_active', default: true })
    is_active!: boolean;

    @Column({ name:'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: Date;

    @Column({ name:'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at!: Date;
}
