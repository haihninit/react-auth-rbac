/**
 * Custom hook that returns a boolean value if the user can access the specified route path,
 * by assigned role
 *
 * @param path
 * @param userRole
 * @param routeRoles
 * @returns [boolean]
 */
export declare const useRole: (path: string, userRole?: string | undefined, routeRoles?: string[] | undefined) => boolean[];
