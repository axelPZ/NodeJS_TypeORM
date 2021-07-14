import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export type UseRoleType = "ADMIN_ROLE" | "USER_ROLE" | "VENTAS_ROLE";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;


    @Column( "varchar", { length: 50 } )
    firstName: string;


    @Column( { 
        type: "varchar", 
        length: 50, 
        nullable: true 
    })
    lastName: string;

    @Column( { 
        type: "varchar", 
        length: 50, 
        nullable: true 
    })
    surName: string;


    @Column( { 
        type: "int", 
        width: 3,
        nullable: true
     })
    age: number;


    @Column({
        type: "enum",
        enum: [ "ADMIN_ROLE", "USER_ROLE", "VENTAS_ROLE" ],
        default: "USER_ROLE"
    })
    role: UseRoleType


    @Column({
        type: "varchar",
        length: 150,
        unique: true
    })
    email: string;

    @Column({ 
        type: "varchar",
        length: 300,
    })
    password: string;

    
    @Column({
        type: "varchar",
        length: 30
    })
    phoneNumber: string;
}