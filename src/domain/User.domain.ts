export type User = {
    id_user: number;
    first_name: string;
    last_name: string | null;
    phone_number: string;
    avatar_url: string | null;
    vk_user_id: number | null;
}

export function authWithVk(user: User) {
    return !!user.vk_user_id
}