import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('experience')
export class ExperienceEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'text', nullable: true })
    position!: string;

    @Column({ type: 'varchar', nullable: true })
    company!: string;

    @Column({ type: 'text', nullable: true })
    underline!: JSON;

    @Column({ type: 'text', nullable: true })
    date!: JSON;

    @Column({ type: 'text', nullable: true })
    description!: JSON;
    @Column({ type: 'text', nullable: true })
    description_json!: JSON

    @Column({ type: 'boolean', default: true })
    is_active!: boolean;

    // @Column({ name:'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    // created_at!: Date;

    // @Column({
    //     name:'updated_at',
    //     type: 'timestamp',
    //     default: () => 'CURRENT_TIMESTAMP',
    //     onUpdate: 'CURRENT_TIMESTAMP'
    // })
    // updated_at!: Date;


    @CreateDateColumn({ name: 'created_at' })
    created_at!: Date;

    @UpdateDateColumn({ name: 'updated_at', update: true, onUpdate: 'now()' })
    updated_at!: Date;

}
