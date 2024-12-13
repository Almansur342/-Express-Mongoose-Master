import config from '../../config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentDta: Student) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  //set suer role
  userData.role = 'student';

  //set manually generated id
  userData.id = '203010001';

  //create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    studentDta.id = newUser.id;
    studentDta.user = newUser._id;

    const newStudent = await StudentModel.create(studentDta);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoDB,
};
