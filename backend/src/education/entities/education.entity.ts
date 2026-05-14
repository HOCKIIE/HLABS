import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

type LocaleText = {
    th: string;
    en: string;
};

@Entity('education')
export class EducationEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type:'jsonb', nullable: true })
    institution!: LocaleText;

    @Column({ type:'jsonb', nullable: true })
    major!: LocaleText;

    @Column({ type:'jsonb', nullable: true })
    degree!: LocaleText;

    @Column({ type:'jsonb', nullable: true })
    faculty!: LocaleText;

    @Column({ type: "text", nullable: true })
    date!: string;

    @Column({ type: 'boolean', default: false })
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
