import { Time } from "@angular/common";

export class Booking {
    Student_Email !: string;
    Module_Name !: string;
    Tutor_Email !: string;
    Start_Date !: Date;
    Start_Time !: Time;
    End_Time !: Time;
}
