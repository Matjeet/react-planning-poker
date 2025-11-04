export const InputValidation = (name: string): boolean => {
        if (name.length < 5 || name.length > 20) {
            return false
        }

        const specialCharsRegex = /[_,.*#\\/\\-]/
        if (specialCharsRegex.test(name)) {
            return false
        }

        const numbers = name.replace(/[^0-9]/g, '')
        if (numbers.length > 3) {
            return false
        }

        if(/^\d+$/.test(name)) {
            return false
        }

        return true
}