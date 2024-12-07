import config from "../../config";
import { TUser } from "./user.interface";

const createStudentIntoDB = async (
  password: string,
  studentData: TStudent
) => {
    const userDate: Partial<TUser> = {}

    userDate.passwrod = password || (config.default_password)

    userDate.role = 'student';

    
};
