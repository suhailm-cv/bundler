export type projectRoles = "Initiator" | "Reviewer" | "Member" | "Guest";

export interface IUser {
  id: number;
  name: string;
}

export interface IProjectAllocation {
	id: number;
	allocationStartDate: string;
	allocationEndDate: string;
	role: string;
	user: IUser;
	isActive: boolean;
}

export interface IProjectAllocationState {
	data: IProjectAllocation[];
	status: "idle" | "loading" | "failed" | "success";
}

export interface IGetCurrentProjectRole { 
  initiatorId: string | number; 
  reviewerId: string | number; 
  projectAllocation: IProjectAllocationState; 
  loggedInUserId: number;
}

export const getCurrentProjectRoleOfUser = ({
	initiatorId,
	reviewerId,
	projectAllocation,
  loggedInUserId,
}: IGetCurrentProjectRole): projectRoles => {
  if (loggedInUserId === reviewerId) {
    return "Reviewer";
  } 
  if (loggedInUserId === initiatorId) {
    return "Initiator";
  }
	if (projectAllocation.data.filter((member) => member.user.id === loggedInUserId).length > 0) {
				return "Member";
	}
	return "Guest";
};

export default {
	getCurrentProjectRoleOfUser,
	
}