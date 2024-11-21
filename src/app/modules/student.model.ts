import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardina,
  Student,
  UserName,
} from './student/student.interdace';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContactNo: { type: String, required: true },
  motherOccupation: { type: String, required: true },
});

const localGuardinaSchema = new Schema<LocalGuardina>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: String,
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emargencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'O+', 'O-', 'B+', 'B-', 'AB+', 'AB-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardina: localGuardinaSchema,
  profileImage: { type: String },
  isActive: ['active', 'blocked'],
});

export const StudentModel = model<Student>('Student', studentSchema);
