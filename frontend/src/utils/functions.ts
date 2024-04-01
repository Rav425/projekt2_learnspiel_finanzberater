// Get avatar initals
export const getAvatarInitials = (name) => {
    return name ? name.split(' ').map((n) => n[0]).join('').toUpperCase() : '';
}