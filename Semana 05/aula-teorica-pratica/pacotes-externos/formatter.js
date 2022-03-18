import { format } from "date-fns"

const formatDate = date => {
    return format(date, 'dd/MM/yyyy')
}

export default formatDate