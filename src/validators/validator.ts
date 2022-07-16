export const isValidPhoneNumber = (phone_number : string) : boolean => {
    return phone_number.length === 18 || phone_number.length === 17;
}

export const isValidPassword = (password : string) : boolean => {
    return password.length >= 6 && password.length <= 16;
}