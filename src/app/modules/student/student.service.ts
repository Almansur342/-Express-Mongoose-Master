import { StudentModel } from './student.model';

const getAllStudentsfromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentsfromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  getAllStudentsfromDB,
  getSingleStudentsfromDB,
};
