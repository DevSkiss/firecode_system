export default class RoleService {
    static get baseUrl() { return baseUrl };

    async getRolesByUserId(userId) {
        const res = await fetch(`${baseUrl}/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const data = await res.json();
        return data;
    }
}

export const baseUrl = "http://localhost:4000/api/user-role/";