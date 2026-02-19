import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('skills')
export class SkillEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type:'text', nullable: true })
    title!: string;

    @Column({ type:'varchar', nullable: true })
    type!: string;

    @Column({ type:'text', nullable: true })
    display!: string;

    @Column({ type:'text', nullable: true })
    html!: string;

    @Column({ type: 'int', default: 0 })
    level!: number;

    @Column({ type: 'boolean', default: false })
    icon!: boolean;

    @Column({ type: 'boolean', default: true })
    is_active!: boolean;

    @Column({ name:'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at!: Date;

    @Column({
        name:'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP'
    })
    updated_at!: Date;
}
