import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { ConfirmToken, ForgotPasswordForm, NewPasswordForm, RequestConfirmationCodeForm, UserLoginForm, UserRegistrationForm } from '../types'

export async function createAccount(formtData:UserRegistrationForm) {
    try {
        const url = '/auth/create-account'
        const { data } = await api.post<string>(url,formtData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error(error.response?.data.error)
        }
    }
}

export async function confirmAccount(formtData: ConfirmToken) {
    try {
        const url = '/auth/confirm-account'
        const { data } = await api.post<string>(url,formtData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error(error.response?.data.error)
        }
    }
}

 export async function requestConfirmationCode(formtData: RequestConfirmationCodeForm) {
        try {
            const url = '/auth/request-code'
            const { data } = await api.post<string>(url,formtData)
            return data
        } catch (error) {
            if(isAxiosError(error) && error.message) {
                throw new Error(error.response?.data.error)
            }
        }
}

export async function authenticateUser(formtData: UserLoginForm) {
    try {
        const url = '/auth/login'
        const { data } = await api.post<string>(url,formtData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error(error.response?.data.error)
        }
    }
}

export async function forgotPassword(formtData: ForgotPasswordForm) {
    try {
        const url = '/auth/forgot-password'
        const { data } = await api.post<string>(url,formtData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error(error.response?.data.error)
        }
    }
}

export async function validateToken(formtData: ConfirmToken) {
    try {
        const url = '/auth/validate-token'
        const { data } = await api.post<string>(url,formtData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error(error.response?.data.error)
        }
    }
}

export async function updatePasswordWithToken({formData, token}: {formData: NewPasswordForm, token: ConfirmToken['token']}) {
    try {
        const url = `/auth/update-password/${token}`
        const { data } = await api.post<string>(url,formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error(error.response?.data.error)
        }
    }
}