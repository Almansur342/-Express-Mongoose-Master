import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // data validation useing Joi.
    // const {error,value} = studentValidationSchema.validate(studentData);

    //data validation using zod
    // const zodParseData = studentValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is created',
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Student is created',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
