export type TUser = {
  id: string;
  passwrod: string;
  needsPasswordChange?: string;
  role: "admin" | "faculty" | "student";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};
