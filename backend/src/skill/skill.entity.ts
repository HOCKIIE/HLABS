import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SkillEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  type!: string;

  @Column()
  text!: string;

  @Column()
  html!: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;
}
