export const baseUrl = "http://localhost:8080"

export const apis = {
    login : `${baseUrl}/auth/login`,
    signup : `${baseUrl}/auth/register`,
    usernameCheck: `${baseUrl}/auth/check-username`,
    emailCheck: `${baseUrl}/auth/check-email`,
}